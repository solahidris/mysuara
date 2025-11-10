import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { Providers } from "@/training-app/components/privy-provider"
import { ThemeProvider } from "@/training-app/components/theme-provider"
import { Toaster } from "@/training-app/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "Suara - The Best Speech Models for Malaysia",
  description:
    "By Malaysians, for Malaysians. Help improve speech-to-text AI by training models in your Malaysian dialect.",
  generator: "Suara",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Suara - The Best Speech Models for Malaysia",
    description:
      "By Malaysians, for Malaysians. Help improve speech-to-text AI by training models in your Malaysian dialect.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suara - The Best Speech Models for Malaysia",
    description:
      "By Malaysians, for Malaysians. Help improve speech-to-text AI by training models in your Malaysian dialect.",
  },
}

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <ThemeProvider defaultTheme="system" storageKey="suara-theme">
        <div className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
          </Suspense>
          <Toaster />
        </div>
      </ThemeProvider>
    </Providers>
  )
}
