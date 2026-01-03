"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Headphones } from "lucide-react";

const voiceDemos = [
  {
    id: 1,
    title: "Customer Support",
    description: "Listen to Lisa help a customer track their order",
    duration: "0:45",
    category: "Support",
  },
  {
    id: 2,
    title: "Appointment Booking",
    description: "Hear Alex schedule a dental appointment",
    duration: "1:20",
    category: "Scheduling",
  },
  {
    id: 3,
    title: "Sales Cold Call",
    description: "Watch our AI qualify a sales lead",
    duration: "2:05",
    category: "Sales",
  },
  {
    id: 4,
    title: "Reminder Call",
    description: "Automated appointment reminder in action",
    duration: "0:30",
    category: "Reminders",
  },
];

export default function VoiceDemo() {
  const [playing, setPlaying] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    setPlaying(playing === id ? null : id);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary-50/30 via-transparent to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-sm font-medium text-primary-700 mb-6">
              <Headphones className="w-4 h-4" />
              Hear the Difference
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Voice AI That Sounds
              <br />
              <span className="gradient-text">Remarkably Human</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Our AI voice agents are designed to sound natural and engaging. 
              Listen to real demo calls and experience the quality yourself.
            </p>

            {/* Audio visualizer placeholder */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Premium Voice Quality</h4>
                  <p className="text-sm text-neutral-500">Ultra-realistic AI voices</p>
                </div>
              </div>
              
              {/* Waveform visualization */}
              <div className="flex items-center gap-1 h-12">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-primary-300 rounded-full"
                    animate={{
                      height: playing ? [8, Math.random() * 40 + 8, 8] : 8,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: playing ? Infinity : 0,
                      delay: i * 0.02,
                    }}
                    style={{ height: 8 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Demo Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {voiceDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-white rounded-xl border p-4 cursor-pointer transition-all ${
                  playing === demo.id 
                    ? "border-primary-300 shadow-lg shadow-primary-100" 
                    : "border-neutral-100 hover:border-primary-200 hover:shadow-md"
                }`}
                onClick={() => togglePlay(demo.id)}
              >
                <div className="flex items-center gap-4">
                  {/* Play Button */}
                  <button
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      playing === demo.id
                        ? "bg-primary-500 text-white"
                        : "bg-primary-100 text-primary-600 hover:bg-primary-200"
                    }`}
                  >
                    {playing === demo.id ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" />
                    )}
                  </button>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-neutral-900 truncate">{demo.title}</h4>
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                        {demo.category}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-500 truncate">{demo.description}</p>
                  </div>
                  
                  {/* Duration */}
                  <span className="text-sm text-neutral-400 flex-shrink-0">{demo.duration}</span>
                </div>
                
                {/* Progress bar when playing */}
                {playing === demo.id && (
                  <motion.div 
                    className="mt-3 h-1 bg-neutral-100 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="h-full bg-primary-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 45, ease: "linear" }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}







