// Catalogue from the Novara design. Swap for the commerce backend later —
// the UI only depends on the shapes exported here.

export type BottleShape = "cream" | "dish" | "bleach" | "spray" | "laundry" | "soap";

export type Product = {
  id: string;
  cat: string;
  name: string;
  /** [label, price in rand] */
  sizes: [string, number][];
  use: string;
  long: string;
  how: string[];
  ing: string;
  bottle: { fill: string; cap: string; shape: BottleShape; label: string };
};

export const PRODUCTS: Product[] = [
  {
    id: "cream", cat: "Surfaces", name: "Multi-surface cream", sizes: [["500 ml", 42], ["750 ml", 54]],
    use: "Lifts grease and marks from stovetops, tiles, baths and basins without scratching.",
    long: "A gentle mineral cream for the surfaces that take the most wear. Lifts burnt-on grease, soap scum and water marks without scratching enamel, stainless steel or ceramic tile.",
    how: ["Apply a small amount to a damp cloth or directly to the surface.", "Rub gently in circles, then rinse with clean water and wipe dry.", "For stubborn marks, leave for two minutes before rubbing."],
    ing: "Water, calcium carbonate (fine mineral abrasive), plant-derived surfactants, glycerin, citric acid, preservative. Fragrance-free.",
    bottle: { fill: "#A9DCD4", cap: "#0E5E6F", shape: "cream", label: "cream cleaner" },
  },
  {
    id: "dish", cat: "Dishes", name: "Dish and hand liquid", sizes: [["750 ml", 42], ["1.5 L", 72]],
    use: "Concentrated for a day of dishes from a small measure. Gentle on the hands that wash them.",
    long: "Concentrated enough that a small measure sees a family through a day of dishes, and mild enough for the hands doing the washing. Cuts grease in cold water.",
    how: ["Add a small measure to a basin of water.", "Wash, rinse and air-dry.", "Also suitable for hand-washing delicate clothing."],
    ing: "Water, plant-derived surfactants, glycerin, sodium chloride, citric acid, preservative. Fragrance-free.",
    bottle: { fill: "#2E8A95", cap: "#083C47", shape: "dish", label: "dish liquid" },
  },
  {
    id: "bleach", cat: "Germ protection", name: "Thick bleach", sizes: [["750 ml", 38], ["1.5 L", 62]],
    use: "Clings to the bowl and kills germs where they live. For toilets, drains and hard-to-reach places.",
    long: "A thick, clinging bleach for toilets, drains and the places a wipe cannot reach. Kills germs on contact and keeps working while it sits.",
    how: ["Apply under the rim and around the bowl.", "Leave for at least ten minutes, then flush.", "Never mix with other cleaning products. Keep out of reach of children."],
    ing: "Water, sodium hypochlorite (4.5%), sodium hydroxide, thickener. Fragrance-free.",
    bottle: { fill: "#0E5E6F", cap: "#FF7F66", shape: "bleach", label: "thick bleach" },
  },
  {
    id: "spray", cat: "Surfaces", name: "Multi-surface spray", sizes: [["750 ml", 48]],
    use: "For daily wipe-downs of counters, tables, handles and switches. Streak-free on glass and steel.",
    long: "The everyday spray for the surfaces a family touches most. Cuts through fingerprints and food residue, dries streak-free and leaves nothing behind.",
    how: ["Spray lightly onto the surface or a cloth.", "Wipe with a clean, dry cloth.", "Safe on sealed stone, laminate, glass and stainless steel."],
    ing: "Water, plant-derived surfactants, ethanol, citric acid, preservative. Fragrance-free.",
    bottle: { fill: "#A9DCD4", cap: "#0E5E6F", shape: "spray", label: "surface spray" },
  },
  {
    id: "laundry", cat: "Laundry", name: "Laundry liquid", sizes: [["1 L", 68], ["2 L", 118]],
    use: "Works in cold water and by hand. Rinses fully from nappies, school uniforms and bedding.",
    long: "A concentrated laundry liquid made for hand-washing and cold machine cycles. Rinses completely, so it suits cloth nappies and the skin of the people who wear them.",
    how: ["Use one measure per basin or machine load.", "Works in cold water; no need to pre-soak.", "Rinse until the water runs clear."],
    ing: "Water, plant-derived surfactants, enzymes, glycerin, sodium citrate, preservative. Fragrance-free.",
    bottle: { fill: "#2E8A95", cap: "#083C47", shape: "laundry", label: "laundry liquid" },
  },
  {
    id: "soap", cat: "Germ protection", name: "Hand wash", sizes: [["500 ml", 36], ["1 L refill", 58]],
    use: "Mild, fragrance-free and quick to lather. Made to be used many times a day.",
    long: "Handwashing is the single most effective habit in the home. This is a mild, fragrance-free wash made to be used many times a day without drying skin.",
    how: ["Wet hands, apply one pump and lather for twenty seconds.", "Rinse and dry with a clean towel.", "Suitable for children and sensitive skin."],
    ing: "Water, plant-derived surfactants, glycerin, aloe extract, citric acid, preservative. Fragrance-free.",
    bottle: { fill: "#A9DCD4", cap: "#FF7F66", shape: "soap", label: "hand wash" },
  },
];

export const R = (n: number) => "R" + n.toFixed(2);
export const P = (id: string) => PRODUCTS.find((p) => p.id === id);

export const FREE_DELIVERY_OVER = 500;
export const STANDARD_DELIVERY = 65;
export const EXPRESS_DELIVERY = 120;
