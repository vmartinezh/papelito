---
name: Papelito
description: A calm creative-stationery shop in Santiago, built as one printed school cut-out sheet.
colors:
  accion: "#b92745"
  accion-oscura: "#94193a"
  coral: "#f8abab"
  mantequilla: "#f4f2ad"
  malva: "#dcbce2"
  agua: "#a3e2e3"
  flor: "#ffd6d9"
  papel: "#ffffff"
  tinta: "#2e2140"
  tinta-suave: "#54466a"
  corte: "rgba(46,33,64,.68)"
  hilo: "rgba(46,33,64,.16)"
typography:
  display:
    fontFamily: "Grandstander, Trebuchet MS, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  page-title:
    fontFamily: "Grandstander, Trebuchet MS, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Grandstander, Trebuchet MS, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "Grandstander, Trebuchet MS, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)"
    fontWeight: 700
    lineHeight: 1.1
  price:
    fontFamily: "Grandstander, Trebuchet MS, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.5
  chip:
    fontFamily: "Grandstander, Trebuchet MS, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-large:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
  note:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  tile: "4px"
  control: "8px"
  bar: "10px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  section: "36px"
  page-edge: "clamp(16px, 3vw, 40px)"
components:
  button-primary:
    backgroundColor: "{colors.accion}"
    textColor: "{colors.papel}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accion-oscura}"
  button-send:
    backgroundColor: "{colors.accion}"
    textColor: "{colors.papel}"
    rounded: "{rounded.control}"
    padding: "10px 20px"
    height: "56px"
    width: "100%"
  button-disabled:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-suave}"
    rounded: "{rounded.control}"
  category-chip:
    textColor: "{colors.tinta}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "10px 14px 7px"
  count-badge:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
    rounded: "{rounded.pill}"
    size: "28px"
  stepper:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.control}"
    height: "44px"
    width: "124px"
  option:
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
    height: "52px"
  option-selected:
    backgroundColor: "{colors.mantequilla}"
  field:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
    height: "48px"
  order-bar:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
    rounded: "{rounded.bar}"
    padding: "8px 18px"
    height: "56px"
---

# Design System: Papelito

## Overview

**Creative North Star: "The Cut-Out Sheet"**

The store is one printed school sheet, and every product on it is ready to be cut out and taken. Full-bleed flat pastels from the logo sit on white paper, one colour per category, and products share their dashed cut lines in a tessellated grid rather than floating as separate cards. The refusal is specific: no marketplace of floating cards, banners and promotions.

Density is generous but not empty. A desktop sheet holds a large category-name cell plus three product cells across, and a phone sheet holds the name full width over two products across. Deep plum ink does all the reading work, a chunky hand-cut display carries names and prices over a highly legible body, and drawn scissors and a drawn flower are the only ornament.

The page is calm with one marked moment. When a product is added from a sheet, the scissors trace its cut line and the product flies to the order count. On the order page, a single dashed line runs down the stub and the scissors sit at its end beside the WhatsApp button.

**Key Characteristics:**
- Flat pastel sheets running edge to edge, one per category, on white paper.
- Products as tessellated cells with shared dashed cut lines.
- One saturated colour, reserved for buying.
- Plum ink for all reading text on paper and pastel.
- Grandstander for names and numbers, Atkinson Hyperlegible for sentences and controls.
- Drawn scissors and flower in place of decoration.

## Colors

Soft, flat logo pastels carry the categories, plum ink carries the reading, and a single deep raspberry carries the purchase.

### Primary
- **Buying Raspberry** (#b92745): Fill of the add and send buttons, with white text at 6.11:1. It holds at least 3.32:1 against every sheet colour, lowest on coral.
- **Pressed Raspberry** (#94193a): Hover state of the same buttons, and nothing else.

### Secondary
- **Scissor Coral** (#f8abab): Sheet and chip colour of Papelería creativa.
- **School Butter** (#f4f2ad): Sheet and chip colour of Regalos. Also the fill of a selected delivery option and of the "not taking orders yet" notice.
- **Pressed Mauve** (#dcbce2): Sheet and chip colour of Recuerdos para celebraciones.
- **Pool Aqua** (#a3e2e3): Sheet and chip colour of Juegos didácticos. Also the fill of the "check WhatsApp and press send" confirmation.
- **Petal Blush** (#ffd6d9): Sheet and chip colour of Artículos de pintura.

### Neutral
- **White Paper** (#ffffff): Page, header, order page, and the text on ink and on the buying colour.
- **Plum Ink** (#2e2140): All primary text, control strokes, focus rings, the count badge and the phone order bar. It reaches at least 8.1:1 on every sheet.
- **Faded Ink** (#54466a): Notes, the sold-out label and disabled text. It reaches at least 4.63:1 on every sheet, lowest on coral.
- **Cut Line** (rgba(46,33,64,.68)): Every dashed cut line. It reaches at least 3.91:1 on every sheet.
- **Thread** (rgba(46,33,64,.16)): The solid hairline between order lines, on white paper only.

### Named Rules
**The One Sheet, One Colour Rule.** A category owns exactly one pastel, and its chip, sheet, product page and order thumbnail all read from that one value. Choose it in the catalogue data, never per screen.

**The Buying Colour Rule.** Raspberry in the interface means buy: add a product or send the order. Links, errors, status and decoration use ink. Sample product illustrations are artwork and sit outside this rule.

**The Ink On Pastel Rule.** Pastels are surfaces, not text, on paper or on each other. The single exception is text selection, where butter on ink reaches 12.89:1.

## Typography

**Display Font:** Grandstander (with Trebuchet MS, sans-serif)
**Body Font:** Atkinson Hyperlegible (with Segoe UI, sans-serif)

**Character:** Grandstander is chunky and hand-cut, like letters scissored from coloured card, and Atkinson Hyperlegible is plain and exact so that prices, notes and forms never have to work for attention. Both are self-hosted; Grandstander is a variable file used at 600 to 800, Atkinson ships 400 and 700 only.

### Hierarchy
- **Display** (800, clamp(2rem, 3.5vw, 3.5rem), 1.1, -0.02em): Category names in the large heading cell of each sheet.
- **Page Title** (800, clamp(2rem, 4vw, 3.5rem), 1.1, -0.02em): Product name on the product page. The order page title runs a steeper clamp(2.25rem, 5vw, 3.5rem) to the same ceiling.
- **Headline** (700, 1.5rem, 1.1): Order-page section headings. Order total and product-page price use the same size.
- **Title** (700, clamp(1.05rem, 1.4vw, 1.35rem), 1.1): Product names in cells.
- **Price** (700, 1.1rem, 1.5): Prices in cells, order-line subtotals at body size.
- **Chip** (600, 1rem, 1.5; 0.875rem at 960px and below): Category links in the header.
- **Body** (400, 1rem, 1.5): Default reading text. **Body Large** (400, 1.125rem, 1.5, max 48ch) sets the product description.
- **Label** (700, 1rem, 1.5): Buttons, field labels, options, the order link.
- **Note** (400, 0.9375rem, 1.5): Order-page notes in faded ink, and the footer in ink. **Small** (400, 0.8125rem) sets the "ejemplo" tag beside a sample price.

### Named Rules
**The Two Voices Rule.** Grandstander names things and counts them: headings, product names, prices, category chips, the count badge. Atkinson says sentences and operates controls: body, notes, labels, buttons, fields.

**The Counting Numerals Rule.** Numbers that change in place (count, stepper, subtotal, total) use tabular numerals. A price standing alone in a cell stays proportional.

**The High-Riding Face Rule.** Grandstander sits high in its line box, so short runs set inside a filled shape take extra space on top, as chips (10px over 7px) and the count badge (3px) already do.

## Layout

The home page is a stack of full-width sheets with no maximum width. Each sheet insets its grid by 18px vertically and clamp(10px, 1.2vw, 18px) horizontally, and the grid has no gaps: cells butt together and share cut lines. Above 960px the grid runs one 1.3fr heading cell and three equal product cells per row. At 960px and below it runs two equal columns with the heading cell spanning both, buy controls stacking full width under the price.

Product images hold a 3:2 frame and are contained, never cropped. Copy is pinned so that the buy row aligns at the bottom of each cell regardless of name length.

The header is thin (6px padding around a 60px logo) on white with no rule under it: logo left, chips centred, order link right. It sticks above 960px, and sheets scroll to 72px below the top to clear it. At 960px and below it stops sticking, the chips drop to their own edge-to-edge row, and the fixed order bar takes over the job of reaching the order once it has contents.

The product page is a full-bleed sheet with its content capped at 1180px in two columns, one column at 960px and below. The order page leaves the colour and sits in a single 680px column on white paper. At 420px and below, delivery options stack and order thumbnails shrink from 64px to 52px.

Page edges use the fluid page-edge value. Inside components the rhythm runs on the 4, 8, 12, 16, 24 and 36px steps, with 36px separating order-page sections.

### Named Rules
**The No Holes Rule.** A sheet never ends with an empty space. Any gap left in the last row is filled with a cell holding the drawn flower, with its cut lines intact, for any product count at either column layout.

## Elevation & Depth

The sheets are flat paper. Depth at rest comes from colour change and from cut lines, never from a shadow, and sheets, cells and the header carry none. Only two things cast a shadow, because only two things have left the paper: the product in flight and the phone order bar floating above the page. Both shadows are soft and tinted with ink.

### Shadow Vocabulary
- **Flying cut-out** (`box-shadow: 0 8px 20px rgba(46,33,64,.25)`): The product tile for the 520ms it travels to the order.
- **Floating bar** (`box-shadow: 0 8px 24px rgba(46,33,64,.3)`): The fixed phone order bar.

### Named Rules
**The Left-The-Sheet Rule.** A shadow means an object has physically left the sheet. Anything printed on the sheet stays flat, at rest and on hover. Steppers and disabled buttons draw their outline with an inset 1.5px ring, which is a stroke rather than elevation.

## Shapes

Two languages meet: square cuts and softened controls. Sheet cells are square-cornered, bounded by the 2px dashed cut line. Things you press or fill in are softly rounded (8px), category chips and the count badge are full pills, and the small coloured tiles behind order thumbnails and the flying product are barely rounded (4px). The phone order bar sits slightly softer than a control (10px).

The two drawn marks are the only silhouettes the system owns. The scissors come from the logo, drawn inline in ink, and sit on the cut line at the top of each heading cell (32px) with a patch of the sheet's colour interrupting the dashes behind them. The flower, in the logo's pink and coral, fills empty cells and serves as the favicon.

### Named Rules
**The Square Cuts, Soft Controls Rule.** A cell is a piece of paper and keeps its corners square. A control is a thing to press and takes its radius from the rounded scale.

## Components

### Buttons
Solid and unmistakable, the only saturated thing in the interface.
- **Shape:** Softly rounded (8px), at least 44px tall.
- **Primary:** Raspberry fill, white bold Atkinson, 10px 20px padding. "Agregar" in a cell, "Agregar a mi pedido" on the product page, where it runs full width up to 340px.
- **Hover / Active:** Background darkens over 150ms; pressing moves the button down 1px.
- **Send:** Full width, 56px tall, 1.125rem. Used once, for "Enviar pedido por WhatsApp".
- **Disabled:** Transparent with faded-ink text, an inset 1.5px cut-line ring and a not-allowed cursor. It appears only when no WhatsApp number is set.
- **Text button:** Underlined plain text with a 44px target, for "Quitar" and for emptying the order.

### Quantity Stepper
Replaces the add button in place once a product is in the order, and focus moves to its plus button.
- **Style:** White fill with an inset 1.5px ink ring, softly rounded (8px), 44px tall and 124px wide in a cell (132px on an order line).
- **Controls:** Two 44px drawn minus and plus buttons, tinted with 10% ink on hover. The count sits between them in tabular Grandstander.

### Category Chips
- **Style:** Full pill in the category's pastel, ink Grandstander at 600. Hover underlines the word; the fill does not change.
- **Phone:** Tighter padding (11px 7px 8px) at 0.875rem, in an edge-to-edge scrollable row with its scrollbar hidden.

### Inputs / Fields
- **Style:** White fill, 1.5px ink stroke, softly rounded (8px), at least 48px tall, with a bold label above.
- **Focus:** The system focus ring, 3px solid ink offset by 2px, used across every interactive element.
- **Error:** The stroke thickens to 3px and a bold ink message appears below. Errors never change colour.

### Delivery Options
- **Style:** Two equal radio cards, 1.5px ink stroke, softly rounded (8px), at least 52px tall, bold label beside an ink-tinted native radio.
- **State:** Selected fills with butter. Keyboard focus puts the system ring on the whole card.

### Navigation
- **Order link:** Bold "Mi pedido" with the count badge at the right of the header; hover underlines it.
- **Count badge:** Ink pill, at least 28px, white tabular Grandstander. It bumps to 1.35 scale over 400ms when a product lands.
- **Order bar (phone):** Ink bar fixed 12px from the bottom and sides, respecting the safe area, showing count, total and "Ver mi pedido". It appears only with contents and never on the order page.

### Product Cell (signature)
The unit of the sheet. Image frame on top, then name, then price and buy control, with no fill or border of its own beyond the shared cut lines. On hover the image lifts 4px and tilts -1.5deg over 350ms, like paper catching air. Out-of-stock products show "Agotado" in bold faded ink in place of the control. Sample products carry an "ejemplo" tag beside the price, and the page opens with an ink notice band while any sample remains in the catalogue. Both disappear with real products. On the product page the image sits alone in a square dashed cut frame (4:3 at 960px and below) on the full-bleed sheet.

### The Cut (signature)
The memorable moment, in three linked movements, on adding from a sheet cell only:
1. A 2.5px ink stroke traces the cell's outline from the top-left corner over 620ms, decelerating, while 30px scissors ride the line with a slight snipping wobble. The stroke then fades over 240ms.
2. A copy of the product on a tile of its sheet colour flies toward the order over 520ms, shrinking and rotating along the way.
3. The count badge bumps as it lands.

With reduced motion requested, all three are skipped and the count updates at once. The product page and the stepper update the order without the cut.

### Order Stub (signature)
The order page's single continuous dashed line runs down the left of products, delivery and details, and ends at the scissors beside the send button. Order lines hold a 64px pastel thumbnail tile in the product's category colour, the only colour memory of the sheet here. Notes after sending sit outside the line, on an aqua confirmation panel (8px radius, 14px padding).

## Do's and Don'ts

### Do:
- **Do** run every category sheet edge to edge in its one pastel, and let cells share their 2px dashed cut lines.
- **Do** fill any gap in a sheet's last row with a flower cell.
- **Do** keep raspberry for adding a product and sending the order.
- **Do** set text on pastel in ink or faded ink, both of which pass on all five sheets.
- **Do** signal errors with a 3px ink stroke and a bold ink message.
- **Do** give every control a target of at least 44px and the 3px ink focus ring.
- **Do** honour reduced motion by skipping the cut and flight entirely, while the order still updates.
- **Do** keep the order page on white paper in one 680px column, with one continuous cut line ending at the send button.

### Don't:
- **Don't** float products as separate cards with their own fills, borders, gaps or shadows.
- **Don't** add promotional banners, pop-ups, countdowns or ads. The ink notice band exists only to declare sample products as samples.
- **Don't** use raspberry for links, errors, sale marks, decoration or category colour.
- **Don't** give anything printed on the sheet a shadow, including on hover. Shadows belong to what has left it.
- **Don't** round the cells of a sheet.
- **Don't** add a second accent colour or give two categories the same pastel.
- **Don't** set pastel text on paper or pastel.
- **Don't** play the cut on anything except adding a product from a sheet cell, so that it stays the one marked moment.
