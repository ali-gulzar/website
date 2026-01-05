"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Phone, Clock, Users, Zap, Shield, Star, MessageSquare } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    monthlyPrice: 34,
    yearlyPrice: 29,
    minutes: "120",
    extraMinutePrice: "$0.20",
    features: [
      { text: "120 minutes included", icon: Clock },
      { text: "$0.20 per extra minute", icon: Zap },
      { text: "1 AI receptionist", icon: Phone },
      { text: "3 concurrent calls", icon: Users },
      { text: "Google Calendar integration", icon: Check },
      { text: "Email support", icon: MessageSquare },
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "from-neutral-500 to-neutral-600",
  },
  {
    name: "Professional",
    description: "For growing businesses with higher call volume",
    monthlyPrice: 129,
    yearlyPrice: 109,
    minutes: "700",
    extraMinutePrice: "$0.16",
    features: [
      { text: "700 minutes included", icon: Clock },
      { text: "$0.16 per extra minute", icon: Zap },
      { text: "5 AI receptionists", icon: Phone },
      { text: "10 concurrent calls", icon: Users },
      { text: "All calendar integrations", icon: Check },
      { text: "Priority support", icon: MessageSquare },
      { text: "Advanced analytics", icon: Star },
      { text: "Multi-language support", icon: Check },
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-primary-500 to-primary-600",
  },
  {
    name: "Agency",
    description: "Scale your operations with unlimited power",
    monthlyPrice: 249,
    yearlyPrice: 209,
    minutes: "1,700",
    extraMinutePrice: "$0.09",
    features: [
      { text: "1,700 minutes included", icon: Clock },
      { text: "$0.09 per extra minute", icon: Zap },
      { text: "Unlimited AI receptionists", icon: Phone },
      { text: "50 concurrent calls", icon: Users },
      { text: "White-label option", icon: Star },
      { text: "Dedicated account manager", icon: MessageSquare },
      { text: "API access", icon: Shield },
      { text: "Custom integrations", icon: Check },
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "from-accent-500 to-accent-600",
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    monthlyPrice: null,
    yearlyPrice: null,
    minutes: "Custom",
    extraMinutePrice: "Custom",
    features: [
      { text: "Custom minutes", icon: Clock },
      { text: "Volume discounts", icon: Zap },
      { text: "Unlimited everything", icon: Phone },
      { text: "Unlimited concurrent calls", icon: Users },
      { text: "Custom integrations", icon: Shield },
      { text: "24/7 phone support", icon: MessageSquare },
      { text: "SLA guarantee", icon: Star },
      { text: "Dedicated infrastructure", icon: Check },
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-purple-500 to-purple-600",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />

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
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg border border-neutral-100">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                !isYearly
                  ? "bg-primary-500 text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Monthly
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                isYearly
                  ? "bg-primary-500 text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-accent-500 text-white px-2 py-1 rounded-full">
                Save 15%
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all ${
                plan.popular
                  ? "border-primary-300 shadow-2xl shadow-primary-500/20 lg:scale-105"
                  : "border-neutral-100 shadow-lg hover:shadow-xl hover:border-primary-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <div className="px-4 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-neutral-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-5xl font-bold text-neutral-900">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-neutral-500 mb-2">/month</span>
                      </div>
                      {isYearly && (
                        <p className="text-sm text-accent-600 font-medium">
                          Billed ${plan.yearlyPrice! * 12}/year
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-3xl font-bold text-neutral-900">Custom Pricing</div>
                  )}
                </div>

                {/* Minutes Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${plan.gradient} text-white text-sm font-semibold mb-4`}>
                  <Clock className="w-4 h-4" />
                  {plan.minutes} minutes/month
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-neutral-700">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-500"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-accent-500" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-accent-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-accent-500" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-accent-500" />
            <span>Enterprise-grade security</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
