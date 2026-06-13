import Link from "next/link";
import { Building, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const services = [
  "Tenant Screening",
  "Rent Collection",
  "Maintenance Coordination",
  "Leasing & Marketing",
  "Owner Accounting",
  "Eviction Services",
  "Short-Term Rentals",
  "Investment Acquisition",
];

const company = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "For Investors", href: "/investors" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">MIDWEST</div>
                <div className="text-emerald-400 text-xs font-semibold tracking-widest">
                  HOSPITALITY PARTNERS
                </div>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Full-service investment property management for Sheboygan &amp; Manitowoc
              counties, Wisconsin. Maximize returns. Minimize hassle.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+19205550100"
                className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (920) 555-0100
              </a>
              <a
                href="mailto:hello@midwesthospitalitypartners.com"
                className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                hello@midwesthospitalitypartners.com
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Serving Sheboygan &amp; Manitowoc Counties, WI</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-slate-500 hover:text-emerald-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-slate-500 hover:text-emerald-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Get Market Insights
            </h4>
            <p className="text-slate-500 text-sm mb-5 leading-relaxed">
              Monthly rental market updates for Sheboygan &amp; Manitowoc counties.
              No spam, unsubscribe anytime.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <span>© {new Date().getFullYear()} Midwest Hospitality Partners LLC. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Licensed in Wisconsin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
