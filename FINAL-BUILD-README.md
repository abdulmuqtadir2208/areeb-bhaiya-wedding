# Areeb Bhaiya Wedding Invitation — Consolidated Build

This is the consolidated working project based on the implementation you tested, including the scroll-decoration layer and vector wedding artwork.

## Included
- React + Vite single-page invitation
- Heart-button opening and split-curtain reveal
- Blush/ivory/gold theme and responsive layout
- Bismillah invitation section and Qur'an 30:21 marriage verse
- Couple cards and three-heart date reveal
- Countdown, Nikah and Reception/Walima event cards, and separate venue cards
- Local-only RSVP interaction and copyable wishes preview
- Envelope-style thank-you letter
- Three-track nasheed player
- CSS-rendered falling petals and subtle glow on scroll
- Original SVG vector artwork: chandelier, floral corners, ornamental divider

## Run locally
From this folder in VS Code terminal:

```powershell
npm install
npm run dev
```

Production build:

```powershell
npm run build
npm run preview
```

## Important before publishing
1. Confirm `weddingDate` and the displayed Nikah time in `src/data/wedding.js`.
2. Replace the Reception date/time and both venue/address placeholders once confirmed.
3. Add real map URLs only after venue addresses are finalized.
4. RSVP selections are currently browser-only and are not saved or sent to the hosts.
5. Wishes can be previewed/copied but are not sent to the hosts.
6. Verify the final project in your Windows environment before pushing to GitHub/Vercel.

## Safety
This is a separate implementation package. Do not extract it over the original `brother-wedding` folder. Extract to a new folder or make a backup first.

## Build verification note
The project source and assets are consolidated, but an independent production build could not be confirmed in the packaging environment: `npm install` timed out and the copied `node_modules` lacked Vite/Rolldown's platform-specific native binding. Run `npm install` and `npm run build` locally to verify the final consolidated package.
