# Areeb Bhaiya Wedding Invitation — implementation checkpoint

This source package keeps the existing Vite/React project and adds the missing invitation sections in a coordinated layout.

## Current implementation
- Reuses the existing opening, hero, story, countdown, RSVP and nasheed player components.
- Adds Bismillah/invitation introduction, couple cards, marriage ayah, three-heart date reveal, wishes preview and envelope-style thank-you letter.
- Removes the gallery from the active page flow, matching the previously agreed scope.
- Replaces Haldi/Mehendi with Nikah and Reception/Walima data.
- Venue details and map links are intentionally placeholders until confirmed.
- The wishes form is a local preview only; it does not transmit/store submissions. RSVP currently remains local-only too.

## Local setup
1. Back up your current project folder first.
2. Extract this ZIP to a separate test folder (do not overwrite the original project yet).
3. Open the extracted folder in VS Code.
4. Run `npm install`.
5. Run `npm run dev` and test on desktop and mobile widths.
6. Run `npm run build` before committing or deploying.

## Still required before production
- Replace placeholder venue names, addresses, event time/date as soon as confirmed.
- Confirm whether the wedding date/time in `src/data/wedding.js` is correct.
- Generate/integrate reference-matched artwork (curtains, floral borders, chandelier, transparent ornaments) into `public/images/` and update CSS/assets.
- Verify the exact opening timing and animation against the reference video.
- Decide how guest RSVP and wishes should be delivered (backend or a real contact endpoint); do not claim submissions are stored until configured.
- Run local build and browser testing. This package has not been build-verified in this environment because project dependencies could not be installed here.
