# Crypto Token Trading Buy/Sell Website

A Next.js 14 + TypeScript + Tailwind CSS project token discovery table with live price updates and interactive actions.

## Demo

Live deployment on Vercel: [https://token-track-live-jd.vercel.app/](https://token-track-live-jd.vercel.app/)

---

## Features

- **Token Table** displaying cryptocurrency tokens with live price updates
- **Popover & Tooltip** using Radix UI for interactive actions
- **Loading States**: Skeleton shimmer animation while fetching data
- **Price Updates**: WebSocket updates with smooth green/red flash transitions
- **Dark Mode** support
- **Responsive Layout**: Fully functional down to 320px width
- **Reusable Components**: Atomic architecture with React.memo and DRY principles
- **Performance Optimized**: Memoized components and smooth transitions

---

## Design Decisions

- **Next.js App Router**: Chosen for its file-based routing, SSR/SSG support, and Vercel optimization
- **Tailwind CSS**: Provides utility-first styling for quick pixel-perfect layouts
- **Framer Motion**: Smooth animations for price flash transitions
- **Redux Toolkit & React Query**: Scalable state management and data fetching patterns
- **Radix UI / Headless UI**: Accessible UI components for Popovers and Tooltips
- **Atomic Architecture**: Components broken into TokenRow, TokenTable, and TokenSkeleton for reusability
- **WebSocket Mock**: Simulates real-time price updates to avoid dependency on external APIs during development

---

## Installation

```bash
git clone <your-repo-url>
cd token-table-frontend
npm install
npm run dev
```
## Screenshots

- <Image width="915" height="396" alt="app" src="https://github.com/user-attachments/assets/40be4f4a-339b-46bb-a027-185daeea0af2" />
- <Image width="904" height="444" alt="lighthouse" src="https://github.com/user-attachments/assets/c182fce1-2823-47a3-befa-264c83f0aceb" />




