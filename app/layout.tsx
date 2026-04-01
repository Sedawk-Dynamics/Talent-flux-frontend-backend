import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TalentFlux - Crafting Careers, Fueling Dreams",
  description:
    "Premier recruitment and talent advisory firm. Strategic partner in discovering top-tier talent and building future-ready teams across IT, Healthcare, BFSI, and more.",
  generator: "v0.app",
  icons: {
    icon: "/images/talent-20flux-20logo-20png.png",
    apple: "/images/talent-20flux-20logo-20png.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
