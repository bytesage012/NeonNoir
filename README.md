# NEONNOIR.DX — Case Study (Agency)

This project is a case-study site for a developer experience product used by the agency as a design & frontend prototype to demonstrate product positioning, docs, integrations, pricing and conversion flows.

Overview
- Role: Frontend prototype and marketing UI implementation used in pitches and portfolio displays.
- Goals: Communicate core features, show integrations and provide clear conversion CTAs (Schedule Demo / Get Started).
- Outcome: An engaging dark-themed developer platform landing page with modular sections and a demo scheduling modal.

Tech stack
- React + Vite
- Tailwind CSS
- lucide-react icons

How to run

```bash
npm install
npm run dev
```

Project highlights and `src/App.jsx` notes
- `src/App.jsx` contains `initialData` (features, integrations, pricingPlans, docsSections) used to render pages (Features, Integrations, Docs, Pricing, Get Started).
- Page switching is controlled by `activeSection`; `renderCurrentPage()` returns the component for the active view — good pattern for an SPA prototype.
- Small UX details: a typewriter effect for the CLI example, a demo scheduling modal (`DemoModal`), and a terminal-style code preview.
- The demo modal and CTAs are mocked — integrate analytics and a backend (or CRM) to capture demo requests for production.

Design & reuse notes
- Fonts are currently imported inside the component via a `style jsx` block; for production move fonts to `index.html` or a global CSS file.
- This layout is a good candidate to extract into a reusable “platform landing” template for future product case studies.

Next steps
- Add analytics events on CTA clicks, wire demo scheduling to your calendar/CRM (e.g., Calendly, HubSpot), and replace mocked docs with real content or a documentation site.

