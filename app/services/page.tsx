"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Users, DollarSign, Settings, Briefcase, FileText,
  Shield, Star, TrendingUp, CheckCircle, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Tenant Screening",
    tagline: "Quality tenants from day one.",
    description:
      "Our multi-layer screening process evaluates credit scores, income verification (we require 3x monthly rent), criminal background checks, eviction history, and direct prior landlord references. We don't just find a tenant — we find the right tenant.",
    features: [
      "Full credit & income verification",
      "Criminal & eviction history check",
      "Prior landlord reference calls",
      "Employment & identity verification",
      "Average 7-day placement time",
    ],
    color: "from-blue-500/10 to-transparent",
    accent: "blue",
  },
  {
    icon: DollarSign,
    title: "Rent Collection",
    tagline: "On-time, every time.",
    description:
      "Our automated online payment platform accepts ACH, credit/debit, and bank transfers. Late fees are enforced consistently and owner disbursements go out on a reliable schedule each month — no more wondering where your money is.",
    features: [
      "Online tenant payment portal",
      "ACH direct deposit to owners",
      "Automated late fee enforcement",
      "Consistent monthly disbursements",
      "Full payment history logs",
    ],
    color: "from-emerald-500/10 to-transparent",
    accent: "emerald",
  },
  {
    icon: Settings,
    title: "Maintenance Coordination",
    tagline: "Your asset, always protected.",
    description:
      "24/7 emergency maintenance response, a pre-vetted network of licensed local contractors, digital work order tracking, and proactive seasonal maintenance schedules. We prevent small issues from becoming expensive problems.",
    features: [
      "24/7 emergency response line",
      "Pre-vetted licensed contractors",
      "Digital work order system",
      "Proactive seasonal maintenance",
      "Owner approval thresholds",
    ],
    color: "from-orange-500/10 to-transparent",
    accent: "orange",
  },
  {
    icon: Briefcase,
    title: "Leasing & Marketing",
    tagline: "Maximum exposure. Minimal vacancy.",
    description:
      "Professional listing photography, compelling property descriptions, and multi-platform syndication across Zillow, Trulia, Apartments.com, Craigslist, Facebook Marketplace, and local MLS. We get your unit in front of qualified renters fast.",
    features: [
      "Professional photography included",
      "10+ platform syndication",
      "Showings 7 days a week",
      "Optimized listing copy",
      "Competitive rent analysis",
    ],
    color: "from-purple-500/10 to-transparent",
    accent: "purple",
  },
  {
    icon: FileText,
    title: "Owner Accounting & Reporting",
    tagline: "Your finances, crystal clear.",
    description:
      "Monthly itemized statements, real-time owner portal access, year-end 1099 preparation, expense documentation, and reserve fund management. We make tax season easy and keep you fully informed year-round.",
    features: [
      "Monthly itemized statements",
      "Live 24/7 owner portal",
      "Year-end 1099 preparation",
      "Expense receipt documentation",
      "Reserve fund management",
    ],
    color: "from-teal-500/10 to-transparent",
    accent: "teal",
  },
  {
    icon: Shield,
    title: "Eviction Services",
    tagline: "We handle the hard parts.",
    description:
      "When the worst-case scenario happens, we manage the full legal process: proper notices, court filings, hearings, and coordination with local law enforcement for possession. We keep you compliant, protected, and not alone.",
    features: [
      "Proper legal notice delivery",
      "Court filing management",
      "Hearing attendance & support",
      "Possession coordination",
      "Post-eviction turnover",
    ],
    color: "from-red-500/10 to-transparent",
    accent: "red",
  },
  {
    icon: Star,
    title: "Short-Term / Airbnb Management",
    tagline: "Maximize every night.",
    description:
      "Full-service short-term rental management for Airbnb, VRBO, and direct booking. Dynamic pricing to capture peak seasonal demand, professional listing management, guest communication, and turnover coordination between every stay.",
    features: [
      "Dynamic pricing algorithms",
      "Airbnb & VRBO optimization",
      "Guest communication & review responses",
      "Professional cleaning coordination",
      "Seasonal rate strategy",
    ],
    color: "from-yellow-500/10 to-transparent",
    accent: "yellow",
  },
  {
    icon: TrendingUp,
    title: "Investment Acquisition Consulting",
    tagline: "Find your next winner.",
    description:
      "Thinking about buying your next rental in Sheboygan or Manitowoc? We consult on market analysis, property evaluation, cash-on-cash return projections, cap rates, neighborhood rental demand, and due diligence — so you invest with confidence.",
    features: [
      "Market comparable analysis",
      "Cash flow projections",
      "Cap rate & ROI modeling",
      "Neighborhood demand assessment",
      "Due diligence support",
    ],
    color: "from-emerald-500/10 to-transparent",
    accent: "emerald",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-bg">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 mb-8">
              Full-Service Property Management
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Everything You Need.
              <br />
              <span className="text-gradient">Nothing You Don&apos;t.</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              8 core services designed to protect your investment, maximize your returns, and
              eliminate the headaches of being a landlord in Wisconsin.
            </p>
            <Link href="/contact">
              <Button className="h-14 px-10 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base rounded-xl hover:shadow-xl hover:shadow-emerald-500/20 group">
                Get Free Property Analysis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-8 lg:p-10 hover-card"
              >
                <div className={`flex flex-col lg:flex-row gap-10 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left / Icon + title */}
                  <div className="lg:w-80 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-2">
                      0{i + 1}
                    </div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">{service.title}</h2>
                    <p className="text-emerald-400 font-semibold text-sm">{service.tagline}</p>
                  </div>

                  {/* Right / description + features */}
                  <div className="flex-1">
                    <p className="text-slate-400 leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5 bg-slate-900/60 rounded-lg px-4 py-3">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
