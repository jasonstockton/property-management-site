"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  TrendingUp, DollarSign, BarChart3, MapPin, CheckCircle,
  ArrowRight, Building, Star, Zap,
} from "lucide-react";

const marketStats = [
  { label: "Avg. Sheboygan Vacancy Rate", value: "~5%", sub: "Strong rental demand" },
  { label: "Avg. Monthly Rent (1BR)", value: "$850+", sub: "Sheboygan metro" },
  { label: "Population: Sheboygan Co.", value: "117K+", sub: "Stable renter base" },
  { label: "Manitowoc County Pop.", value: "78K+", sub: "Growing rental market" },
];

const investorBenefits = [
  {
    icon: TrendingUp,
    title: "Portfolio Performance Reporting",
    description:
      "Monthly dashboard showing income, expenses, net operating income, and year-over-year performance trends for every property in your portfolio.",
  },
  {
    icon: DollarSign,
    title: "Transparent, Flat-Fee Pricing",
    description:
      "No surprise fees. Our management fee is straightforward, and we never upcharge on maintenance vendor invoices or take kickbacks from contractors.",
  },
  {
    icon: BarChart3,
    title: "Market Rent Optimization",
    description:
      "Quarterly rent reviews using comparable market data to ensure you're always capturing the highest justified rent without unnecessary vacancy.",
  },
  {
    icon: Zap,
    title: "Owner Portal: 24/7 Access",
    description:
      "Log in anytime to see real-time financials, maintenance requests, tenant communications, and documents. Your portfolio is always at your fingertips.",
  },
  {
    icon: Building,
    title: "Acquisition Consulting",
    description:
      "Thinking about your next property? We provide market analysis, pro forma projections, and due diligence support to help you invest with confidence.",
  },
  {
    icon: Star,
    title: "Short-Term Rental Optimization",
    description:
      "For STR-eligible properties, we manage Airbnb/VRBO listings with dynamic pricing strategies that can 2–3x the revenue of a long-term lease.",
  },
];

const whyWisconsin = [
  "Affordable entry price points vs. major metro markets",
  "Stable, long-term tenant population with strong employment base",
  "Low property taxes relative to rental income potential",
  "Growing demand driven by Lake Michigan lifestyle and tourism",
  "Less competition than Milwaukee or Madison markets",
  "Strong single-family and small multi-family rental demand",
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-bg">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 mb-8">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              Wisconsin Investment Intelligence
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Built for Investors.
              <br />
              <span className="text-gradient">Obsessed with Returns.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-10">
              Whether you own one rental or a growing portfolio, MHP is your investment partner in
              Sheboygan and Manitowoc counties. We think like investors because we manage like one.
            </p>
            <Link href="/contact">
              <Button className="h-14 px-10 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base rounded-xl hover:shadow-xl hover:shadow-emerald-500/20 group">
                Request Investor Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Market stats */}
      <section className="py-16 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">The Market Opportunity</h2>
            <p className="text-slate-400">Why Sheboygan &amp; Manitowoc are smart markets for rental investment.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {marketStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-gradient mb-2">{stat.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-slate-500 text-xs">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wisconsin */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
                Market Intelligence
              </span>
              <h2 className="text-4xl font-extrabold text-white mb-6">
                Why Smart Investors Target This Market
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Sheboygan and Manitowoc counties offer a compelling combination of affordable
                acquisition prices, stable rental demand, and lower competition than Wisconsin&apos;s
                major metro markets. The result: stronger cap rates and less bidding war pressure.
              </p>
              <ul className="space-y-3">
                {whyWisconsin.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-8">
                <div className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
                  Sample Investment Scenario
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Purchase Price", value: "$180,000" },
                    { label: "Monthly Rent", value: "$1,200" },
                    { label: "Annual Gross Income", value: "$14,400" },
                    { label: "MHP Management Fee (~10%)", value: "$1,440/yr" },
                    { label: "Est. Annual Net (after expenses)", value: "$8,200+" },
                    { label: "Gross Cap Rate", value: "~8%" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2 border-b border-slate-800/60 last:border-0">
                      <span className="text-slate-400 text-sm">{row.label}</span>
                      <span className="text-white font-semibold text-sm">{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 text-xs mt-4">
                  * Illustrative example only. Actual results vary by property, location, and market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor benefits */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              How MHP Protects Your Investment
            </h2>
            <p className="text-slate-400 text-lg">
              We&apos;re not a maintenance company that happens to collect rent. We&apos;re an investor-first
              management partner that thinks about your ROI in everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investorBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-7 hover-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
