"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server, Eye, AlertCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "GDPR & TCPA Compliant",
    description: "Built-in tools for consent management, opt-out handling, and Do-Not-Call list management.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted in transit and at rest with industry-standard AES-256 encryption.",
  },
  {
    icon: FileCheck,
    title: "Audit Logs",
    description: "Comprehensive audit trails for all actions with configurable retention policies.",
  },
  {
    icon: Server,
    title: "SOC 2 Type II",
    description: "Enterprise-grade security controls verified by independent auditors.",
  },
  {
    icon: Eye,
    title: "Role-Based Access",
    description: "Granular permissions and access controls for teams of any size.",
  },
  {
    icon: AlertCircle,
    title: "EU AI Act Ready",
    description: "Aligned with emerging AI regulations for transparent and responsible AI use.",
  },
];

export default function Security() {
  return (
    <section className="section-padding bg-neutral-50 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-sm font-medium text-primary-700 mb-6">
            <Shield className="w-4 h-4" />
            Enterprise Security
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Security & Compliance
            <br />
            <span className="gradient-text">You Can Trust</span>
          </h2>
          <p className="text-lg text-neutral-600">
            We provide AI-powered call automation with built-in consent and data protections 
            to help teams meet regulatory and enterprise security requirements.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          {["ISO 27001", "GDPR", "HIPAA Ready", "SOC 2"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-neutral-200 text-neutral-700 font-medium"
            >
              <Shield className="w-5 h-5 text-accent-500" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}







