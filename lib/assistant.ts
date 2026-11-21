// Scripted answers for the on-site assistant, taken from the design.
// Swap `answer` for a real model call when the backend exists.
import { PRODUCTS, R } from "./products";

export const QUICK = ["Which product for my kitchen?", "How much is delivery?", "How do returns work?", "Is the bleach safe around children?"];
export const GREETING = "Hello. I am the Novara assistant. Ask me about our products, how to use them, delivery or returns.";

export function answer(question: string) {
  const q = question.toLowerCase();
  const has = (...w: string[]) => w.some((x) => q.includes(x));
  const p = PRODUCTS.find((p) => q.includes(p.name.toLowerCase()) || q.includes(p.id));
  if (has("deliver", "shipping", "courier", "how long", "arrive")) return "Orders are dispatched within one working day. Standard courier takes 2 to 4 working days anywhere in South Africa for R65, or free on orders over R500. Express reaches major centres the next working day for R120.";
  if (has("return", "refund")) return "Unopened products can be returned within 30 days for a full refund. If something arrives damaged or missing, send a photo within 48 hours and we will replace it at no cost.";
  if (has("pay", "card", "eft")) return "You can pay by card or Instant EFT through a secure payment provider. This site is a preview at the moment, so no real payment is taken.";
  if (has("safe", "child", "mix", "swallow", "skin")) return "All Novara products are fragrance-free. Keep them out of reach of children, and never mix bleach with other cleaning products. If product is swallowed or gets in the eyes, rinse with water and contact a doctor or poison centre.";
  if (has("kitchen", "counter", "stove", "grease")) return "For the kitchen: Multi-surface spray (R48) for daily wipe-downs, Multi-surface cream (from R42) for stovetops and stubborn grease, and Dish and hand liquid (from R42) for the washing up.";
  if (has("toilet", "bathroom", "germ", "drain")) return "For toilets and drains use Thick bleach (from R38): apply under the rim, leave ten minutes, then flush. Multi-surface cream is good for baths, basins and tiles.";
  if (has("laundry", "clothes", "nappies", "uniform")) return "Laundry liquid (1 L R68, 2 L R118) works in cold water and by hand, and rinses fully from nappies, uniforms and bedding.";
  if (has("hand")) return "Hand wash (500 ml R36, 1 L refill R58) is mild and fragrance-free, made to be used many times a day without drying skin.";
  if (p) return `${p.name}: ${p.long} Sizes: ${p.sizes.map((s) => s[0] + " " + R(s[1])).join(", ")}.`;
  if (has("price", "cost", "how much", "product", "sell", "range")) return "Our range: " + PRODUCTS.map((p) => `${p.name} from ${R(p.sizes[0][1])}`).join("; ") + ".";
  if (has("contact", "email", "phone", "speak", "human")) return "You can reach the team at hello@novara.org or +27 21 000 0000 on weekdays, 8am to 5pm, or use the contact page.";
  if (has("programme", "program", "charity", "ngo", "donat", "work", "mission")) return "Novara is funded by the products it makes. Each order supports the supply of the same products to partner households, clinics and schools through our Healthy start, Clean classrooms and Household supply programmes.";
  return "I can help with products, how to use them, delivery, returns and payment. For anything else, write to hello@novara.org and the team will reply within two working days.";
}
