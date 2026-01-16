"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Calendar, 
  Headphones, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Users,
  MessageSquare,
  Clock,
  Layers,
  Bot
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Simultaneous Calls",
    description: "Handle 50+ calls in parallel. Forget about queues — our AI manages dozens of conversations simultaneously.",
    color: "primary",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Connect with any calendar. Book appointments, send reminders, and handle rescheduling automatically.",
    color: "accent",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Never miss a call. Provide instant support with zero waiting time, zero queue, zero frustration.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "100+ Languages",
    description: "Speak your customers' language with natural-sounding voices in over 100 languages and accents.",
    color: "accent",
  },
  {
    icon: Zap,
    title: "No-Code Platform",
    description: "Build and deploy AI agents without writing a single line of code. Use our drag-and-drop builder.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "GDPR and TCPA compliant with encryption, audit logs, and configurable data retention policies.",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track every call with recordings, transcriptions, and custom reports to optimize performance.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Human Handoff",
    description: "Seamlessly transfer calls to human agents when needed or when customers request.",
    color: "accent",
  },
];

const useCases = {
  inbound: [
    { icon: Headphones, title: "Customer Support", description: "Handle inquiries, FAQs, and complaints 24/7" },
    { icon: Calendar, title: "Appointment Booking", description: "Let customers schedule appointments instantly" },
    { icon: MessageSquare, title: "Product Information", description: "Answer detailed questions about products" },
    { icon: Clock, title: "After-Hours Support", description: "Never miss a call, even outside business hours" },
  ],
  outbound: [
    { icon: Phone, title: "Sales Calls", description: "Cold call leads and qualify prospects automatically" },
    { icon: Users, title: "Follow-up Campaigns", description: "Re-engage customers with personalized calls" },
    { icon: BarChart3, title: "Surveys & Feedback", description: "Collect customer feedback at scale" },
    { icon: Calendar, title: "Appointment Reminders", description: "Reduce no-shows with automated reminders" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh opacity-50" />
      
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
            <Layers className="w-4 h-4" />
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            The Fully Featured Platform to
            <br />
            <span className="gradient-text">Automate Phone Calls</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to deploy AI voice agents that handle calls like real humans.
            Built for scale, designed for simplicity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
            {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                feature.color === "primary" 
                  ? "bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white" 
                  : "bg-accent-100 text-accent-600 group-hover:bg-accent-500 group-hover:text-white"
              }`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-100 rounded-full text-sm font-medium text-accent-700 mb-6">
            <Bot className="w-4 h-4" />
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Endless Possibilities
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From inbound customer support to outbound sales campaigns, 
            Speechory handles it all.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inbound */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-neutral-100 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Inbound Calls</h3>
            </div>
            <p className="text-neutral-600 mb-6">
              Automate incoming calls to improve customer experience and operational efficiency.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.inbound.map((useCase) => (
                <div key={useCase.title} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-colors">
                  <useCase.icon className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900 text-sm">{useCase.title}</h4>
                    <p className="text-neutral-500 text-xs mt-1">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Outbound */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-neutral-100 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Outbound Calls</h3>
            </div>
            <p className="text-neutral-600 mb-6">
              Automate outgoing calls to increase efficiency and reach more customers.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.outbound.map((useCase) => (
                <div key={useCase.title} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-accent-50 transition-colors">
                  <useCase.icon className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900 text-sm">{useCase.title}</h4>
                    <p className="text-neutral-500 text-xs mt-1">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




