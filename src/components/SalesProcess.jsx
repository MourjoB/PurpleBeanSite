// src/components/SalesProcess.jsx
import { motion } from "framer-motion";
import {
  PhoneCall,
  PackageCheck,
  CheckCircle2,
  IndianRupee,
  Truck,
  Handshake,
  Users,
} from "lucide-react";

const steps = [
  { id: 1, Icon: PhoneCall, title: "Inquiry", desc: "Tell us your needs" },
  { id: 2, Icon: PackageCheck, title: "Sample", desc: "Samples dispatched" },
  { id: 3, Icon: CheckCircle2, title: "Finalize", desc: "Specs confirmed" },
  { id: 4, Icon: IndianRupee, title: "Payment", desc: "Secure payment" },
  { id: 5, Icon: Truck, title: "Dispatch", desc: "Production & shipping" },
  { id: 6, Icon: Handshake, title: "Support", desc: "Dedicated aftercare" },
  { id: 7, Icon: Users, title: "Growth", desc: "Referrals & scale" },
];

export default function SalesProcess() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        >
          Our Sales Process
        </motion.h2>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:block">
          <div className="relative flex items-center justify-between">
            {/* connecting line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />

            {steps.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative flex flex-col items-center flex-1 px-2"
                >
                  {/* circle */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg z-10">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* title & desc */}
                  <div className="mt-4 text-center">
                    <p className="font-semibold text-gray-900">{s.title}</p>
                    <p className="text-xs text-gray-500">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4">
          {steps.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{s.title}</p>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-primary-600 text-white font-semibold text-lg shadow hover:bg-primary-700 transition"
          >
            Start Here — Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
