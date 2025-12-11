import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const leJourSerif = localFont({
  src: "../public/fonts/Le Jour Serif.woff2",
  variable: "--font-le-jour",
  display: "swap",
})

const parfumiereScript = localFont({
  src: "../public/fonts/Parfumiere Script Pro.woff2",
  variable: "--font-parfumiere",
  display: "swap",
})

const montserrat = localFont({
  src: "../public/fonts/Montserrat-ExtraLight.woff2",
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ana Fernanda De La Torre - Strategic Designer Specialist",
  description: "Portfolio of Ana Fernanda De La Torre, Strategic Designer Specialist",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${leJourSerif.variable} ${parfumiereScript.variable} ${montserrat.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
