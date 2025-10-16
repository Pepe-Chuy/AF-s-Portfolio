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
  generator: "v0.app",
}

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
