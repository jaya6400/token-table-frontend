import type { Metadata } from "next"
import "../styles/style.css"

export const metadata: Metadata = {
  title: "Token Track Live",
  description: "Live crypto token price tracker with real-time updates",
  icons: {
    icon: "/crypto-image.png",       // favicon
    apple: "/crypto-image.png",      // for Apple devices
  },
  openGraph: {
    title: "Token Track Live",
    description: "Track real-time crypto prices like BTC, ETH, SOL, and more",
    url: "https://token-track-live-jd.vercel.app/",
    siteName: "Token Track Live",
    images: ["/crypto-image.png"], // <-- add an image in /public
  },
  twitter: {
    card: "summary_large_image",
    title: "Token Track Live",
    description: "Track live crypto tokens",
    images: ["/crypto-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100">{children}</body>
    </html>
  )
}