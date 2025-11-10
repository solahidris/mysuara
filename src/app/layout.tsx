import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Suara.ai",
  description: "Empowering voices across Malaysia with cutting-edge AI technology",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
