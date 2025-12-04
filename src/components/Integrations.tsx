"use client";

import { motion } from "framer-motion";
import { Puzzle, ArrowRight } from "lucide-react";

const integrations = [
  { name: "HubSpot", category: "CRM", description: "Sync contacts and deals" },
  { name: "Salesforce", category: "CRM", description: "Enterprise CRM integration" },
  { name: "Zoho", category: "CRM", description: "Customer relationship tools" },
  { name: "GoHighLevel", category: "Marketing", description: "All-in-one marketing" },
  { name: "Calendly", category: "Scheduling", description: "Appointment booking" },
  { name: "Cal.com", category: "Scheduling", description: "Open source scheduling" },
  { name: "Google Calendar", category: "Scheduling", description: "Sync appointments" },
  { name: "Slack", category: "Communication", description: "Team notifications" },
  { name: "Zapier", category: "Automation", description: "5000+ app connections" },
  { name: "Make", category: "Automation", description: "Visual automation" },
  { name: "Twilio", category: "Telephony", description: "Phone infrastructure" },
  { name: "Stripe", category: "Payments", description: "Payment processing" },
];

const categories = ["All", "CRM", "Scheduling", "Automation", "Communication"];

export default function Integrations() {
  return (
    <section id="integrations" className="section-padding bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
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
            <Puzzle className="w-4 h-4" />
            300+ Integrations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Connect With Your
            <br />
            <span className="gradient-text">Favorite Tools</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Integrate with popular tools like HubSpot, GoHighLevel, Zoho, and 300+ more 
            using our no-code platform.
          </p>
        </motion.div>

        {/* Integration Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-50 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-600">
                    {integration.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium text-neutral-400 bg-neutral-50 px-2 py-1 rounded">
                  {integration.category}
                </span>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-1">{integration.name}</h3>
              <p className="text-sm text-neutral-500">{integration.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a 
            href="#all-integrations" 
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View all 300+ integrations
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}




