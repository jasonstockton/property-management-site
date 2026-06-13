"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 via-slate-900 to-slate-900" />
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-emerald-500/8 to-transparent" />

          {/* Content */}
          <div className="relative px-8 py-20 sm:px-16 text-center">
            <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Ready to Level Up?
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Your Properties Deserve
              <br />
              <span className="text-gradient">Better Management.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Get your free, no-obligation rental analysis. We&apos;ll show you exactly what your
              property should be earning and how MHP can help you get there.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="h-14 px-10 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base rounded-xl transition-all hover:shadow-2xl hover:shadow-emerald-500/30 group">
                  Schedule Free Analysis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+19205550100">
                <Button
                  variant="outline"
                  className="h-14 px-10 border-slate-700 text-slate-300 hover:border-emerald-500/40 hover:text-white hover:bg-slate-800/60 font-semibold text-base rounded-xl group"
                >
                  <Phone className="mr-2 w-5 h-5 text-emerald-400" />
                  Call (920) 555-0100
                </Button>
              </a>
            </div>

            {/* Micro-trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-500">
              {["No commitment required", "Response within 24 hours", "Serving Sheboygan & Manitowoc"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
