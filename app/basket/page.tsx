import type { Metadata } from "next";
import Basket from "@/components/Basket";

export const metadata: Metadata = { title: "Your basket" };

export default function Page() {
  return (
    <section className="page on">
      <div className="phead">
        <div className="wrap">
          <h1>Your basket</h1>
        </div>
      </div>
      <Basket />
    </section>
  );
}
