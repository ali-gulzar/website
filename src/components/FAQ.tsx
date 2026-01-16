"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does Speechory work as an AI phone call platform?",
    answer: "Speechory automates customer interactions with customizable AI voice agents that can scale. It manages outbound (proactive outreach) and inbound (responsive) calls for tasks like lead qualification, customer support, and appointment scheduling. With no-code tools and flexible deployment options, Speechory enhances engagement and streamlines communication using the latest AI technology.",
  },
  {
    question: "Can I use Speechory with my existing phone system?",
    answer: "Yes, Speechory can integrate with most existing phone systems through SIP trunking, ensuring a smooth transition while maintaining your current functionality. We also offer dedicated phone numbers from over 150 countries if you need new numbers.",
  },
  {
    question: "Do I need technical expertise to create AI agents?",
    answer: "No, you don't need any technical expertise. We provide an intuitive no-code builder with templates to help you get started. Our AI agents are designed to be flexible with various types of prompts, offering natural conversation experiences right out of the box.",
  },
  {
    question: "How do I train the AI with my company information?",
    answer: "You can upload any document containing your company information to train the AI. This includes your website content, internal process documentation (PDF, Word, etc.), FAQs, and product information. The AI learns from these materials to provide accurate, contextual responses.",
  },
  {
    question: "What languages and voices are available?",
    answer: "Speechory supports over 100 languages with hundreds of natural-sounding voice options for each. You can choose from different accents, genders, and speaking styles. We also offer voice cloning technology to create custom brand voices.",
  },
  {
    question: "How do you handle security and compliance?",
    answer: "We take security seriously with built-in GDPR and TCPA compliance tools, encryption in transit and at rest, role-based access controls, audit logs, and configurable data retention policies. We're ISO certified with SOC 2 compliance underway.",
  },
  {
    question: "Can calls be transferred to human agents?",
    answer: "Absolutely. Speechory seamlessly transfers calls to human agents when the situation requires it or when customers request to speak with a person. You can configure custom transfer rules based on keywords, sentiment, or specific scenarios.",
  },
  {
    question: "What integrations are available?",
    answer: "We offer 300+ integrations with popular tools including HubSpot, Salesforce, Zoho, GoHighLevel, Calendly, Cal.com, Google Calendar, Slack, Zapier, Make, and many more. Our no-code automation platform makes it easy to connect your AI agents to your existing workflow.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-sm font-medium text-primary-700 mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Frequently Asked
              <br />
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Everything you need to know about Speechory. Can't find what you're looking for?
            </p>
            <a href="#contact" className="btn-primary">
              Contact Support
            </a>
          </motion.div>

          {/* Right Content - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-neutral-100 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}




