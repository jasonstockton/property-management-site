"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(920) 555-0100",
    sub: "Mon–Fri 8am–6pm, Sat 9am–2pm",
    href: "tel:+19205550100",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@midwesthospitalitypartners.com",
    sub: "We respond within 24 hours",
    href: "mailto:hello@midwesthospitalitypartners.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Sheboygan & Manitowoc Counties",
    sub: "Wisconsin",
    href: null,
  },
  {
    icon: Clock,
    label: "Maintenance Emergency",
    value: "24/7 Emergency Line",
    sub: "For existing clients only",
    href: "tel:+19205550101",
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: string;
  units: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "",
    units: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-bg">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 mb-8">
              Free, No-Obligation
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Let&apos;s Talk About
              <br />
              <span className="text-gradient">Your Portfolio.</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Get your free property analysis. No commitment, no pressure — just an honest look
              at what your investment should be earning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="glass-card rounded-2xl p-6 hover-card">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-1">
                          {item.label}
                        </div>
                        <div className="text-white font-semibold text-sm">{item.value}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}

              {/* What to expect */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">What happens next?</h3>
                <ul className="space-y-3">
                  {[
                    "We review your submission within 24 hours",
                    "A local expert calls to learn your goals",
                    "We prepare your free property analysis",
                    "You decide — zero pressure, ever",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-emerald-400 text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-slate-400 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-white mb-4">
                    You&apos;re on our radar.
                  </h2>
                  <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                    We&apos;ll be in touch within 24 hours with your free property analysis. Welcome
                    to the MHP family.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card rounded-2xl p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-extrabold text-white mb-2">
                    Request Your Free Analysis
                  </h2>
                  <p className="text-slate-500 text-sm mb-8">
                    Tell us about your property and goals. This takes 2 minutes.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-300 text-sm">First Name *</Label>
                        <Input
                          required
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          placeholder="John"
                          className="bg-slate-900 border-slate-700 text-white placeholder-slate-600 focus:border-emerald-500/50 h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-300 text-sm">Last Name *</Label>
                        <Input
                          required
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          placeholder="Smith"
                          className="bg-slate-900 border-slate-700 text-white placeholder-slate-600 focus:border-emerald-500/50 h-11"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-300 text-sm">Email *</Label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@email.com"
                          className="bg-slate-900 border-slate-700 text-white placeholder-slate-600 focus:border-emerald-500/50 h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-300 text-sm">Phone</Label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="(920) 555-0100"
                          className="bg-slate-900 border-slate-700 text-white placeholder-slate-600 focus:border-emerald-500/50 h-11"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-300 text-sm">Property Type *</Label>
                        <Select
                          required
                          onValueChange={(v) => handleChange("propertyType", v)}
                        >
                          <SelectTrigger className="bg-slate-900 border-slate-700 text-white h-11">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-700 text-white">
                            <SelectItem value="single-family">Single-Family Home</SelectItem>
                            <SelectItem value="multi-family">Multi-Family (2–4 units)</SelectItem>
                            <SelectItem value="apartment">Apartment Building (5+)</SelectItem>
                            <SelectItem value="commercial">Commercial Property</SelectItem>
                            <SelectItem value="short-term">Short-Term / Airbnb</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-300 text-sm">Number of Units</Label>
                        <Select onValueChange={(v) => handleChange("units", v)}>
                          <SelectTrigger className="bg-slate-900 border-slate-700 text-white h-11">
                            <SelectValue placeholder="Select units" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-700 text-white">
                            <SelectItem value="1">1 unit</SelectItem>
                            <SelectItem value="2-4">2–4 units</SelectItem>
                            <SelectItem value="5-10">5–10 units</SelectItem>
                            <SelectItem value="11+">11+ units</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300 text-sm">Tell us about your situation</Label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Property address, current situation, goals, questions... anything helps."
                        rows={5}
                        className="bg-slate-900 border-slate-700 text-white placeholder-slate-600 focus:border-emerald-500/50 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base rounded-xl hover:shadow-xl hover:shadow-emerald-500/20 group transition-all"
                    >
                      Send My Request
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-slate-600 text-xs text-center">
                      By submitting, you agree to be contacted by Midwest Hospitality Partners.
                      We never share your information.
                    </p>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
