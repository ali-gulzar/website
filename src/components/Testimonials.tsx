"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    content: "Speechory has transformed our customer support. We now handle 3x more calls with the same team size, and our customer satisfaction scores have never been higher.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Director, MedCare Clinics",
    content: "The appointment scheduling feature alone has saved us countless hours. Our no-show rate dropped by 40% since implementing Speechory's reminder calls.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Sales Manager, PropertyPro",
    content: "Our sales team can now focus on closing deals instead of cold calling. Speechory qualifies leads for us and only sends us the most promising prospects.",
    rating: 5,
    avatar: "EW",
  },
  {
    name: "David Kim",
    role: "Founder, E-Shop Global",
    content: "24/7 customer support was a game-changer for our e-commerce business. International customers get instant help regardless of time zones.",
    rating: 5,
    avatar: "DK",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director, AutoMax",
    content: "The voice quality is incredible. Many customers don't even realize they're talking to an AI. It's that good.",
    rating: 5,
    avatar: "LT",
  },
  {
    name: "James Wilson",
    role: "CTO, FinanceHub",
    content: "Enterprise-grade security was crucial for us. Speechory's compliance features made it easy to meet all our regulatory requirements.",
    rating: 5,
    avatar: "JW",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-sm font-medium text-primary-700 mb-6">
            <Star className="w-4 h-4 fill-primary-500" />
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Loved by Businesses
            <br />
            <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-lg text-neutral-600">
            See how companies are transforming their customer communications with Speechory.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-neutral-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm">{testimonial.name}</h4>
                  <p className="text-neutral-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10M+", label: "Calls Handled" },
            { value: "500+", label: "Happy Customers" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "4.9/5", label: "Customer Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}




