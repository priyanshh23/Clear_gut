# Clear Gut Website Project Guide

This document explains what this project is, what has been changed, and what future editors or AI agents should know before making more updates.

The goal is simple: this is a React website for **Clear Gut**, a bold fibre drink brand. The site has a strong brutalist style, big black text, lime highlights, product images, a shop page, and a form that sends customer details by email.

## Project Name

**Clear Gut**

## Tech Used

- React
- Vite
- React Router
- Lucide icons
- Resend email API

## Main Commands

Start local development:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Check code quality:

```bash
npm run lint
```

Send a test email through Resend:

```bash
npm run test:email
```

## Important Files

- `src/pages/Home.jsx` - homepage and hero section
- `src/pages/Shop.jsx` - product/shop page
- `src/pages/About.jsx` - manifesto/about page
- `src/pages/SignUp.jsx` - purchase/contact form
- `src/components/Navbar.jsx` - top navigation and mobile menu
- `src/components/Footer.jsx` - footer links and brand text
- `src/index.css` - global styles, responsive styles, mobile fixes
- `api/send-order.js` - production/serverless email API entry
- `api/send-order-core.js` - main email sending logic
- `scripts/test-resend-email.mjs` - local Resend email test script
- `.env.local` - private local environment variables, not for sharing
- `.env.example` - safe example of required environment variables

## Pages

### Home Page

The home page contains:

- Hero text: `MURDER YOUR BLOAT.`
- Product/brand background image
- Buy button
- Small badges: `ZERO BS` and `RAW POWER`
- Moving marquee text
- Benefits cards
- Flavour cards

Important mobile work already done:

- The desktop hero background is hidden on mobile.
- A separate mobile hero image block is shown instead.
- The mobile image is controlled in `src/index.css` with `.mobile-hero-img` and `.mobile-hero-image`.
- The mobile hero image position can be tuned with `object-position`.

### Shop Page

The shop page contains:

- Main product image
- `VARIETY PACK 5-CANS`
- Rating stars
- Product copy
- Add to cart button that links to the signup form

Important change:

- All old `6 cans` text was changed to `5 cans`.
- The product image was replaced with `public/five_cans.png`.
- Product image sizing is now easy to adjust with CSS variables:

```css
.shop-product-image-wrap {
  --shop-product-width: 112%;
  --shop-product-shift-x: -8%;
}
```

How to edit:

- Increase `--shop-product-width` to zoom in.
- Decrease `--shop-product-width` to zoom out.
- Move image right by making `--shop-product-shift-x` closer to `0%`.
- Move image left by making it more negative.

### Signup Form

The form collects:

- Full name
- Email ID
- WhatsApp number

Validation added:

- Name does not allow numbers.
- WhatsApp does not allow letters.
- Email uses normal browser email validation.

The form sends data to:

```text
/api/send-order
```

### About Page

The about page is a manifesto style page. It explains the brand tone and product attitude.

## Email Setup

Email is handled with **Resend**.

Two emails are attempted when the form is submitted:

1. Admin email to the Clear Gut admin inbox
2. Short confirmation email to the customer email entered in the form

Required environment variables:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_TO_EMAIL=cleargutadmin@gmail.com
RESEND_FROM_EMAIL=Clear Gut Orders <orders@cleargut.in>
```

Do not hardcode these values in React files.

### Important Resend Note

Using `onboarding@resend.dev` is only for testing. It may send to spam or only allow limited recipients.

For production, the domain `cleargut.in` should be verified in Resend. After verification, use:

```env
RESEND_FROM_EMAIL=Clear Gut Orders <orders@cleargut.in>
```

The domain was added in Resend and may still be pending DNS verification. DNS records must be added in GoDaddy for `cleargut.in`.

## GoDaddy / Resend Domain Context

Domain:

```text
cleargut.in
```

Registrar:

```text
GoDaddy
```

Current goal:

- Verify `cleargut.in` in Resend
- Add DNS records from Resend into GoDaddy DNS
- After verification, customer confirmation emails should work better and avoid spam more reliably

If Resend shows `Pending`, it usually means DNS records are missing or still propagating.

## Mobile Work Already Done

Mobile improvements made:

- Navbar changed to hamburger menu on mobile
- Mobile menu opens as a full-screen overlay
- Hero image has separate mobile rules
- Shop page product image resets on mobile
- Flavour cards are safer on small screens
- Signup form has mobile-specific sizing and padding

Mobile styles are mostly inside:

```css
@media (max-width: 768px) {
  ...
}
```

in `src/index.css`.

## Navbar Notes

Desktop navbar:

- Shows logo
- Shows links
- Shows buy button

Mobile navbar:

- Shows logo
- Shows hamburger button
- Opens full-screen menu
- Close button appears in menu

Main file:

```text
src/components/Navbar.jsx
```

Main mobile CSS:

```text
src/index.css
```

## Product Images

Important public assets:

- `public/hero_bg.png` - hero image
- `public/five_cans.png` - main shop product image
- `public/shop_variety.png` - old product image with 6-can text
- `public/variety_box.png` - box image
- `public/real_box.png` - product box image

Avoid using old images that show 6 cans.

## Design Style

The site uses:

- Big bold uppercase headings
- Black outlines
- Lime accent color
- Brutalist square buttons
- No rounded cards
- Product-first imagery

Main colors are in `src/index.css`:

```css
--color-black: #000000;
--color-lime: #BBC34A;
--color-silver: #E5E5E5;
--color-white: #FFFFFF;
--color-blood: #FF0000;
```

## Change History

### Hero Section

- Moved hero text from center/right to left alignment.
- Later aligned hero text with the top `CLEAR GUT` logo.
- Replaced old hero image with a new Clear Gut product image.
- Added mobile-specific hero image behavior.
- Adjusted mobile hero image crop and position many times to better fit phone screens.

### Benefit Cards

- Fixed card title alignment.
- Made `REFRESHINGLY` and `CARBONATED` appear on separate lines.
- Reduced that title size slightly so it centers properly.

### Shop Page

- Removed all `6 cans` text.
- Changed product text to `5-CANS`.
- Replaced old 6-can product image with a 5-can image.
- Zoomed and shifted the product image.
- Later moved product image sizing into CSS variables for easier editing.

### Footer

- Removed the `FAQ` footer link.

### Signup Form

- Added name validation so numbers are not accepted.
- Added phone validation so letters are not accepted.
- Connected form to Resend email API.
- Added admin email sending.
- Added customer confirmation email sending.
- Added better error handling for missing API config and Resend restrictions.
- Made form responsive on mobile.

### Email / Resend

- Added `api/send-order.js`.
- Added shared email logic in `api/send-order-core.js`.
- Added local test script `scripts/test-resend-email.mjs`.
- Added `npm run test:email`.
- Set admin email target to `cleargutadmin@gmail.com` through env variable.
- Started domain setup for `cleargut.in`.

### Mobile

- Added hamburger menu.
- Added full-screen mobile nav overlay.
- Fixed shop mobile layout.
- Fixed flavour card clipping.
- Fixed signup form mobile spacing.
- Worked on mobile hero image sizing and positioning.

## Notes For Future AI Agents

Please follow these rules before editing:

1. Do not hardcode API keys.
2. Do not put private emails or keys in React browser code.
3. Keep Resend values in `.env.local` locally and deployment environment variables in production.
4. Keep desktop and mobile behavior separate where possible.
5. For mobile-only changes, edit inside `@media (max-width: 768px)`.
6. Avoid old product copy or images that say 6 cans.
7. Run `npm run lint` and `npm run build` after changes.
8. Product image positioning on the shop page should be changed through CSS variables, not inline styles.
9. Mobile hero image positioning should be changed in `.mobile-hero-image`.

## Useful Prompt Context

If another agent needs a quick summary, use this:

> This is a React/Vite website for Clear Gut, a bold fibre drink brand. The site has Home, Shop, About, and Signup pages. The form sends admin and customer emails through Resend. The domain is `cleargut.in`, bought from GoDaddy, and is being verified in Resend for better deliverability. The design is brutalist: black borders, huge uppercase typography, lime accents, product images, and no rounded cards. Mobile responsiveness is important and most users are expected to use phones.

## Current Known Things To Watch

- Resend customer confirmation emails may fail until `cleargut.in` is fully verified.
- Gmail spam placement improves after using a verified domain and correct DNS records.
- Mobile hero image may still need visual tuning depending on screen size.
- GoDaddy DNS records must match exactly what Resend provides.

