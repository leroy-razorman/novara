import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const instrument = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Novara — Cleaning that pulls its weight", template: "%s · Novara" },
  description: "Hard-working detergents and cleaning products for homes and businesses, in everyday and bulk sizes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
