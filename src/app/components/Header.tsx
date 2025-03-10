"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-bold">
          Creative Agency
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

