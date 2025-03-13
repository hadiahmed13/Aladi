import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Globe, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    We build stunning digital experiences that help businesses grow
                                </h1>
                                <p className="text-muted-foreground md:text-xl">
                                    Aladi is a web development agency specializing in creating beautiful, functional websites that convert
                                    visitors into customers.
                                </p>
                                <div className="flex flex-col gap-2 sm:flex-row">
                                    <Button size="lg" asChild>
                                        <Link href="#contact">
                                            Contact Us
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="#portfolio">View Our Work</Link>
                                    </Button>
                                </div>
                            </div>
                            <Image
                                src="/hero2.jpg"
                                width={600}
                                height={600}
                                alt="Hero image showing web development"
                                className="mx-auto aspect-square overflow-hidden rounded-xl 
                                object-cover brightness-90 contrast-90 saturate-100 transition-all 
                                duration-300 group-hover:brightness-120"
                            />
                        </div>
                    </div>
                </section>

                <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Explore some of the websites we've created for our satisfied clients.
                                </p>
                            </div>
                        </div>
                        <div
                            className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group relative overflow-hidden rounded-lg border-gray-300 border-2 bg-background shadow-xl hover:border-gray-500 hover:shadow-xl transform transition-all hover:-translate-y-0.5"
                                >
                                    <Link href={project.url} passHref legacyBehavior>
                                        {/*This section is so links open in a new tab*/}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 z-10"
                                        >
                                            <span className="sr-only">View {project.name}</span>
                                        </a>
                                    </Link>
                                    <div
                                        className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.name}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105 "
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold">{project.name}</h3>
                                        <p className="text-sm text-muted-foreground">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div
                            className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our
                                    Services</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    We offer a comprehensive range of web
                                    development services to meet your business
                                    needs.
                                </p>
                            </div>
                        </div>
                        <div
                            className="mx-auto grid items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                        <div className="grid gap-1 rounded-lg border bg-card p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold">Website Development</h3>
                                <p className="text-sm text-muted-foreground">
                                    Custom-designed websites optimized for performance, user experience, and conversion.
                                </p>
                            </div>
                            <div className="grid gap-1 rounded-lg border bg-card p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Code className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold">Web Application Development</h3>
                                <p className="text-sm text-muted-foreground">
                                    Complex web applications with custom functionality to solve specific business challenges.
                                </p>
                            </div>
                            <div className="grid gap-1 rounded-lg border bg-card p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Smartphone className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold">Responsive Design</h3>
                                <p className="text-sm text-muted-foreground">
                                    Mobile-friendly websites that look great and function perfectly on all devices.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to start your project?
                                </h2>
                                <p className="text-muted-foreground md:text-xl">
                                    Contact us today to discuss your requirements and get a free quote. We'll help turn your vision into
                                    reality.
                                </p>
                            </div>
                            <div className="space-y-4 rounded-lg border bg-card p-6">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Contact Form</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Fill out the form below and we'll get back to you soon.
                                    </p>
                                </div>
                                <form className="space-y-4">
                                    <div className="grid gap-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="message" className="text-sm font-medium leading-none">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Tell us about your project"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-light">
                    <div className="container px-4 md:px-6">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
                            <p className="text-muted-foreground md:text-xl">
                                At Aladi, we believe in creating stunning digital experiences. Our team combines technical expertise with creative design to help businesses grow and thrive in the digital world.
                            </p>
                            {/* Add more detailed content here as needed */}
                        </div>
                    </div>
                </section>

            </main>
            <footer className="border-t">
                <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 px-4 md:px-6">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <Globe className="h-6 w-6" />
                            <span>Aladi</span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Professional web development services for businesses of all sizes.
                        </p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                                        Web Design
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                                        Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                                        SEO
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                                        Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                                        Terms
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t py-6 text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Aladi Web Development. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

// Sample projects data
const projects = [
    {
        id: 1,
        name: "New Edge Construction",
        description: "Construction website",
        image: "/NewEdgeConstructionThumbnail.webp?height=300&width=400",
        url: "https://newedgeconstruction.ca/",
    },
    {
        id: 2,
        name: "GTA Podcasts",
        description: "A Podcasting and Recording studio",
        image: "/gta_podcasts_logo.webp?height=150&width=200",
        url: "https://gtapodcasts.com",
    },
    {
        id: 3,
        name: "Luxe Interiors",
        description: "Portfolio website for a high-end interior design studio",
        image: "/luxe.png",
        url: "#",
    },
    {
        id: 4,
        name: "GreenGrow Farms",
        description: "E-commerce site for an organic produce delivery service",
        image: "/greenGrow.png",
        url: "#",
    },
    {
        id: 5,
        name: "TechNova Solutions",
        description: "Corporate website for a B2B technology consulting firm",
        image: "/technova.png",
        url: "#",
    },
    {
        id: 6,
        name: "Fitness First Gym",
        description: "Membership website with class scheduling for a fitness center",
        image: "/fitness.png",
        url: "#",
    },
]


