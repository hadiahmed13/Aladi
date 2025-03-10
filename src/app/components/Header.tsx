"use client"

import Link from "next/link"
import {Button} from "@/components/ui/button";
import {Globe} from "lucide-react";

export default function Header() {
  return (

      <header
          className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div
              className="container flex h-16 items-center justify-between px-4 md:px-6">
              <Link href="/"
                    className="flex items-center gap-2 font-bold text-xl">
                  <Globe className="h-6 w-6"/>
                  <span>Aladi</span>
              </Link>
              <nav className="hidden md:flex gap-6 items-center">
                  <Link href="/"
                        className="text-sm font-medium hover:underline underline-offset-4">
                      Home
                  </Link>
                  <Link href="#portfolio"
                        className="text-sm font-medium hover:underline underline-offset-4">
                      Portfolio
                  </Link>
                  <Link href="#services"
                        className="text-sm font-medium hover:underline underline-offset-4">
                      Services
                  </Link>
                  <Link href="#about"
                        className="text-sm font-medium hover:underline underline-offset-4">
                      About
                  </Link>
                  <Button asChild>
                      <Link href="#contact">Contact Us</Link>
                  </Button>
              </nav>
          </div>
      </header>
  )
}

