"use client"

import { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className="
        sticky top-0 z-50 w-full
        border-b border-white/10
        backdrop-blur-lg
        transition-all duration-300
        bg-gradient-to-b from-[#0F172A] to-[#1E293B]
        supports-[backdrop-filter]:bg-background/80
      "
            style={{
                opacity: isScrolled ? 0.75 : 1,
            }}
        >
            <div
                    className="container flex h-16 items-center justify-between px-4 md:px-6 relative">
                    <span
                        className="text-lg font-bold bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
                    Aladi
                  </span>
                    {/* Centered text */}
                    <div className="absolute left-1/2 -translate-x-1/2">
                        {/* Logo on left */}
                        <Link href="/" className="flex items-center z-10">
                            <div className="group relative">
                                <Image
                                    src="/aladi_logo.png"
                                    alt="Aladi Logo"
                                    width={44}
                                    height={44}
                                    className="brightness-105 contrast-125 saturate-150 transition-all duration-300 group-hover:brightness-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none rounded-lg"/>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation on right */}
                    <nav className="hidden md:flex gap-6 items-center z-10">
                        <Link href="/"
                              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="#portfolio"
                              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Portfolio
                        </Link>
                        <Link href="#services"
                              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Services
                        </Link>
                        <Link href="#about"
                              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Button asChild
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg hover:shadow-cyan-500/20 transition-all">
                            <Link href="#contact">Contact Us</Link>
                        </Button>
                    </nav>
                </div>
        </header>
    )
}