"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Star, TrendingUp, CheckCircle } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    title: "Hyper-Local Expertise",
    description:
      "We live and work in Sheboygan and Manitowoc counties. We know the neighborhoods, the rental rates, the best contractors, and the local laws — not some out-of-state franchise guessing.",
    points: ["Local market pricing intelligence", "Vetted local contractor network", "County-specific legal compliance"],
  },
  {
    icon: Zap,
    title: "Technology-First Operations",
    description:
      "While your competitors are still using spreadsheets and fax machines, MHP runs a modern tech stack — owner portals, tenant apps, automated payments, and real-time reporting.",
    points: ["24/7 owner & tenant portals", "Automated rent collection & ACH", "Digital maintenance request tracking"],
  },
  {
    icon: Star,
    title: "Short-Term Rental Specialists",
    description:
      "Most local property managers don't touch Airbnb/VRBO. We do — and we're good at it. Dynamic pricing, professional listings, and guest management that maximizes your nightly revenue.",
    points: ["Dynamic pricing algorithms", "Professional listing photography", "Full guest communication & reviews"],
  },
  {
    icon: TrendingUp,
    title: "True Investment Partnership",
    description:
      "We're not just managing — we're advising. Cap rate analysis, acquisition consulting, market trends. We help you grow your portfolio strategically, not just maintain what you have.",
    points: ["Investment performance reporting", "Acquisition due diligence support", "Portfolio growth strategy sessions"],
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            The MHP Difference
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Why Investors Choose{" "}
            <span className="text-gradient">Midwest Hospitality Partners</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We looked at what the competition was doing. Then we built what they should have built —
            a modern, investor-first property management company that actually delivers.
          </p>
        </div>

        {/* Competitor callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-950/30 border border-red-900/40 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
            <Star className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <div className="text-red-400 font-bold mb-1">The competition? Not great.</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A look at local Yelp and Google reviews reveals consistent complaints about poor responsiveness,
              maintenance failures, and opaque accounting. Manitowoc Property Management recently{" "}
              <em>stopped managing third-party properties entirely</em>. Focus PM holds a 1.1/5 rating across 50+
              reviews. <span className="text-white font-semibold">That gap is your opportunity — and ours.</span>
            </p>
          </div>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 hover-card"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-3">{adv.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {adv.description}
                    </p>
                    <ul className="space-y-2">
                      {adv.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
