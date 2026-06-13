"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, X, Building, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-slate-950/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center pulse-glow">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm tracking-wide">MIDWEST</div>
              <div className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
                Hospitality Partners
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+19205550100"
              className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(920) 555-0100</span>
            </a>
            <Link href="/contact">
              <Button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 h-10 rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25">
                Free Analysis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 border-slate-800 w-72">
              <div className="flex flex-col gap-6 pt-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">MIDWEST</div>
                    <div className="text-emerald-400 text-xs font-semibold tracking-widest">
                      HOSPITALITY PARTNERS
                    </div>
                  </div>
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-emerald-400 bg-emerald-500/10"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="pt-4 border-t border-slate-800">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold">
                      Get Free Analysis
                    </Button>
                  </Link>
                  <a
                    href="tel:+19205550100"
                    className="flex items-center justify-center gap-2 mt-4 text-slate-400 hover:text-emerald-400 text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (920) 555-0100
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
