"use client";

import { motion } from "framer-motion";
import { Search, CheckCircle, Settings, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free Property Analysis",
    description:
      "We evaluate your property, analyze the local rental market in Sheboygan or Manitowoc, and deliver a comprehensive report with projected rent, occupancy rates, and ROI — at no cost to you.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Onboarding & Setup",
    description:
      "We handle everything: tenant transition, lease documentation, inspection reports, owner portal setup, and vendor introductions. You're live and protected in days, not weeks.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Active Management",
    description:
      "Day-to-day operations run on autopilot — rent collected, maintenance handled, tenants managed, compliance maintained. We handle the calls, the complaints, the repairs. You don't.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Monthly Reporting & Growth",
    description:
      "Receive detailed monthly statements with income, expenses, and performance metrics. Quarterly check-ins to review your portfolio health and identify opportunities to optimize or expand.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Simple Onboarding
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Up and Running in 4 Steps
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We built our onboarding process to be fast, painless, and transparent.
            Most owners are fully onboarded and generating income within 2–3 weeks.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Number + icon circle */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center emerald-glow group-hover:border-emerald-500/30 transition-colors">
                      <Icon className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center">
                      <span className="text-white text-xs font-extrabold">{i + 1}</span>
                    </div>
                  </div>

                  {/* Step number label */}
                  <span className="text-emerald-500/50 text-xs font-mono font-bold tracking-widest mb-2">
                    {step.number}
                  </span>

                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
