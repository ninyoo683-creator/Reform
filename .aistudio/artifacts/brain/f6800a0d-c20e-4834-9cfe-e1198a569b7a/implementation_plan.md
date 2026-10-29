# REFORM — Luxury Facial Aesthetics & Self-Improvement Platform

REFORM is a luxury editorial education and self-improvement platform created by Faheem that helps individuals understand their facial features, evaluate looksmaxxing advice critically, and refine their personal presentation through evidence-informed skincare, hairstyles, and grooming practices. The platform replicates the supplied editorial reference design with high visual fidelity and converts visitors into customers for two offerings: the **REFORM Facial Aesthetics Guide (₹499)** and the **REFORM Personalized Facial Aesthetics Consultation (₹999)**.

## User Review & Critical Decisions

> [!IMPORTANT]
> Below are the product and workflow decisions confirmed during our clarification step, which govern the checkout, consultation scheduling, and educational content experiences across the application.

- **Confirmed Decision 1 — WhatsApp-Integrated Checkout Flow**: Both the **₹499 Digital Guide** and **₹999 Personalized Consultation** use a streamlined checkout drawer that collects customer details (name, email, phone, and optional focus notes), generates an order reference, and transitions directly into a pre-formatted WhatsApp confirmation and payment message to Faheem, while also supporting server-side Razorpay order verification when API keys are configured.
- **Confirmed Decision 2 — WhatsApp-Assisted Consultation Scheduling**: Customers booking the 30-minute consultation select their preferred day/time window and primary aesthetic goals in the booking modal, then complete scheduling and payment coordination directly with Faheem via WhatsApp with a structured summary payload.
- **Confirmed Decision 3 — Interactive Editorial Drawers & Downloadable Guide**: Clicking any of the 8 "What You'll Learn" cards opens an in-depth editorial slide-over drawer covering evidence-informed practices, realistic expectations, and safety considerations, paired with an interactive preview and downloadable sample/guide syllabus for the REFORM Facial Aesthetics Guide.

---

## 1. Overview & Core Concept

- **What It Does**: Delivers a vertically scrolling, cinema-grade editorial landing experience that educates visitors on facial aesthetics across 8 core pillars, demonstrates presentation refinement through an interactive 3-stage portrait slider, explains the 6-step REFORM Method, and provides complete purchase and booking flows for the ₹499 digital guide and ₹999 1-to-1 consultation.
- **Target Audience / Persona**: Men and self-improvement-focused individuals in India and globally seeking practical, realistic, and science-backed guidance on skincare, hair framing, grooming, and facial presentation without internet myths or exaggerated promises.
- **Key Value**: Bridges the gap between chaotic internet "looksmaxxing" claims and realistic, dermatologically and aesthetically sound personal presentation through structured curriculum and personalized 1-to-1 guidance.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Discovery & Navigation**: Visitors land on the sticky slim header (`REFORM` wordmark, 6 anchor links with active underline tracking, Instagram link, and champagne `"Talk to Faheem"` WhatsApp CTA) and the split-column Cinematic Hero featuring dramatic chiaroscuro portrait photography and three trust markers (*Practical Guidance · Evidence-Informed · Realistic Approach*).
  2. **Interactive Presentation Slider**: Visitors interact with the 3-stage horizontal presentation showcase (`01 UNDERSTAND` → `02 REFINE` → `03 PRESENT`) using previous/next controls, a synchronized horizontal scrubber/progress track, keyboard arrow keys, or mobile touch swipes to inspect how skincare, hair framing, and lighting refine presentation without altering bone structure.
  3. **8-Topic Educational Deep Dives**: Clicking any of the 8 compact topic cards (*Skinmaxxing, Hairmaxxing, Eyemaxxing, Facial Structure, Groomingmaxxing, Makeupmaxxing, Teethmaxxing, The REFORM System*) or `"Explore All Topics →"` opens an editorial reading drawer with structured modules: *Core Mechanics*, *Evidence vs. Myth*, *Practical Protocol*, and *Safety & Professional Boundaries*.
  4. **The REFORM Method**: Visitors review the classical sculpture split-section breaking down the `R → E → F → O → R → M` framework (*Recognize, Educate, Focus, Observe, Refine, Maintain*).
  5. **Guide Purchase (`₹499`) & Consultation Booking (`₹999`)**: Clicking `"Get the ₹499 Guide →"` or `"Book My ₹999 Consultation →"` opens a tailored checkout modal with form validation, order ID creation, WhatsApp payment/scheduling dispatch, and a verified post-purchase digital guide reader/PDF download view.
  6. **About & Quick FAQ**: Visitors read Faheem's founder note with direct Instagram link and expand the 2-column Quick FAQ accordion (8 transparent questions covering scope, payment, realistic outcomes, and refund policy).

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Luxury masculine editorial publication blended with a minimalist high-fashion house—low-key studio chiaroscuro lighting, architectural shadows, warm directional sunlight, and restrained hairline borders.
  - *Color Palette & Mood*:
    - `--background`: `#090807` (Deep obsidian charcoal-black canvas, 60% allocation)
    - `--surface`: `#12100E` / `#171412` (Subdued warm dark card surfaces and drawers, 30% allocation)
    - `--border`: `#26221E` (Thin 1px understated warm dark-gray dividers)
    - `--primary`: `#E9D8C5` (Warm ivory primary display and headline text)
    - `--secondary`: `#B6ADA4` (Muted beige-gray supporting prose and captions)
    - `--accent`: `#DCC0A3` (Champagne beige reserved for primary CTA buttons, active slider nodes, and key highlights, 10% allocation)
  - *Typography & Hierarchy*:
    - **Display / Headlines**: `Cormorant Garamond` (weights 400, 500, 600) with tight tracking (`tracking-tight`), balanced line wrapping (`text-wrap: balance`), and refined editorial proportions matching the reference screenshot.
    - **Body / UI Controls / Eyebrows**: `Plus Jakarta Sans` for crisp legibility in body prose (`15px–16px`), compact single-line navigation links, and wide-tracked uppercase section kickers (`tracking-[0.22em] text-[11px]`).
    - **Pricing & Numerals**: Tabular numerals (`tabular-nums`) for `₹499`, `₹999`, and `01 / 02 / 03` indices.
  - *Component Styling & Layout*:
    - Full 1440px desktop editorial container (`max-w-[1320px] mx-auto px-6 lg:px-12`) with thin horizontal section rules (`border-t border-[#26221E]`).
    - Cards use subtle `1px solid rgba(220, 192, 163, 0.14)` borders with restrained hover luminance transitions (`hover:border-[#DCC0A3]/40`).

- **Interactive Feedback & Motion**:
  - Compositor-only transitions (`transform`, `opacity`) settling within `180ms` using `cubic-bezier(0.16, 1, 0.3, 1)`.
  - Interactive scrubber bar and directional focus states on the 3-panel Transformation Slider.
  - Accessible focus rings (`focus-visible:ring-1 focus-visible:ring-[#DCC0A3]`), validated checkout inputs with inline error messages, loading spinners during order registration, and clear WhatsApp handoff confirmation screens.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1 — Dual-Mode WhatsApp + Server-Verified Checkout Architecture**
  - *Chosen Approach*: Primary checkout and consultation scheduling routes customers through a validated order intake modal that logs the order via the backend API and launches a pre-populated WhatsApp session with Faheem (`₹499 Guide` or `₹999 Consultation` with preferred time window), while also providing an instant interactive Guide Preview/PDF download unlock code flow and optional Razorpay webhook/order verification endpoint.
  - *Why*: Matches the user's explicit preference for WhatsApp-based payment and consultation scheduling while preserving zero-fake-payment integrity (clearly distinguishing between "WhatsApp Payment Initiated" and "Verified Access Unlocked") and maintaining full server-side readiness.
  - *Alternatives Considered*: Hard-blocking checkout when Razorpay keys are absent (rejected because it prevents customers from completing purchases via WhatsApp).

- **Decision 2 — Slide-Over Editorial Curriculum Drawers + Printable PDF Guide**
  - *Chosen Approach*: Clicking any of the 8 learning cards opens a rich slide-over curriculum drawer with navigation between all 8 topics, evidence ratings, actionable routines, medical/dental disclaimers, and a downloadable/printable REFORM Guide syllabus PDF generator.
  - *Why*: Keeps the user anchored on the high-converting single-page layout while delivering genuine, substantial educational value and immediate utility.
  - *Alternatives Considered*: Separate multi-page routes (rejected to preserve the seamless single-page editorial flow of the reference design).

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        REFORM Single-Page Application                       │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ Navbar (Sticky 3-Zone Header: Wordmark · 6 Section Links · WhatsApp)  │  │
│  └───────────────────────────────────┬───────────────────────────────────┘  │
│                                      │                                      │
│  ┌──────────────────────┐  ┌─────────┴──────────┐  ┌─────────────────────┐  │
│  │ HeroSection          │  │ PresentationSlider │  │ LearningTopics (8x) │  │
│  │ · Split Editorial    │  │ · 01 Understand    │  │ · Skin / Hair / Eye │  │
│  │ · Chiaroscuro Visual │  │ · 02 Refine        │  │ · Structure / Groom │  │
│  │ · Trust Indicators   │  │ · 03 Present       │  │ · Makeup / Teeth    │  │
│  │ · Vertical Caption   │  │ · Scrubber & Swipe │  │ · The REFORM System │  │
│  └──────────┬───────────┘  └────────────────────┘  └──────────┬──────────┘  │
│             │                                                 │             │
│  ┌──────────┴───────────┐  ┌────────────────────┐  ┌──────────┴──────────┐  │
│  │ ReformMethod         │  │ ProgramsSection    │  │ About & QuickFAQ    │  │
│  │ · Classical Bust     │  │ · ₹499 Guide Card  │  │ · Founder Portrait  │  │
│  │ · R-E-F-O-R-M Grid   │  │ · ₹999 Consult Card│  │ · 2-Col 8x Accordion│  │
│  └──────────────────────┘  └─────────┬──────────┘  └─────────────────────┘  │
│                                      │                                      │
│  ┌───────────────────────────────────┴───────────────────────────────────┐  │
│  │                     Interactive Overlay Layer                         │  │
│  │  ┌─────────────────────────┐  ┌────────────────────────────────────┐  │  │
│  │  │ TopicCurriculumDrawer   │  │ CheckoutAndBookingModal            │  │  │
│  │  │ · 8 Detailed Modules    │  │ · Guide (₹499) & Consult (₹999)    │  │  │
│  │  │ · Evidence vs Myth      │  │ · Slot Picker + Intake Validation  │  │  │
│  │  │ · Printable Guide PDF   │  │ · WhatsApp Dispatch & Access Code  │  │  │
│  │  └─────────────────────────┘  └─────────────────┬──────────────────┘  │  │
│  └─────────────────────────────────────────────────┼─────────────────────┘  │
└────────────────────────────────────────────────────┼────────────────────────┘
                                                     │
                                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     Express Backend API (server.ts)                         │
│  · POST /api/orders          (Validates & logs Guide/Consult booking)       │
│  · POST /api/verify-access   (Verifies access code for full PDF Guide)      │
│  · GET  /api/guide-download  (Serves structured REFORM Guide document)      │
│  · GET  /api/config          (Returns WhatsApp/Instagram & payment status)  │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **Data Model & State**:
  - `PresentationStage`: `{ id: '01' | '02' | '03', label: string, subtitle: string, details: string[], focusAreas: string[], image: string }`
  - `LearningTopic`: `{ id: string, index: number, title: string, subtitle: string, image: string, overview: string, evidenceBacked: string[], commonMyths: string[], practicalSteps: string[], safetyNote: string }`
  - `OrderSubmission`: `{ id: string, productType: 'guide' | 'consultation', amount: 499 | 999, customerName: string, customerEmail: string, customerPhone: string, preferredDate?: string, preferredTimeSlot?: string, focusAreas?: string[], status: 'whatsapp_initiated' | 'verified' }`
  - `FAQItem`: `{ id: string, question: string, answer: string, column: 1 | 2 }`

- **Interactive Component & State Mapping**:
  - `Navbar`: Tracks active section via scroll position (`IntersectionObserver`), scrolls smoothly to section anchors, toggles mobile drawer on small viewports, and opens a direct WhatsApp chat via `"Talk to Faheem"`.
  - `PresentationCarousel`: Maintains `activeStageIndex` (`0 | 1 | 2`), supports clicking any of the 3 portrait panels, clicking Previous/Next circular buttons, dragging/clicking the horizontal progress scrubber, and keyboard Left/Right navigation.
  - `LearningTopics` & `TopicCurriculumDrawer`: Clicking any of the 8 topic cards or `"Explore All Topics →"` opens the slide-over drawer to that specific topic, with Next/Previous topic switching and a `"Download Sample Syllabus / Guide"` action.
  - `ProgramsSection` & `CheckoutAndBookingModal`:
    - Selecting `"Get the ₹499 Guide →"` opens the modal in `guide` mode (collects Name, Email, WhatsApp Phone; validates inputs; generates order reference via `POST /api/orders`; opens pre-filled WhatsApp payment message to Faheem; and provides an access code verification input to unlock and download the full printable REFORM Guide).
    - Selecting `"Book My ₹999 Consultation →"` opens the modal in `consultation` mode (adds preferred date, 30-minute time slot selector, and primary facial aesthetics focus tags; validates inputs; logs booking request; and launches WhatsApp with the complete booking summary for Faheem to confirm the slot and payment).
  - `FAQAccordion`: Manages independent or single-open accordion expansion state across all 8 required questions in a responsive 2-column desktop / 1-column mobile grid with accessible `aria-expanded` attributes and `+` to `×` icon rotation.
