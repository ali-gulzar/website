"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Waves } from "lucide-react";

export default function InAction() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            See It <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From call to booking in seconds. Watch how Saila transforms conversations into confirmed appointments.
          </p>
        </motion.div>

        {/* Visual Flow */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
            {/* Step 1: Phone Call */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100 text-center relative z-10">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mb-4 shadow-lg shadow-primary-500/30"
                >
                  <Phone className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Incoming Call</h3>
                <p className="text-sm text-neutral-600">
                  Customer calls your business number
                </p>
                {/* Decorative circle */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full blur-2xl opacity-50" />
              </div>
            </motion.div>

            {/* Arrow/Waves - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden md:flex flex-col items-center justify-center relative"
            >
              {/* Animated waves */}
              <div className="relative w-full h-24">
                {[0, 1, 2, 3, 4].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute left-0 right-0 flex items-center justify-center"
                    style={{ top: '50%' }}
                    animate={{
                      x: ['-100%', '100%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "linear"
                    }}
                  >
                    <Waves className="w-8 h-8 text-primary-400" />
                  </motion.div>
                ))}
              </div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center mt-2"
              >
                <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
                  AI Processing
                </span>
              </motion.div>
            </motion.div>

            {/* Step 2: AI Processing - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:hidden flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center"
                >
                  <Waves className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-primary-400"
                />
              </div>
            </motion.div>

            {/* Arrow - Mobile */}
            <div className="md:hidden flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                  <path d="M12 0L12 35M12 35L6 29M12 35L18 29" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>
            </div>

            {/* Step 3: Calendar Booking */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100 text-center relative z-10">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 mb-4 shadow-lg shadow-accent-500/30"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Calendar className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Booked!</h3>
                <p className="text-sm text-neutral-600">
                  Appointment automatically scheduled
                </p>
                {/* Decorative circle */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-100 rounded-full blur-2xl opacity-50" />
              </div>
            </motion.div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl -z-10">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100 rounded-full blur-3xl"
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                &lt;3s
              </motion.span>
            </div>
            <p className="text-sm text-neutral-600">Average response time</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                24/7
              </motion.span>
            </div>
            <p className="text-sm text-neutral-600">Always available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                98%
              </motion.span>
            </div>
            <p className="text-sm text-neutral-600">Booking success rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
