import "./globals.css"
import { Inter } from "next/font/google"
//import { ThemeProvider } from "../components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aladi",
  description: "Apple-inspired design portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
          <Header />
          <main>{children}</main>
          <Footer />
        <Toaster />
      </body>
    </html>
  )
}

