"use client";

import { motion } from "framer-motion";
import { 
  PhoneOff, 
  Users, 
  Globe2, 
  Moon,
  Bot,
  Clock,
  Languages,
  Zap,
  TrendingDown,
  TrendingUp,
  X,
  Check,
  ArrowRight
} from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Every Missed Call is a Lost Customer",
    description: "Competitors win when you don't answer",
  },
  {
    icon: Users,
    title: "Your Team is Drowning",
    description: "Repetitive questions burning out your staff",
  },
  {
    icon: Globe2,
    title: "Language Barriers Cost Sales",
    description: "International customers hanging up frustrated",
  },
  {
    icon: Moon,
    title: "After Hours = Lost Revenue",
    description: "Customers calling at night are gone by morning",
  },
];

const solutions = [
  {
    icon: Bot,
    title: "Your AI Receptionist is Always On",
    description: "Never miss a single opportunity",
  },
  {
    icon: Clock,
    title: "24/7, No Breaks, No Holidays",
    description: "Answers every call, any time",
  },
  {
    icon: Languages,
    title: "Speaks 5+ Languages Fluently",
    description: "Switching seamlessly mid-conversation",
  },
  {
    icon: Zap,
    title: "Books in Under 30 Seconds",
    description: "From hello to confirmed appointment instantly",
  },
];

export default function WhyItMatters() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left (Problem) Background */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-1/2 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 relative"
        >
          {/* Dark overlay pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          {/* Red glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        </motion.div>
        
        {/* Right (Solution) Background */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-1/2 bg-gradient-to-br from-white via-primary-50 to-accent-50 relative"
        >
          {/* Light overlay pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          {/* Colorful glow */}
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-accent-300/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Center Divider */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 z-10">
        <motion.div
          className="h-full w-full bg-gradient-to-b from-red-500 via-yellow-500 to-primary-500"
          animate={{
            boxShadow: [
              '0 0 20px rgba(239, 68, 68, 0.5)',
              '0 0 40px rgba(99, 102, 241, 0.8)',
              '0 0 20px rgba(239, 68, 68, 0.5)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4"
              >
                <TrendingDown className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-200">The Problem</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Losing Customers
                <br />
                <span className="text-red-400">Every Single Day</span>
              </h2>
              <p className="text-neutral-400 text-lg">
                Traditional phone systems are costing you more than you think
              </p>
            </div>

            {/* Problem Cards */}
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    x: 5,
                    boxShadow: "0 10px 40px rgba(239, 68, 68, 0.3)"
                  }}
                  className="group relative bg-neutral-800/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors"
                    >
                      <problem.icon className="w-6 h-6 text-red-400" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-white group-hover:text-red-300 transition-colors">
                          {problem.title}
                        </h3>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                        </motion.div>
                      </div>
                      <p className="text-sm text-neutral-400">
                        {problem.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center lg:text-left mb-6">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 border border-primary-200 rounded-full mb-6"
              >
                <TrendingUp className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">The Solution</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Meet Your AI Receptionist
                <br />
                <span className="gradient-text">Always Working</span>
              </h2>
              <p className="text-neutral-600 text-lg">
                Your automated voice booking assistant that never sleeps
              </p>
            </div>

            {/* Solution Cards */}
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    x: -5,
                    boxShadow: "0 10px 40px rgba(99, 102, 241, 0.3)"
                  }}
                  className="group relative bg-white border border-primary-100 rounded-2xl p-6 hover:border-primary-300 transition-all shadow-sm hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow"
                    >
                      <solution.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                          {solution.title}
                        </h3>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        </motion.div>
                      </div>
                      <p className="text-sm text-neutral-600">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-primary-50 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Mobile View Adjustment - hide split backgrounds on mobile */}
      <style>{`
        @media (max-width: 1024px) {
          .absolute.inset-0.flex > div:first-child {
            width: 100%;
          }
          .absolute.inset-0.flex > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
