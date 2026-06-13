"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David K.",
    title: "6-Unit Owner, Sheboygan",
    quote:
      "I used to spend every weekend dealing with tenant calls, chasing rent, and coordinating repairs. Since switching to MHP, I haven't thought about my properties in weeks. The monthly reports are clear, the tenants are happy, and my cashflow actually went up.",
    rating: 5,
    avatar: "DK",
  },
  {
    name: "Rachel M.",
    title: "Short-Term Rental Investor, Manitowoc",
    quote:
      "I have a lake-adjacent property I was trying to manage myself on Airbnb. MHP took it over and within 60 days my occupancy was up 40% and my average nightly rate jumped significantly. They know this market.",
    rating: 5,
    avatar: "RM",
  },
  {
    name: "Tom & Linda S.",
    title: "Portfolio of 4 Rentals, Two Rivers",
    quote:
      "We'd been burned by a previous management company — poor communication, surprise expenses, tenants that should never have been placed. MHP was a completely different experience from day one. Professional, proactive, and honest.",
    rating: 5,
    avatar: "TL",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Client Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Investors Who Made the Switch
          </h2>
          <p className="text-slate-400 text-lg">
            Real results from real Wisconsin property owners who decided to stop stressing and start earning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 hover-card flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-300 text-sm leading-relaxed italic flex-1 mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-800">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-xs">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
