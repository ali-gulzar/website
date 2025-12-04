"use client";

import { motion } from "framer-motion";
import { Globe, Volume2, Mic2 } from "lucide-react";

const languages = [
  { name: "English", flag: "🇺🇸", accents: ["American", "British", "Australian"] },
  { name: "Spanish", flag: "🇪🇸", accents: ["Spain", "Mexico", "Argentina"] },
  { name: "French", flag: "🇫🇷", accents: ["France", "Canada", "Belgium"] },
  { name: "German", flag: "🇩🇪", accents: ["Germany", "Austria", "Swiss"] },
  { name: "Portuguese", flag: "🇧🇷", accents: ["Brazil", "Portugal"] },
  { name: "Italian", flag: "🇮🇹", accents: ["Italy", "Switzerland"] },
  { name: "Japanese", flag: "🇯🇵", accents: ["Standard", "Kansai"] },
  { name: "Korean", flag: "🇰🇷", accents: ["Seoul", "Busan"] },
  { name: "Chinese", flag: "🇨🇳", accents: ["Mandarin", "Cantonese"] },
  { name: "Arabic", flag: "🇸🇦", accents: ["Modern Standard", "Gulf"] },
  { name: "Hindi", flag: "🇮🇳", accents: ["Standard", "Regional"] },
  { name: "Dutch", flag: "🇳🇱", accents: ["Netherlands", "Belgium"] },
];

export default function Languages() {
  return (
    <section id="languages" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-100 rounded-full text-sm font-medium text-accent-700 mb-6">
              <Globe className="w-4 h-4" />
              Global Reach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              100+ Languages
              <br />
              <span className="gradient-text">Hundreds of Voices</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              ValetTalk supports over 100 languages and diverse accents to address a global audience. 
              Each language comes with hundreds of natural-sounding voice options.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Volume2 className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Natural Voices</h4>
                  <p className="text-neutral-600 text-sm">AI-powered voices that sound indistinguishable from humans</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <Mic2 className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Voice Cloning</h4>
                  <p className="text-neutral-600 text-sm">Clone your own voice or create custom brand voices</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Multiple Accents</h4>
                  <p className="text-neutral-600 text-sm">Choose from regional accents to match your target audience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Language Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-neutral-50 hover:bg-white border border-neutral-100 hover:border-primary-100 rounded-xl p-4 text-center transition-all cursor-pointer hover:shadow-lg"
                >
                  <span className="text-3xl mb-2 block">{language.flag}</span>
                  <h4 className="font-semibold text-neutral-900 text-sm mb-1">{language.name}</h4>
                  <p className="text-xs text-neutral-500">{language.accents.length} accents</p>
                </motion.div>
              ))}
            </div>

            {/* "And more" badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-primary-500/30"
            >
              + 90 more languages
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




