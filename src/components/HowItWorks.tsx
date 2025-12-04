"use client";

import { motion } from "framer-motion";
import { Settings, Mic, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Configure Your Agent",
    description: "Use our intuitive builder to define your AI agent's personality, script, and behavior. No coding required.",
    color: "primary",
  },
  {
    number: "02",
    icon: Mic,
    title: "Choose Your Voice",
    description: "Select from hundreds of natural-sounding voices in 100+ languages, or clone your own voice.",
    color: "accent",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy & Go Live",
    description: "Connect your phone numbers, integrate with your tools, and start handling calls instantly.",
    color: "primary",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Monitor & Optimize",
    description: "Track performance with detailed analytics, review call recordings, and continuously improve.",
    color: "accent",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-50/50 via-transparent to-transparent rounded-full" />
      
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
            <Rocket className="w-4 h-4" />
            Get Started in Minutes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600">
            Get your AI voice agents up and running in four simple steps. 
            No technical expertise needed.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm hover:shadow-lg transition-shadow relative z-10">
                  {/* Step number */}
                  <div className={`absolute -top-4 left-6 px-3 py-1 rounded-full text-xs font-bold ${
                    step.color === "primary" 
                      ? "bg-primary-500 text-white" 
                      : "bg-accent-500 text-white"
                  }`}>
                    Step {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 mt-2 ${
                    step.color === "primary" 
                      ? "bg-primary-100 text-primary-600" 
                      : "bg-accent-100 text-accent-600"
                  }`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector dot for desktop */}
                <div className={`hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white shadow ${
                  step.color === "primary" ? "bg-primary-500" : "bg-accent-500"
                }`} style={{ top: "calc(50% + 60px)" }} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#demo" className="btn-primary">
            Start Building Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}




