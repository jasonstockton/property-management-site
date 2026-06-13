"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, Settings, Briefcase, FileText, Shield, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Tenant Screening",
    description:
      "Rigorous multi-point screening including credit, income verification, criminal background, and prior landlord references. We place tenants you can count on.",
    highlight: "Avg. 7-day placement",
  },
  {
    icon: DollarSign,
    title: "Rent Collection",
    description:
      "Automated online payment systems, consistent enforcement, and on-time owner disbursements every month — no more chasing checks.",
    highlight: "ACH direct deposit",
  },
  {
    icon: Settings,
    title: "Maintenance Coordination",
    description:
      "24/7 emergency response, vetted local contractor network, and proactive maintenance plans to protect your asset value long-term.",
    highlight: "24hr response SLA",
  },
  {
    icon: Briefcase,
    title: "Leasing & Marketing",
    description:
      "Professional photography, syndicated listings across Zillow, Apartments.com, MLS, and social media to minimize vacancy and maximize rent.",
    highlight: "Multi-platform exposure",
  },
  {
    icon: FileText,
    title: "Owner Accounting",
    description:
      "Detailed monthly statements, year-end 1099 prep, expense tracking, and a live owner portal so your financials are always crystal clear.",
    highlight: "Real-time dashboard",
  },
  {
    icon: Shield,
    title: "Eviction Services",
    description:
      "When the hard situation arises, we handle the full legal process — notices, filings, court appearances — keeping you protected and compliant.",
    highlight: "Full legal support",
  },
  {
    icon: Star,
    title: "Short-Term / Airbnb",
    description:
      "Maximize nightly revenue with dynamic pricing, professional listing management, guest communication, and turnover coordination for your STR properties.",
    highlight: "Dynamic rate pricing",
  },
  {
    icon: TrendingUp,
    title: "Investment Acquisition",
    description:
      "Not sure which properties to buy? We consult on market analysis, cash flow projections, cap rates, and due diligence for your next Sheboygan or Manitowoc investment.",
    highlight: "Cap rate analysis",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Everything Under One Roof
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            8 Services. Zero Gaps.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From tenant placement to acquisition consulting, MHP handles every aspect of your
            investment property — so you never have to juggle multiple vendors again.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 hover-card cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlight pill */}
                <div className="mt-auto">
                  <span className="inline-block bg-slate-800 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700">
                    ✓ {service.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link href="/services">
            <Button
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 font-semibold h-12 px-8 rounded-xl transition-all group"
            >
              View Full Service Details
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
