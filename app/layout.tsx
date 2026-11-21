import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import { RevealWatcher, Toast } from "@/components/Bits";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductModal from "@/components/ProductModal";
import { StoreProvider } from "@/components/Store";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] });
const publicSans = Public_Sans({ variable: "--font-public-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Novara — A new day, every day", template: "Novara — %s" },
  description: "Novara is a health organisation and maker of household cleaning products. A new day, every day.",
  icons: { icon: "/mark-light.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${publicSans.variable}`}>
      <body>
        <StoreProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ProductModal />
          <Chat />
          <Toast />
          <RevealWatcher />
        </StoreProvider>
      </body>
    </html>
  );
}
