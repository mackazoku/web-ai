# Design System Document: The Editorial Sanctuary

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Atelier"**

This design system moves away from the clinical, grid-heavy nature of standard booking platforms. Instead, it adopts the persona of a high-end editorial magazine. We are not just building a "system"; we are crafting a digital retreat. The goal is to induce a state of "digital calm" before the user even arrives at the spa.

We achieve this through **Intentional Asymmetry**—placing elements off-center to mimic the organic flow of nature—and **Atmospheric Depth**, where the UI feels like layered sheets of handmade paper rather than a flat screen. By breaking the rigid "box-and-border" mental model, we create a premium experience that feels custom-tailored and trustworthy.

---

## 2. Colors & Tonal Architecture
The palette is rooted in the earth: muted botanicals and sun-bleached neutrals.

### The "No-Line" Rule
**Explicit Instruction:** Sectioning must never be achieved via 1px solid borders. To separate content, use a background shift. For example, a `surface-container-low` (#f4f3f2) section should sit directly against a `surface` (#faf9f8) background. The change in tone is enough to signal a transition without adding visual noise.

### Surface Hierarchy & Nesting
Treat the UI as a physical space. Use the surface tiers to create depth:
*   **Base Layer:** `surface` (#faf9f8) or `background` (#faf9f8) for the widest areas.
*   **Secondary Layer:** `surface-container-low` (#f4f3f2) for large content blocks.
*   **Interactive/Elevated Layer:** `surface-container-lowest` (#ffffff) for primary cards or booking modules to provide a crisp, clean focal point.

### The "Glass & Gradient" Rule
To elevate the "luxurious" feel, apply **Glassmorphism** to floating navigation bars or modal overlays. Use `surface` at 80% opacity with a `24px` backdrop blur. 
*   **Signature Textures:** Use subtle linear gradients for primary CTAs, transitioning from `primary` (#536441) to `primary_container` (#9caf87) at a 135-degree angle. This mimics the way light hits a leaf, adding "soul" to the action.

---

## 3. Typography: The Editorial Voice
We use typography to establish authority and serenity. 

*   **Display & Headlines (Newsreader):** This serif font is our "Voice of Luxury." Use `display-lg` for hero messages to create an immediate editorial impact. The variable weight of Newsreader evokes the heritage of high-end print.
*   **Body & Titles (Manrope):** Our "Voice of Clarity." Manrope’s geometric yet warm proportions ensure that even complex booking details remain legible and stress-free.
*   **Hierarchy as Calm:** Use high contrast in scale—not weight. A `display-md` headline paired with a `body-md` description creates a rhythmic "breathing room" that guides the eye naturally.

---

## 4. Elevation & Depth
Depth in this system is felt, not seen. We avoid the "floating card" cliché in favor of **Tonal Layering**.

*   **The Layering Principle:** Instead of shadows, stack `surface-container-lowest` on `surface-container-high`. The 2-3% difference in hex value creates a soft, sophisticated lift.
*   **Ambient Shadows:** Where physical elevation is mandatory (e.g., a floating "Book Now" button), use a shadow with a blur of `32px`, a spread of `-4px`, and an opacity of 6% using the `on_surface` (#1a1c1c) color. It should look like a soft glow of light, not a drop shadow.
*   **The Ghost Border Fallback:** If a container requires definition against an identical background, use `outline_variant` (#c5c8bc) at **15% opacity**. This creates a "suggestion" of a boundary.

---

## 4.1 Background Imagery & Atmosphere
Backgrounds must feel like layered paper and soft light, not flat gradients.

* **Layered Gradients:** Use at least two gradient layers (radial + linear) to create depth.
* **Soft Light Pools:** Add subtle blurred light shapes to simulate sunlight and keep the page calm.
* **No Hard Edges:** Avoid sharp transitions; favor long, slow fades in color.

---

## 5. Components

### Buttons: The Tactile Interaction
*   **Primary:** Gradient fill (`primary` to `primary_container`), `xl` (1.5rem) roundedness. No border. Text in `on_primary` (#ffffff).
*   **Secondary:** `surface-container-highest` (#e3e2e1) background with `primary` text. This feels grounded and calm.
*   **Tertiary:** Pure text with a 2px underline in `surface_tint`, offset by `4px`.

### Cards & Lists: The White Space Rule
*   **Forbid Dividers:** Never use horizontal lines to separate list items (e.g., a list of massage types). Instead, use `spacing-6` (2rem) of vertical white space or alternating backgrounds of `surface` and `surface_container_low`.
*   **Booking Cards:** Use `lg` (1rem) rounded corners. Image containers should have a slight inner-shadow to appear "recessed" into the page.

### Input Fields: The Serene Entry
*   **Style:** Minimalist. Only a bottom border using `outline` (#75786e) at 30% opacity. When focused, the border transitions to `primary` (#536441) and the background subtly shifts to `surface_container_lowest`.
*   **Labels:** Always use `label-md` in `on_surface_variant` for a soft, non-demanding presence.

### Signature Component: The "Availability Veil"
*   For the booking calendar, use a semi-transparent `secondary_container` (#e8e2d6) for unavailable dates, creating a "veiled" look that doesn't distract the eye from available "sage-tinted" dates.

---

## 6. Do’s and Don'ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is `spacing-10`, try a right margin of `spacing-16` for hero sections to create an editorial feel.
*   **Do** use `primary_fixed_dim` (#bacda3) for subtle highlights in text or small icons.
*   **Do** lean into `surface-container-lowest` (#ffffff) for any area where the user needs to input data—it increases focus and feelings of "cleanliness."

### Don't:
*   **Don't** use pure black (#000000). Always use `on_background` (#1a1c1c) for typography to maintain the soft, organic look.
*   **Don't** use `default` (0.5rem) rounding for high-level containers; use `xl` (1.5rem) to emphasize the "softness" of the brand.
*   **Don't** overcrowd. If you feel a section needs a border to be understood, it likely needs more `spacing-8` (2.75rem) instead.
