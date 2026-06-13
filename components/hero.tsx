"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";

const stats = [
  { label: "Counties Served", value: "2", sub: "Sheboygan & Manitowoc" },
  { label: "Services Offered", value: "8+", sub: "Under one roof" },
  { label: "Response Time", value: "24hr", sub: "Maintenance SLA" },
  { label: "Free Analysis", value: "$0", sub: "No obligation" },
];

const badges = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: TrendingUp, text: "ROI Focused" },
  { icon: Zap, text: "Tech-Driven Management" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 px-4 py-1.5 text-sm font-medium mb-8">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              Sheboygan &amp; Manitowoc Counties, Wisconsin
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-white">Maximize Returns.</span>
            <br />
            <span className="text-gradient">Minimize Hassle.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed"
          >
            Full-service investment property management built for Wisconsin investors.
            We protect your assets, place quality tenants, and grow your portfolio —
            so you can focus on what matters most.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300"
              >
                <Icon className="w-4 h-4 text-emerald-400" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/contact">
              <Button className="h-14 px-8 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base rounded-xl transition-all hover:shadow-2xl hover:shadow-emerald-500/30 group">
                Get Your Free Analysis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="h-14 px-8 border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:text-white hover:bg-slate-800/60 font-semibold text-base rounded-xl transition-all"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Proof points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 text-sm text-slate-500"
          >
            {[
              "No long-term lock-in contracts",
              "Transparent flat-fee pricing",
              "Owner portal access 24/7",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="glass-card rounded-2xl p-5 text-center hover-card"
            >
              <div className="text-3xl font-extrabold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
