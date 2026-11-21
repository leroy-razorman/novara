# novara
This project holds the code for the cleaning detergent company, Novara

## Running the site

```bash
npm install
npm run dev   # http://localhost:3000
```

Next.js (App Router). The site is a port of the Novara design: `app/globals.css`
is the design's stylesheet, the photos are in `public/img` and the logo files in
`public/`. This is the visual build only: the catalogue is `lib/products.ts`, the
basket lives in the browser (`lib/cart-store.ts`), checkout takes no payment, the
contact and newsletter forms send nothing, and the assistant gives scripted
answers from `lib/assistant.ts`.
