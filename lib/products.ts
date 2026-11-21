// Placeholder catalogue for the visual build. Swap for real data / a CMS /
// the commerce backend later — pages only depend on the shapes exported here.

export type CategoryId = "laundry" | "kitchen" | "surfaces" | "bathroom" | "hands";
export type BottleShape = "jug" | "spray" | "squeeze" | "pump" | "angled";

export type Category = {
  id: CategoryId;
  name: string;
  blurb: string;
  tint: string;
};

export type Size = { label: string; price: number };

export type Product = {
  slug: string;
  name: string;
  scent?: string;
  category: CategoryId;
  shape: BottleShape;
  color: string;
  label: [string, string?];
  badge?: "Bestseller" | "New";
  tagline: string;
  description: string;
  highlights: string[];
  howTo: string;
  sizes: Size[];
};

export const categories: Category[] = [
  { id: "laundry", name: "Laundry", blurb: "Liquids, softeners and stain care", tint: "#e6e2fb" },
  { id: "kitchen", name: "Kitchen", blurb: "Dishes, grease and grime", tint: "#fdf0b8" },
  { id: "surfaces", name: "Surfaces & Floors", blurb: "Counters, tiles and glass", tint: "#d3f1e5" },
  { id: "bathroom", name: "Bathroom", blurb: "Bleach, bowls and limescale", tint: "#d6e8fb" },
  { id: "hands", name: "Hand Care", blurb: "Gentle washes and refills", tint: "#fde0d0" },
];

export const products: Product[] = [
  {
    slug: "auto-laundry-liquid",
    name: "Auto Laundry Liquid",
    scent: "Fresh Linen",
    category: "laundry",
    shape: "jug",
    color: "#7c6ff0",
    label: ["Laundry", "Liquid"],
    badge: "Bestseller",
    tagline: "Deep-clean concentrate for top and front loaders.",
    description:
      "A low-foam concentrate that lifts everyday dirt in cold or warm water and rinses out clean, leaving clothes soft and lightly scented.",
    highlights: ["Up to 40 washes per 2L", "Works in cold water", "Colour-safe formula"],
    howTo: "Use one 50ml cap per full load. For heavy soiling, add half a cap extra or pre-treat stains first.",
    sizes: [
      { label: "2L", price: 89.99 },
      { label: "5L", price: 189.99 },
      { label: "20L", price: 649.99 },
    ],
  },
  {
    slug: "fabric-softener",
    name: "Fabric Softener",
    scent: "Spring Bloom",
    category: "laundry",
    shape: "jug",
    color: "#f58fb5",
    label: ["Fabric", "Softener"],
    tagline: "Softness and a scent that lasts through the week.",
    description:
      "Conditions fibres so towels stay fluffy and clothes are easier to iron, with a floral fragrance that lingers without overpowering.",
    highlights: ["Reduces static and creasing", "Long-lasting fragrance", "Gentle on colours"],
    howTo: "Add 35ml to the softener compartment or the final rinse. Do not pour directly onto fabric.",
    sizes: [
      { label: "2L", price: 69.99 },
      { label: "5L", price: 149.99 },
    ],
  },
  {
    slug: "stain-remover",
    name: "Pre-Wash Stain Remover",
    category: "laundry",
    shape: "spray",
    color: "#3ec6c0",
    label: ["Stain", "Remover"],
    tagline: "Spray, wait five minutes, wash as usual.",
    description:
      "A targeted pre-wash spray that loosens grass, food, oil and collar marks before they set.",
    highlights: ["Works on whites and colours", "No scrubbing needed", "Fast five-minute action"],
    howTo: "Spray directly onto the stain, leave for five minutes, then wash as normal. Test delicate fabrics first.",
    sizes: [{ label: "500ml", price: 54.99 }],
  },
  {
    slug: "dishwashing-liquid",
    name: "Dishwashing Liquid",
    scent: "Lemon",
    category: "kitchen",
    shape: "squeeze",
    color: "#f4c81f",
    label: ["Dish", "Liquid"],
    badge: "Bestseller",
    tagline: "Thick, long-lasting suds that cut through grease.",
    description:
      "A rich concentrate that keeps working through a full sink of dishes — a small squeeze goes a long way.",
    highlights: ["Cuts grease fast", "Kind to hands", "Long-lasting foam"],
    howTo: "Add a small squeeze to a sink of warm water. For stubborn pots, apply directly to a sponge.",
    sizes: [
      { label: "750ml", price: 34.99 },
      { label: "5L", price: 159.99 },
      { label: "25L", price: 599.99 },
    ],
  },
  {
    slug: "heavy-duty-degreaser",
    name: "Heavy-Duty Degreaser",
    category: "kitchen",
    shape: "spray",
    color: "#f08a3c",
    label: ["Degreaser"],
    tagline: "For stoves, extractors, braais and workshop floors.",
    description:
      "An industrial-strength degreaser that dissolves baked-on oil and carbon without endless scrubbing.",
    highlights: ["Dissolves baked-on grease", "Dilutable up to 1:10", "Kitchen and workshop use"],
    howTo: "Spray onto the surface, leave for two to three minutes, then wipe or rinse. Dilute for light cleaning.",
    sizes: [
      { label: "500ml", price: 59.99 },
      { label: "5L", price: 229.99 },
    ],
  },
  {
    slug: "multi-purpose-cleaner",
    name: "Multi-Purpose Cleaner",
    scent: "Green Apple",
    category: "surfaces",
    shape: "spray",
    color: "#2fb38a",
    label: ["Multi-", "Purpose"],
    badge: "Bestseller",
    tagline: "One bottle for counters, desks, walls and appliances.",
    description:
      "An everyday spray-and-wipe cleaner that removes fingerprints, spills and sticky marks from almost any hard surface.",
    highlights: ["Streak-free finish", "No rinsing needed", "Safe on most hard surfaces"],
    howTo: "Spray onto the surface and wipe with a clean cloth. No need to rinse.",
    sizes: [
      { label: "500ml", price: 44.99 },
      { label: "5L", price: 169.99 },
    ],
  },
  {
    slug: "tile-floor-cleaner",
    name: "Tile & Floor Cleaner",
    scent: "Lavender",
    category: "surfaces",
    shape: "jug",
    color: "#9b7bd8",
    label: ["Tile &", "Floor"],
    tagline: "Mop once, shine all day.",
    description:
      "A no-rinse floor cleaner that lifts dirt from tiles, laminate and sealed floors and dries without residue.",
    highlights: ["No sticky residue", "Quick-drying", "Fresh lavender scent"],
    howTo: "Dilute 50ml in a 5L bucket of water. Mop and leave to air dry.",
    sizes: [
      { label: "2L", price: 74.99 },
      { label: "5L", price: 164.99 },
    ],
  },
  {
    slug: "window-glass-cleaner",
    name: "Window & Glass Cleaner",
    category: "surfaces",
    shape: "spray",
    color: "#4aa8f0",
    label: ["Window", "& Glass"],
    tagline: "Clear glass, mirrors and screens without the streaks.",
    description:
      "A fast-evaporating formula that leaves windows, mirrors and stainless steel bright and smear-free.",
    highlights: ["Streak-free shine", "Fast-drying", "Great on mirrors and steel"],
    howTo: "Spray lightly and wipe with a dry lint-free cloth or paper towel.",
    sizes: [
      { label: "500ml", price: 39.99 },
      { label: "5L", price: 139.99 },
    ],
  },
  {
    slug: "thick-bleach",
    name: "Thick Bleach",
    category: "bathroom",
    shape: "angled",
    color: "#3d7be0",
    label: ["Thick", "Bleach"],
    tagline: "Clings, whitens and kills germs where they hide.",
    description:
      "A thick bleach that clings to surfaces for longer contact time — ideal for toilets, drains and tile grout.",
    highlights: ["Clings to surfaces", "Whitens grout and porcelain", "Kills household germs"],
    howTo: "Apply undiluted under the rim or onto the surface. Leave for 10 minutes, then flush or rinse. Never mix with other cleaners.",
    sizes: [
      { label: "750ml", price: 32.99 },
      { label: "5L", price: 119.99 },
    ],
  },
  {
    slug: "toilet-bowl-cleaner",
    name: "Toilet Bowl Cleaner",
    scent: "Ocean",
    category: "bathroom",
    shape: "angled",
    color: "#1f9ed1",
    label: ["Toilet", "Cleaner"],
    tagline: "Angled neck reaches under the rim.",
    description:
      "Removes limescale and stains while leaving the bowl fresh, with an angled neck that gets right under the rim.",
    highlights: ["Removes limescale", "Under-the-rim reach", "Fresh ocean scent"],
    howTo: "Squeeze under the rim, leave for 10 minutes, brush and flush.",
    sizes: [{ label: "750ml", price: 36.99 }],
  },
  {
    slug: "pine-gel",
    name: "Pine Gel",
    category: "bathroom",
    shape: "squeeze",
    color: "#2e9a57",
    label: ["Pine", "Gel"],
    badge: "New",
    tagline: "The classic all-rounder for floors, drains and bins.",
    description:
      "A thick pine-scented gel that cleans and deodorises floors, basins, drains and bins in one go.",
    highlights: ["Cleans and deodorises", "Dissolves easily in water", "Classic pine scent"],
    howTo: "Dissolve a tablespoon in a bucket of warm water, or apply neat to tough spots and rinse.",
    sizes: [
      { label: "1L", price: 49.99 },
      { label: "5L", price: 179.99 },
    ],
  },
  {
    slug: "hand-wash",
    name: "Liquid Hand Wash",
    scent: "Aloe",
    category: "hands",
    shape: "pump",
    color: "#7fcf9a",
    label: ["Hand", "Wash"],
    badge: "New",
    tagline: "Gentle enough for all-day use.",
    description:
      "A moisturising hand wash with a soft aloe scent — rich lather that rinses clean and doesn't dry out skin.",
    highlights: ["Moisturising formula", "Rich, soft lather", "5L refill available"],
    howTo: "Apply one pump to wet hands, lather for 20 seconds and rinse.",
    sizes: [
      { label: "500ml", price: 42.99 },
      { label: "5L refill", price: 174.99 },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;
export const formatPrice = (n: number) => `R${n.toFixed(2)}`;
export const FREE_DELIVERY_THRESHOLD = 750;
export const DELIVERY_FEE = 95;
