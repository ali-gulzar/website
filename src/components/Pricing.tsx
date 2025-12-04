"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Start automating calls with AI voice agents.",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      "150 included minutes",
      "Then $0.20 / extra minute",
      "1 AI assistant",
      "1 outbound campaign",
      "3 calls in parallel",
      "1 cloned voice",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses automating inbound and outbound calls.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "750 included minutes",
      "Then $0.15 / extra minute",
      "5 AI assistants",
      "5 outbound campaigns",
      "10 calls in parallel",
      "5 cloned voices",
      "Priority support",
      "Advanced analytics",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Agency",
    description: "Ideal for agencies scaling customer engagement.",
    monthlyPrice: 199,
    yearlyPrice: 159,
    features: [
      "2000 included minutes",
      "Then $0.09 / extra minute",
      "Unlimited assistants",
      "Unlimited campaigns",
      "500 calls in parallel",
      "10 cloned voices",
      "Dedicated support",
      "Custom integrations",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
  {
    name: "Enterprise",
    description: "White-label solution with full customization.",
    monthlyPrice: 399,
    yearlyPrice: 319,
    features: [
      "5000 included minutes",
      "Then $0.07 / extra minute",
      "Everything in Agency",
      "White-label branding",
      "Unlimited cloned voices",
      "Dedicated account manager",
      "Custom SLA",
      "SSO & advanced security",
      "On-premise option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-primary-50/40 via-transparent to-transparent rounded-full" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-sm font-medium text-primary-700 mb-6">
            <Sparkles className="w-4 h-4" />
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Ready to Start Automating?
          </h2>
          <p className="text-lg text-neutral-600">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium ${!isYearly ? "text-neutral-900" : "text-neutral-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? "bg-primary-500" : "bg-neutral-200"
            }`}
          >
            <motion.div
              animate={{ x: isYearly ? 28 : 4 }}
              className="absolute top-1 w-5 h-5 bg-white rounded-full shadow"
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? "text-neutral-900" : "text-neutral-400"}`}>
            Yearly
          </span>
          <span className="bg-accent-100 text-accent-700 text-xs font-medium px-2 py-1 rounded-full">
            Save 20%
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card relative ${plan.popular ? "featured" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-600 text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-neutral-900">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-neutral-500">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-neutral-400 mt-1">
                    billed yearly (${plan.yearlyPrice * 12}/year)
                  </p>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      plan.popular ? "text-primary-500" : "text-accent-500"
                    }`} />
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#signup"
                className={`w-full text-center ${
                  plan.popular ? "btn-primary" : "btn-outline"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-neutral-500 text-sm mt-12"
        >
          All prices in USD. Need a custom plan? <a href="#contact" className="text-primary-600 hover:underline">Contact us</a>
        </motion.p>
      </div>
    </section>
  );
}




