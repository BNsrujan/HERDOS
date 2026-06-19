"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button, Card, Text, Mono } from "@/components/ui";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleFocus = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleBlur = (e: React.FocusEvent) => {
    const currentTarget = e.currentTarget;
    timeoutRef.current = setTimeout(() => {
      if (!currentTarget.parentElement?.contains(document.activeElement)) {
        setActiveDropdown(null);
      }
    }, 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Determine if a menu trigger is active (either matching current pathname or currently expanded)
  const isTriggerActive = (name: string, paths: string[]) => {
    if (activeDropdown === name) return true;
    return paths.some((path) => pathname?.startsWith(path));
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full bg-primary border-b border-black shadow-hard-sm"
        onKeyDown={handleKeyDown}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-5 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="font-display text-2xl font-bold tracking-tight text-white hover:opacity-90 focus-visible:outline-base"
            >
              HERDOS
            </a>
          </div>

          {/* Center: Nav Triggers */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            
            {/* 1. Solutions Trigger & Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onFocus={() => handleFocus("solutions")}
                onBlur={handleBlur}
                className="font-body text-base font-medium text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base transition-all relative pb-2 pt-1"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "solutions"}
              >
                Solutions
                {isTriggerActive("solutions", ["/solutions"]) && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-tertiary" />
                )}
              </button>

              {activeDropdown === "solutions" && (
                <div 
                  className="absolute left-0 top-full mt-2 w-[640px] bg-secondary border border-black shadow-hard p-8 z-50 grid grid-cols-2 gap-8"
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Column 1: CORE SOLUTIONS */}
                  <div className="flex flex-col gap-5">
                    <Mono size="sm" uppercase className="text-primary tracking-widest font-semibold">
                      CORE SOLUTIONS
                    </Mono>
                    <div className="flex flex-col gap-4">
                      {[
                        {
                          title: "Early Illness Detection",
                          desc: "Detect health issues early to reduce losses.",
                          href: "/solutions#health",
                        },
                        {
                          title: "Virtual Fencing",
                          desc: "Real-time boundaries and geofence alerts.",
                          href: "/solutions#location",
                        },
                        {
                          title: "Behavior Analytics",
                          desc: "Track grazing, rumination, and posture.",
                          href: "/solutions#behavior",
                        },
                      ].map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-3 p-2 -m-2 border border-transparent hover:bg-primary/10 hover:border-black transition-all focus-visible:bg-primary/10 focus-visible:border-black focus-visible:outline-none"
                          onBlur={handleBlur}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/25 border border-primary flex items-center justify-center text-primary font-mono text-xs font-bold">
                            {idx + 1}
                          </div>
                          <div>
                            <Text size="base" weight="semibold" className="text-primary leading-tight">
                              {item.title}
                            </Text>
                            <Text size="xs" className="text-text-secondary mt-0.5">
                              {item.desc}
                            </Text>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: OPERATIONAL */}
                  <div className="flex flex-col gap-5">
                    <Mono size="sm" uppercase className="text-primary tracking-widest font-semibold">
                      OPERATIONAL
                    </Mono>
                    <div className="flex flex-col gap-4">
                      {[
                        {
                          title: "Heat Detection",
                          desc: "Reproduction and estrus tracking alerts.",
                          href: "/solutions#heat",
                        },
                        {
                          title: "Disease Prevention",
                          desc: "Prevent contagion spread in your herds.",
                          href: "/solutions#disease",
                        },
                        {
                          title: "All Solutions →",
                          desc: "Explore our complete analytics capability.",
                          href: "/solutions",
                        },
                      ].map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-3 p-2 -m-2 border border-transparent hover:bg-primary/10 hover:border-black transition-all focus-visible:bg-primary/10 focus-visible:border-black focus-visible:outline-none"
                          onBlur={handleBlur}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/25 border border-primary flex items-center justify-center text-primary font-mono text-xs font-bold">
                            {idx + 4}
                          </div>
                          <div>
                            <Text size="base" weight="semibold" className="text-primary leading-tight">
                              {item.title}
                            </Text>
                            <Text size="xs" className="text-text-secondary mt-0.5">
                              {item.desc}
                            </Text>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Product Trigger & Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("product")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onFocus={() => handleFocus("product")}
                onBlur={handleBlur}
                className="font-body text-base font-medium text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base transition-all relative pb-2 pt-1"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "product"}
              >
                Product
                {isTriggerActive("product", ["/product"]) && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-tertiary" />
                )}
              </button>

              {activeDropdown === "product" && (
                <div 
                  className="absolute right-0 md:right-auto md:left-0 top-full mt-2 w-[720px] bg-gray border border-black shadow-hard p-6 z-50 grid grid-cols-5 gap-6"
                  onMouseEnter={() => handleMouseEnter("product")}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Left: Featured Product Card (2/5 cols) */}
                  <div className="col-span-2">
                    <Card className="h-full flex flex-col justify-between p-4 bg-base border border-black shadow-hard-sm">
                      <div>
                        {/* Schematic illustration of collar */}
                        <div className="w-full h-32 bg-gray flex items-center justify-center border border-black mb-4">
                          <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary">
                            <rect x="25" y="10" width="50" height="80" fill="none" stroke="currentColor" strokeWidth="2" />
                            <circle cx="50" cy="50" r="15" fill="none" stroke="var(--color-tertiary)" strokeWidth="3" />
                            <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
                            <rect x="42" y="42" width="16" height="16" fill="currentColor" />
                          </svg>
                        </div>
                        <Text size="base" weight="semibold" className="text-primary leading-tight">
                          THE SMART Collar
                        </Text>
                        <Text size="xs" className="text-text-secondary mt-1">
                          Lightweight, solar-powered wearable designed for sheep & goats.
                        </Text>
                      </div>
                      <a
                        href="/product#collar"
                        className="font-mono text-xs font-bold text-primary hover:underline mt-4 inline-block focus-visible:outline-none"
                        onBlur={handleBlur}
                      >
                        VIEW COLLAR DETAILS →
                      </a>
                    </Card>
                  </div>

                  {/* Right: List of 5 items (3/5 cols) */}
                  <div className="col-span-3 flex flex-col gap-3">
                    {[
                      {
                        title: "Portable Base Station",
                        desc: "Long-range RF communication ground station.",
                        href: "/product#basestation",
                      },
                      {
                        title: "Dashboard Platform",
                        desc: "Real-time analytics dashboard.",
                        href: "/product#dashboard",
                      },
                      {
                        title: "Mobile App",
                        desc: "Boundary controls and alerts in your pocket.",
                        href: "/product#mobile",
                      },
                      {
                        title: "Solar Technology",
                        desc: "Solar-assisted power management.",
                        href: "/product#solar",
                      },
                      {
                        title: "AI Engine",
                        desc: "Edge AI sheep & goat diagnostics.",
                        href: "/product#ai",
                      },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex flex-col p-2 border border-transparent hover:bg-base hover:border-black hover:shadow-hard-sm transition-all focus-visible:bg-base focus-visible:border-black focus-visible:shadow-hard-sm focus-visible:outline-none"
                        onBlur={handleBlur}
                      >
                        <Text size="sm" weight="semibold" className="text-primary leading-tight">
                          {item.title}
                        </Text>
                        <Text size="xs" className="text-text-secondary mt-0.5">
                          {item.desc}
                        </Text>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Industries Trigger & Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onFocus={() => handleFocus("industries")}
                onBlur={handleBlur}
                className="font-body text-base font-medium text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base transition-all relative pb-2 pt-1"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "industries"}
              >
                Industries
                {isTriggerActive("industries", ["/industries"]) && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-tertiary" />
                )}
              </button>

              {activeDropdown === "industries" && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[360px] bg-secondary/15 border border-black shadow-hard p-6 z-50 flex flex-col gap-4"
                  onMouseEnter={() => handleMouseEnter("industries")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Mono size="sm" uppercase className="text-primary tracking-widest font-semibold">
                    OPERATION SCALES
                  </Mono>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { label: "Goat Dairy Farms", href: "/industries#dairy" },
                      { label: "Commercial Sheep Farms", href: "/industries#beef" },
                      { label: "Community Pastoralists", href: "/industries#ranching" },
                      { label: "Elite Breeding Operations", href: "/industries#breeding" },
                      { label: "Research Institutions", href: "/industries#research" },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block w-full px-4 py-3 bg-base border border-black shadow-hard-sm hover:bg-secondary hover:text-primary transition-all focus-visible:bg-secondary focus-visible:outline-none"
                        onBlur={handleBlur}
                      >
                        <Text size="sm" weight="semibold" className="text-primary leading-tight">
                          {item.label}
                        </Text>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Resources Trigger & Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onFocus={() => handleFocus("resources")}
                onBlur={handleBlur}
                className="font-body text-base font-medium text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base transition-all relative pb-2 pt-1"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "resources"}
              >
                Resources
                {isTriggerActive("resources", ["/blog", "/resources"]) && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-tertiary" />
                )}
              </button>

              {activeDropdown === "resources" && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[600px] bg-gray border border-black shadow-hard p-6 z-50 grid grid-cols-2 gap-6"
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Left Column: HELP & DOCS */}
                  <div className="flex flex-col gap-4">
                    <Mono size="sm" uppercase className="text-primary tracking-widest font-semibold">
                      HELP & DOCS
                    </Mono>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          title: "Blog",
                          desc: "Livestock tech news and insights.",
                          href: "/blog",
                        },
                        {
                          title: "Documentation",
                          desc: "API logs and collar setup steps.",
                          href: "/contact#support",
                        },
                        {
                          title: "Help Center",
                          desc: "Troubleshoot signal and collar problems.",
                          href: "/contact#support",
                        },
                      ].map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="flex flex-col p-2 border border-transparent hover:bg-base hover:border-black hover:shadow-hard-sm transition-all focus-visible:bg-base focus-visible:border-black focus-visible:shadow-hard-sm focus-visible:outline-none"
                          onBlur={handleBlur}
                        >
                          <Text size="sm" weight="semibold" className="text-primary leading-tight">
                            {item.title}
                          </Text>
                          <Text size="xs" className="text-text-secondary mt-0.5">
                            {item.desc}
                          </Text>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: FEATURED ARTICLE callout card */}
                  <Card className="flex flex-col justify-between p-4 bg-base border border-black shadow-hard">
                    <div>
                      <Mono size="xs" uppercase className="text-tertiary font-bold tracking-wider mb-2">
                        Featured Article
                      </Mono>
                      <Text size="base" weight="semibold" className="text-primary leading-tight">
                        Catching PPR Early
                      </Text>
                      <Text size="xs" className="text-text-secondary mt-1">
                        Early detection thresholds and diagnostics in small ruminants.
                      </Text>
                    </div>
                    <a
                      href="/blog#featured"
                      className="font-mono text-xs font-bold text-primary hover:underline mt-4 inline-block focus-visible:outline-none"
                      onBlur={handleBlur}
                    >
                      READ ARTICLE →
                    </a>
                  </Card>
                </div>
              )}
            </div>

            {/* 5. Company Trigger & Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onFocus={() => handleFocus("company")}
                onBlur={handleBlur}
                className="font-body text-base font-medium text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base transition-all relative pb-2 pt-1"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "company"}
              >
                Company
                {isTriggerActive("company", ["/about", "/contact"]) && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-tertiary" />
                )}
              </button>

              {activeDropdown === "company" && (
                <div 
                  className="absolute right-0 top-full mt-2 w-[300px] bg-gray border border-black shadow-hard p-6 z-50 flex flex-col gap-4"
                  onMouseEnter={() => handleMouseEnter("company")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Mono size="sm" uppercase className="text-primary tracking-widest font-semibold">
                    ABOUT HERDOS
                  </Mono>
                  <div className="flex flex-col gap-2">
                    {[
                      {
                        title: "About & Mission",
                        desc: "Our story, vision, and deep-tech roots.",
                        href: "/about#mission",
                      },
                      {
                        title: "Careers",
                        desc: "Join our team building the field OS.",
                        href: "/about#careers",
                      },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex flex-col p-2 border border-transparent hover:bg-base hover:border-black hover:shadow-hard-sm transition-all focus-visible:bg-base focus-visible:border-black focus-visible:shadow-hard-sm focus-visible:outline-none"
                        onBlur={handleBlur}
                      >
                        <Text size="sm" weight="semibold" className="text-primary leading-tight">
                          {item.title}
                        </Text>
                        <Text size="xs" className="text-text-secondary mt-0.5">
                          {item.desc}
                        </Text>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Right: CTA Button */}
          <div>
            <Button
              variant="tertiary"
              size="md"
              className="font-mono text-sm uppercase tracking-wider"
            >
              PRE-ORDER
            </Button>
          </div>
        </div>
      </header>

      {/* Dropdown Backdrop overlay to close when clicking outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40 bg-black/5"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
}
