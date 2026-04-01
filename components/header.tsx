"use client"

import { useState } from "react"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Our Services",
      highlight: true,
      href: "/branding",
      dropdown: [
        { name: "Recruitment", href: "/recruitment" },
        { name: "Branding", href: "/branding" },
        { name: "Training", href: "/training" },
        { name: "Resume Writing", href: "/job-seekers/resume-writing" },
      ],
    },
    { name: "Join Us", href: "/join-us" },
    {
      name: "Job Seekers",
      href: "/job-seekers",
      dropdown: [
        { name: "Job Search", href: "/job-seekers" },
        { name: "Submit CV", href: "/submit-cv" },
      ],
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/">
              <Image
                src="/images/talent-20flux-20logo-20png.png"
                alt="TalentFlux Logo"
                width={252}
                height={84}
                className="h-16 w-auto scale-110"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActiveParent =
                pathname === item.href ||
                item.dropdown?.some((d) => d.href === pathname)

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                          isActiveParent
                            ? "text-primary font-bold px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full mt-2 left-0 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px]"
                          >
                            {item.dropdown.map((dropdownItem) => {
  const isTraining = dropdownItem.name === "Training"

  return (
    <Link
      key={dropdownItem.name}
      href={dropdownItem.href}
      className={`block px-4 py-2 text-sm transition-colors ${
        isTraining
          ? "text-primary font-semibold bg-primary/10 rounded-md"
          : "text-foreground hover:bg-muted hover:text-primary"
      }`}
    >
      {dropdownItem.name}
    </Link>
  )
})}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "text-primary font-bold"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild size="sm" variant="outline">
              <a href="/contact" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="/contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <p className="text-sm font-medium">{item.name}</p>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => {
                          const isActive = pathname === dropdownItem.href

                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block text-sm ${
                                isActive
                                  ? "text-primary font-semibold"
                                  : "text-muted-foreground hover:text-primary"
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-medium ${
                        pathname === item.href ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <Button asChild className="w-full">
                <a href="/contact">Get Started</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}