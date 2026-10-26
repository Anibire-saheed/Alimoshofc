# Alimosho FC

A responsive recreation of https://alimoshosc.wixsite.com/alimoshofc using Next.js, Tailwind CSS, shadcn-style Radix UI components, Redux Toolkit, Zod, and Sonner.

## Run

```sh
yarn install
yarn dev
```

Open http://localhost:3000. Build with `yarn build` (or `yarn next build --webpack` if the environment blocks Turbopack worker ports).

## Structure

- `components/sections/`: header, hero, news, fixtures, about, contact, and footer, each in its own folder.
- `components/ui/`: shadcn-compatible Button, Input, and Textarea; configured in `components.json`.
- `lib/store/`: per-provider Redux store for the mobile menu, session enquiry, shopping bag and practice predictions.
- `lib/validation.ts`: Zod enquiry schema.
- `public/fonts/`: original Anton, Avenir, and DIN fonts.
- `public/images/`: recovered original Wix assets.

## Scope

All club navigation is local: About, Goalfunda, Members, Youth Team, Predict & Win, Club Store, Tours, Blog, Soccer Schools, School Sports, Schedule, and Contact. There are 15 local article summaries. Navigation uses readable local routes such as `/goalfunda`, `/youth-team`, and `/club-store`. Some original Wix photos returned HTTP 403; affected cards and the about section reuse available club photographs. The fixtures reproduce the source's historical listing rather than a live feed.

The contact form is an added preview feature. It validates fields, reports errors through inline messages and Sonner, and stores the latest valid enquiry in Redux for the current session. The user can then open an addressed email containing the enquiry. There is no server delivery, database storage, or background email sending.

The store supports sizes, quantities and removal, then prepares an order enquiry by email. Prices are historical and must be confirmed. Archived prediction matches support session-only practice scores; no live prize contest is offered. Blog search and category filters operate on local article summaries. No club navigation leaves the app.
