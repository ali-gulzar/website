"use client";

import { motion } from "framer-motion";
import { 
  PhoneOff, 
  Users, 
  Globe2, 
  TrendingDown,
  Phone,
  Languages,
  Calendar,
  MessageSquare,
  Zap,
  Lock,
  Clock,
  X,
  Check
} from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    text: "Businesses lose customers when they miss calls",
    color: "red"
  },
  {
    icon: Users,
    text: "Staff overwhelmed with repetitive questions",
    color: "orange"
  },
  {
    icon: Globe2,
    text: "Customers expect instant, multilingual responses",
    color: "yellow"
  },
  {
    icon: TrendingDown,
    text: "Missed calls = lost revenue",
    color: "red"
  }
];

const solutions = [
  {
    icon: Phone,
    text: "Answers every call",
    color: "primary"
  },
  {
    icon: Languages,
    text: "Speaks multiple languages",
    color: "accent"
  },
  {
    icon: Calendar,
    text: "Books appointments in real-time",
    color: "primary"
  },
  {
    icon: MessageSquare,
    text: "Handles FAQs",
    color: "accent"
  },
  {
    icon: Zap,
    text: "Works with Google Calendar / Calendly",
    color: "primary"
  },
  {
    icon: Lock,
    text: "No CRM needed",
    color: "accent"
  },
  {
    icon: Clock,
    text: "Simple and fast setup",
    color: "primary"
  }
];

export default function ProblemSolution() {
  return (
    <section className="section-padding bg-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container-custom relative z-10">
        {/* Problems Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Never Miss a <span className="text-red-600">Booking</span> Again
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
            Traditional phone systems are costing you customers every day
          </p>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative group bg-white rounded-2xl p-6 border-2 border-red-100 hover:border-red-300 transition-all cursor-default shadow-sm hover:shadow-xl"
              >
                {/* Animated X icon on hover */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.div>

                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors`}
                  >
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </motion.div>
                  <p className="text-left text-neutral-700 font-medium flex-1">
                    {problem.text}
                  </p>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-red-400 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider with Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5L12 19M12 19L6 13M12 19L18 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-primary-400"
            />
          </motion.div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Meet Your <span className="gradient-text">AI Receptionist</span>
            </h2>
          </motion.div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
            Your Automated Voice Booking Assistant
          </p>

          {/* Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.08,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="relative group bg-white rounded-2xl p-6 border-2 border-primary-100 hover:border-primary-300 transition-all cursor-default shadow-sm hover:shadow-2xl"
              >
                {/* Animated check icon on hover */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>

                <div className="flex flex-col items-center text-center gap-4">
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                      solution.color === 'primary' 
                        ? 'from-primary-500 to-primary-600' 
                        : 'from-accent-500 to-accent-600'
                    } flex items-center justify-center shadow-lg ${
                      solution.color === 'primary'
                        ? 'shadow-primary-500/30 group-hover:shadow-primary-500/50'
                        : 'shadow-accent-500/30 group-hover:shadow-accent-500/50'
                    } transition-shadow`}
                  >
                    <solution.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <p className="text-neutral-700 font-semibold">
                    {solution.text}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl ${
                    solution.color === 'primary'
                      ? 'bg-primary-100'
                      : 'bg-accent-100'
                  } opacity-0 group-hover:opacity-20 transition-opacity`}
                />

                {/* Sparkle effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <motion.a
              href="#demo"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center btn-primary text-lg px-8 py-4"
            >
              Get Started Today
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
