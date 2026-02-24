"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Play, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleDemoCall = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const features = [
    "5+ Languages supported",
    "Enterprise-grade security",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with dot grid pattern */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(77, 216, 130, 0.15) 2px, transparent 2px)',
          backgroundSize: '24px 24px'
        }} 
      />
      {/* Gradient overlay to fade dots near content */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-100/40 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-accent-100/30 via-transparent to-transparent" />
      
      {/* Animated shapes - simple version */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-sm font-medium text-primary-700 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Powered by Advanced AI Technology
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Your <span className="gradient-text">24/7 Multilingual</span>
              <br />
              AI Receptionist
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Saila is an <strong>all-in-one platform</strong> that answer calls, book appointments, 
              and handle inquiries automatically. Works with <strong>Google Calendar, Calendly</strong>, 
              and simple scheduling tools — in <strong>5+ languages</strong> with <strong>full compliance</strong>.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-neutral-600"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://platform.speechory.com/login"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                target="_blank"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="#watch"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Demo Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -10, 0]
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.3 },
              x: { duration: 0.6, delay: 0.3 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }
            }}
            className="relative"
          >
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-primary-500/10 border border-white/20 p-8 overflow-hidden" style={{ willChange: 'transform' }}>
              {/* Card Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mb-4 shadow-lg shadow-primary-500/30">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Try a Free Demo Call
                </h3>
                <p className="text-neutral-500 text-sm">
                  Experience our AI agent calling you in seconds
                </p>
              </div>

              {/* Form */}
              {!submitted ? (
                <form onSubmit={handleDemoCall} className="space-y-4">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !phoneNumber}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Initiating Call...
                      </span>
                    ) : (
                      <>
                        <Phone className="w-5 h-5 mr-2" />
                        Get a Demo Call Now
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4"
                  >
                    <Phone className="w-8 h-8 text-accent-600" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    Ring, ring! 🔔
                  </h4>
                  <p className="text-neutral-500">
                    Our AI agent will call you shortly.
                  </p>
                </motion.div>
              )}

              {/* Visual Elements */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-500 animate-pulse" />
                  <span className="text-sm text-neutral-500">AI Assistant online</span>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 top-8 bg-white/90 backdrop-blur-md rounded-xl shadow-lg shadow-accent-500/10 border border-white/30 p-3 hidden lg:flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-accent-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-900">99.9% Uptime</p>
                <p className="text-xs text-neutral-500">Enterprise grade</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 bottom-8 bg-white/90 backdrop-blur-md rounded-xl shadow-lg shadow-primary-500/10 border border-white/30 p-3 hidden lg:flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-900">50+ Concurrent</p>
                <p className="text-xs text-neutral-500">Calls supported</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}




