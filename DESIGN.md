---
name: Papelito
description: A quiet white boutique for creative stationery in Santiago, where the logo is the one burst of colour and the products do the rest.
colors:
  papel: "#ffffff"
  tinta: "#23414b"
  tinta-suave: "#4f6871"
  acento: "#0d7389"
  acento-oscuro: "#0a5a6c"
  pie: "#215a69"
  velo: "#f4f7f7"
  hilo: "#dfe7e8"
  campo-borde: "#6f878f"
  arte-hondo: "#5b8c97"
  arte-medio: "#7fb1ba"
  arte-suave: "#9cc6cc"
  arte-claro: "#b7d8dc"
  arte-palido: "#d6e8ea"
typography:
  page-title:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.2
  subhead:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  section-title:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
  body:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  product-name:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.3
  price:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  note:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.12em"
  small:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  nav:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
  tag:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  badge:
    fontFamily: "Quattrocento Sans, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  square: "0"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "40px"
  page-edge: "clamp(16px, 3vw, 40px)"
  grid-gutter: "clamp(14px, 2vw, 28px)"
  grid-row: "clamp(24px, 3vw, 36px)"
  section: "clamp(36px, 5vw, 64px)"
  target: "44px"
components:
  button-primary:
    backgroundColor: "{colors.acento}"
    textColor: "{colors.papel}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "12px 28px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.acento-oscuro}"
  button-primary-disabled:
    backgroundColor: "{colors.velo}"
    textColor: "{colors.tinta-suave}"
  add-link:
    textColor: "{colors.acento}"
    typography: "{typography.note}"
    padding: "0 10px"
    height: "{spacing.target}"
  add-link-hover:
    textColor: "{colors.acento-oscuro}"
  quantity-button:
    textColor: "{colors.acento}"
    size: "{spacing.target}"
  quantity-button-hover:
    backgroundColor: "{colors.velo}"
    textColor: "{colors.acento-oscuro}"
  category-link:
    textColor: "{colors.tinta}"
    typography: "{typography.nav}"
    padding: "0 6px"
    height: "{spacing.target}"
  category-link-hover:
    textColor: "{colors.acento}"
  count-badge:
    backgroundColor: "{colors.acento}"
    textColor: "{colors.papel}"
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    padding: "0 5px"
    height: "20px"
  image-well:
    backgroundColor: "{colors.velo}"
    rounded: "{rounded.square}"
  delivery-option:
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "10px 14px"
    height: "52px"
  field:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.square}"
    padding: "10px 12px"
    height: "48px"
  order-bar:
    backgroundColor: "{colors.acento}"
    textColor: "{colors.papel}"
    typography: "{typography.note}"
    rounded: "{rounded.square}"
    padding: "8px 20px"
    height: "50px"
  order-bar-hover:
    backgroundColor: "{colors.acento-oscuro}"
  footer-band:
    backgroundColor: "{colors.pie}"
    textColor: "{colors.papel}"
    typography: "{typography.note}"
---

# Design System: Papelito

## Overview

**Creative North Star: "The Quiet White Boutique"**

Papelito is a calm shop on a white ground. The logo, centred at the top, is the one burst of colour on the page, and everything beneath it steps back: deep muted teal ink, one teal accent, pale grey-teal wells for the products, hairlines, and a single humanist sans. It refuses both marketplace noise and colour-coded category blocks.

The page gets to the products straight away. The header holds the logo and the categories; under its hairline comes a centred section title and a row of square products with no cover in between. Density is low and regular: the same product cell repeats, four across on a desktop and two on a phone, and hierarchy comes from case, tracking and space rather than from weight or colour.

Not every decision here carries the same authority. The owner's commitments are the white ground, the logo centred over the categories, few colours, and the product cell form. The ink colour, the teal accent and the typeface (Quattrocento Sans) were the builder's choices, made to serve those commitments, and can change without reopening them.

**Key Characteristics:**
- White ground, with the logo as the only multicolour on the page.
- Logo centred, Instagram to its left, order bag to its right, categories in a centred row beneath.
- Square product cells with centred name and price, four across, two on a phone.
- One humanist sans at two weights; small tracked uppercase for navigation and section titles.
- Square corners on every surface and control; the count badge alone is round.
- Flat at rest, separated by hairlines and pale wells; one deep teal footer band closes the page.

## Colors

One restrained teal family on white: deep ink for reading, a single accent for acting, and pale tints that hold the products without competing with the logo.

### Primary
- **Script Teal** (#0d7389): The single accent, taken from the logo's script and held deep enough to read on white (5.48:1 with white text, 5.09:1 on the pale well). It fills the main button, the count badge, the order bar and the skip link, and colours the add link, quantity controls, the empty-state link, focus rings and the selected delivery option. It is also the text selection colour.
- **Pressed Teal** (#0a5a6c): Hover state of the main button, the add link, the quantity controls and the order bar.

### Neutral
- **White Paper** (#ffffff): The ground of the page, header and order page, and the text on the accent and on the footer band.
- **Deep Muted Teal Ink** (#23414b): All reading text, header icons and the error message (10.89:1 on white, 10.10:1 on the pale well).
- **Faded Ink** (#4f6871): Secondary text: notes, the "ejemplo" tag, "Quitar", the sold-out label and disabled button text (5.91:1 on white, 5.49:1 on the pale well).
- **Pale Well** (#f4f7f7): The field behind product images, the sample-catalogue notice, the status panels on the order page, the disabled button and the quantity button hover.
- **Hairline** (#dfe7e8): The rule under the header, between order lines and around an unselected delivery option. It separates and does not carry meaning; the native radio marks the option as a control.
- **Field Stroke** (#6f878f): The stroke of text fields only (3.79:1 on white), darker than the hairline because the stroke is what shows a field is there.
- **Footer Teal** (#215a69): The one deep band at the foot of every page, with white text at 7.69:1.

### Sample Art Tints
- **Art Tints** (#5b8c97, #7fb1ba, #9cc6cc, #b7d8dc, #d6e8ea): Used with ink and white in the sample SVG product art, and nowhere in the interface.

### Named Rules
**The One Burst Rule.** The logo is the only multicolour on the page. Sample art is ink plus teal tints for that reason, and real product photos, when they arrive, should be neutral and low-chroma for the same reason.

**The One Accent Rule.** There is one accent and it means something can be acted on, or has just been chosen. Categories get no colours of their own, and titles and reading text stay in ink.

**The Ink Error Rule.** Errors are ink, not red: a heavier field stroke and a bold message. The palette gains no alarm colour.

## Typography

**Display Font:** Quattrocento Sans (with Segoe UI, sans-serif)
**Body Font:** Quattrocento Sans (with Segoe UI, sans-serif)

**Character:** One self-hosted humanist sans, open and gentle, in two files only (400 and 700). It does all the work, so the voice stays quiet and hierarchy has to come from size, case and tracking.

### Hierarchy
- **Page Title** (400, clamp(1.5rem, 3vw, 2.125rem), 1.2): Product name on the product page. The empty and not-found states use a close variant that tops out at 2rem.
- **Subhead** (400, 1.25rem, 1.5): Order-page section headings and the product-page price. The order total sets this size in 700.
- **Section Title** (400, 1.0625rem, 1.5, 0.14em, uppercase): Centred category titles, the "Mi pedido" page title, and the name in the footer.
- **Body** (400, 1.0625rem, 1.5): Default reading text, field labels and delivery options. The product description caps at 46ch.
- **Product Name** (400, 1rem, 1.3): Name in the product cell.
- **Price** (400, 1rem, 1.5): Price in the product cell.
- **Note** (400, 0.9375rem, 1.5): Order-page notes, the add link, "Agotado", the footer and the order bar. Validation messages set this size in 700.
- **Button** (700, 0.875rem, 1.5, 0.12em, uppercase): The main button.
- **Small** (400, 0.875rem, 1.5): The sample-catalogue notice and "Quitar".
- **Nav** (400, 0.8125rem, 1.5, 0.14em, uppercase): Category links. At 760px and below they drop to 0.75rem and 0.1em; at 420px and below to 0.06em so all five fit on one row.
- **Tag** (400, 0.8125rem, 1.5): The "ejemplo" tag beside a sample price, in faded ink.
- **Badge** (700, 0.75rem, 1): The order count.

Figures are the face's default proportional numerals. The bundled files carry no tabular numerals, so columns of amounts line up by their right edge.

### Named Rules
**The Light Headings Rule.** Headings stay at 400. Bold is kept for the things a buyer acts on or must not miss: the main button, the order total, the count, the quantity, "Ver mi pedido", the empty-state link and validation messages.

**The Small Tracked Caps Rule.** Uppercase with wide tracking belongs to short labels that organise the shop: categories, section titles, the footer name and the main button. Sentences and product names stay in sentence case.

## Layout

The catalogue is a centred column up to 1240px wide, inset by the fluid page edge. Each category is a section with a centred title over a wrapping row of equal product cells: four across, two at 760px and below. Short rows centre rather than stretch or get filled. Inside each cell the name and price stack from the top and the add control is pinned to the bottom, so controls align across a row whatever the name's length.

The header is not sticky. It is a three-part row (Instagram, logo, order bag) on a 1240px measure with the category row centred beneath, closed by a full-width hairline. The logo scales from 180px to 340px. At 420px and below the categories spread edge to edge on one row, and at 340px and below they wrap and centre.

The product page narrows to 1080px with the image and text in two vertically centred columns (1.1fr and 1fr), one column at 760px and below. The order page is a single 640px column; delivery options sit two across and stack at 420px and below, and order-line thumbnails shrink from 72px to 56px.

Spacing is fluid at the page level (page edge, grid gutter, row gap and section padding are all clamps) and steps through 4, 8, 12, 16, 24 and 40px inside components. Buttons, icons, category links, the back link and footer links all hold a target of at least 44px. Product names are inline text links; in a cell, the image well above is the larger way in for a pointer.

### Named Rules
**The Straight To Products Rule.** No cover or banner sits between the header and the first products. The only thing allowed above the header is the notice declaring a sample catalogue, which disappears with real products.

## Elevation & Depth

The page is flat. Depth comes from the pale well behind images, hairlines and the one dark band at the foot; cells, wells, the header and buttons carry no shadow at rest or on hover. A selected delivery option doubles its stroke with a 1px inset ring, which is a stroke rather than elevation.

### Shadow Vocabulary
- **Floating order bar** (`box-shadow: 0 6px 20px rgba(35,65,75,.25)`): The fixed order bar only, soft and tinted with ink.

### Named Rules
**The One Shadow Rule.** A shadow means the thing actually floats over the page. The order bar is the only element that does.

## Shapes

Everything is square-cornered: image wells, buttons, fields, delivery options, panels and the order bar. The only round interface element is the count badge, a small pill sitting on the corner of the bag icon. Icons are drawn inline in a 1.5px stroke with softened joins, and sample art has its own gently rounded forms; both are drawings, and the square rule governs the interface around them.

### Named Rules
**The Square Boutique Rule.** Surfaces and controls take no radius. The count badge is the one exception, because it is a mark on an icon, not a surface.

## Components

### Buttons
Flat, square and few: there is at most one on a screen, for the step that matters.
- **Shape:** Square corners, at least 50px tall.
- **Primary:** Accent fill, white bold tracked uppercase, 12px 28px padding. It reads "Agregar a mi pedido" on the product page and "Enviar pedido por WhatsApp" at full width on the order page.
- **Hover / Focus:** The fill darkens over 150ms. Focus is the system ring: 2px solid accent, offset 2px.
- **Disabled:** Pale well fill with faded-ink text and a not-allowed cursor. It appears only when no WhatsApp number is configured.
- **Text button:** Underlined plain text with a 44px target, for "Quitar" and for emptying the order.

### Product Cell (signature)
The unit of the catalogue, centred and frameless.
- **Image:** A square pale well. Photos cover it; SVG art is contained with 14% padding. On hover the image scales to 1.03 over 500ms, decelerating, clipped by the well.
- **Text:** Name with an underline on hover, then price. Sample products carry the "ejemplo" tag beside the price.
- **Action:** The discreet add link, swapped in place for the quantity control once the product is in the order, or for "Agotado" in faded ink when out of stock.

### Add Link
- **Style:** No fill or border; accent text reading "+ Agregar" with a 1px underline offset .3em, 44px target. Hover darkens it.
- **Behaviour:** Adding moves focus to the plus button of the quantity control that replaces it, and the count badge jumps.

### Quantity Control
- **Style:** Frameless, two 44px buttons with 14px drawn minus and plus marks in the accent, and the count between them in bold ink. Hover gives the button a pale well and darkens the mark.

### Inputs / Fields
- **Style:** White fill, 1px field stroke, square corners, at least 48px tall, with a regular-weight label above.
- **Focus:** The system ring, with an accent caret.
- **Error:** The stroke becomes 2px ink and a bold ink message appears below.

### Delivery Options
- **Style:** Two equal options with a 1px hairline, square corners, at least 52px tall, with an 18px native radio tinted with the accent.
- **Selected:** The stroke turns accent and doubles with a 1px inset ring. There is no fill.
- **Focus:** The system ring goes around the whole option.

### Navigation
- **Header:** Logo centred, 44px Instagram and bag icons in ink at either side, both turning accent on hover.
- **Categories:** Tracked uppercase links in ink with no fill. Hover turns them accent with an underline offset .5em. They jump to the category's section.
- **Count badge:** Accent pill on the bag, at least 20px, hidden at zero. It scales to 1.3 and back over 400ms when a product is added.
- **Skip link:** Accent fill, white text, off-canvas until focused.

### Order Bar
- **Style:** Accent fill, white text, square corners, the one shadow, at least 50px tall, with the item count and total on the left and bold "Ver mi pedido" on the right. Hover darkens the fill.
- **Position:** Fixed at the bottom right, respecting the safe area. At 760px and below it stretches across the width, starting 12px from the left.
- **Visibility:** It appears only when the header is out of view, and never on the order page. It also needs something in the order. The footer takes 88px of extra bottom padding while it is available, so it never covers the footer's content.

### Order Line
- **Style:** A thumbnail in a pale well (72px, 56px at 420px and below), name and subtotal on the first row, quantity control and "Quitar" on the second, closed by a hairline. The total follows in 1.25rem bold.

### Status Panels
- **Style:** Pale well fill, square corners, no border. They hold the sample-catalogue notice as a full-width band at the top, "not taking orders yet" above the order, and the "Revisa WhatsApp" confirmation after sending.

### Footer Band
- **Style:** Footer teal, white centred text, one per page. It holds the shop name in tracked caps, the location, how ordering works, and contact links with 44px targets.
- **Focus on the band:** Links here use a white focus ring, because the accent reaches only 1.40:1 against this band. Do the same on any other dark surface.

## Do's and Don'ts

### Do:
- **Do** keep the page white and let the logo be the strongest note of colour.
- **Do** keep the logo centred with the categories in a row beneath it, on every page.
- **Do** show products as a square image with centred name and price, four across, two on a phone.
- **Do** prepare real product photos to be neutral and low-chroma, and keep sample art to ink, white and the art tints.
- **Do** mark samples as samples with the "ejemplo" tag and the notice band, and remove both with real products.
- **Do** give every button and standalone link a target of at least 44px and the 2px accent focus ring on light surfaces.
- **Do** signal errors with a 2px ink stroke and a bold ink message.
- **Do** remove animation and transitions when reduced motion is requested.

### Don't:
- **Don't** give categories their own colours or fill sections with colour blocks.
- **Don't** add a second accent, or use the logo's pastels for interface colour or for text.
- **Don't** put a cover, banner or promotion between the header and the first products.
- **Don't** add ads, pop-ups, countdowns or urgency marks.
- **Don't** round surfaces or controls, or put cells in frames or cards.
- **Don't** add a shadow to anything that does not float over the page.
- **Don't** show the order bar while the header is in view or on the order page.
- **Don't** add a second typeface, or bold headings for hierarchy.
