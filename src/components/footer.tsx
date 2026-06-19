import { Heading, Text, Mono } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="w-full bg-primary border-t border-black py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        
        {/* Top: 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Column 1: PRODUCT */}
          <div className="flex flex-col gap-5">
            <Mono size="sm" uppercase className="text-white tracking-widest font-semibold">
              PRODUCT
            </Mono>
            <div className="flex flex-col gap-3">
              {[
                { label: "Smart Collar", href: "/product#collar" },
                { label: "Dashboard Platform", href: "/product#dashboard" },
                { label: "Mobile App", href: "/product#mobile" },
                { label: "Solar Technology", href: "/product#solar" },
                { label: "AI Engine", href: "/product#ai" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="font-body text-sm text-white/80 hover:text-white hover:underline transition-colors focus-visible:outline-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: SOLUTIONS */}
          <div className="flex flex-col gap-5">
            <Mono size="sm" uppercase className="text-white tracking-widest font-semibold">
              SOLUTIONS
            </Mono>
            <div className="flex flex-col gap-3">
              {[
                { label: "Early Illness Detection", href: "/solutions#health" },
                { label: "Virtual Fencing", href: "/solutions#location" },
                { label: "Behavior Analytics", href: "/solutions#behavior" },
                { label: "Heat Detection", href: "/solutions#heat" },
                { label: "Disease Prevention", href: "/solutions#disease" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="font-body text-sm text-white/80 hover:text-white hover:underline transition-colors focus-visible:outline-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: COMPANY */}
          <div className="flex flex-col gap-5">
            <Mono size="sm" uppercase className="text-white tracking-widest font-semibold">
              COMPANY
            </Mono>
            <div className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/about#careers" },
                { label: "Contact Sales", href: "/contact" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="font-body text-sm text-white/80 hover:text-white hover:underline transition-colors focus-visible:outline-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider: 1px solid line, white at ~15-20% opacity */}
        <div className="w-full h-px bg-white/15 mb-12" />

        {/* Bottom Row: Logo, description, and copyright */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          
          {/* Left: Wordmark & Description */}
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              HERDOS
            </span>
            <Text size="sm" className="text-white/80 leading-relaxed">
              India&apos;s First Virtual Fencing & Early Illness Detection System for Sheep and Goats.
            </Text>
          </div>

          {/* Right: Copyright */}
          <div className="flex flex-col items-start lg:items-end gap-2">
            <Mono
              size="xs"
              uppercase
              className="text-white/60 tracking-widest leading-none"
            >
              © 2026 HERDOS. All rights reserved.
            </Mono>
          </div>

        </div>
      </div>
    </footer>
  );
}
