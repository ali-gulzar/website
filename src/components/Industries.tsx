"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingCart, Stethoscope, Home, Briefcase, Car, Scale, Headphones, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Simplify appointment scheduling, reminders, and patient engagement effortlessly.",
    features: ["Appointment booking", "Patient reminders", "Follow-up calls"],
    color: "primary",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description: "Deliver instant support, manage orders, and process returns 24/7.",
    features: ["Order tracking", "Returns processing", "Customer support"],
    color: "accent",
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Never miss a lead—automate property inquiries, schedule viewings, and follow-ups.",
    features: ["Lead qualification", "Property inquiries", "Viewing scheduling"],
    color: "primary",
  },
  {
    icon: Headphones,
    name: "Call Centers",
    description: "Maximize efficiency by automating inbound and outbound calls with AI.",
    features: ["Queue management", "Call routing", "Quality assurance"],
    color: "accent",
  },
  {
    icon: Briefcase,
    name: "Services",
    description: "Schedule meetings, collect feedback, and handle customer requests automatically.",
    features: ["Service booking", "Feedback collection", "Quote requests"],
    color: "primary",
  },
  {
    icon: Car,
    name: "Car Dealerships",
    description: "Automate auto sales inquiries, service appointments, and customer follow-ups.",
    features: ["Test drive booking", "Service reminders", "Sales follow-ups"],
    color: "accent",
  },
  {
    icon: Scale,
    name: "Legal",
    description: "Streamline client communication, case updates, and appointment scheduling.",
    features: ["Client intake", "Case updates", "Consultation booking"],
    color: "primary",
  },
  {
    icon: Building2,
    name: "Finance",
    description: "Handle account inquiries, payment reminders, and customer verification.",
    features: ["Account support", "Payment reminders", "Verification calls"],
    color: "accent",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-100 rounded-full text-sm font-medium text-accent-700 mb-6">
            <Building2 className="w-4 h-4" />
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Built for Every
            <br />
            <span className="gradient-text">Industry</span>
          </h2>
          <p className="text-lg text-neutral-600">
            From healthcare to e-commerce, Saila adapts to your industry-specific needs 
            with pre-built templates and custom solutions.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${
                industry.color === "primary"
                  ? "bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white"
                  : "bg-accent-100 text-accent-600 group-hover:bg-accent-500 group-hover:text-white"
              }`}>
                <industry.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{industry.name}</h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{industry.description}</p>
              
              <div className="space-y-2">
                {industry.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-neutral-500">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      industry.color === "primary" ? "bg-primary-400" : "bg-accent-400"
                    }`} />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <a 
                  href={`#${industry.name.toLowerCase()}`}
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                    industry.color === "primary"
                      ? "text-primary-600 hover:text-primary-700"
                      : "text-accent-600 hover:text-accent-700"
                  }`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




