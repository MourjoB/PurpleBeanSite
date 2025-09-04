// src/components/SalesProcess.jsx
import { motion } from "framer-motion";
import {
  PhoneCall,
  PackageCheck,
  CheckCircle2,
  IndianRupee,
  Truck,
  Handshake,
  Users
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: PhoneCall,
    title: "Product Inquiry",
    description: "Tell us your needs — domestic or export."
  },
  {
    id: 2,
    icon: PackageCheck,
    title: "Sample Dispatch",
    description: "Try our blends before placing an order."
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: "Feedback & Finalization",
    description: "Finalize blend, quantity, and packaging."
  },
  {
    id: 4,
    icon: IndianRupee,
    title: "Payment & Confirmation",
    description: "Place your confirmed order with payment."
  },
  {
    id: 5,
    icon: Truck,
    title: "Production & Dispatch",
    description: "We manufacture & deliver on time."
  },
  {
    id: 6,
    icon: Handshake,
    title: "Ongoing Support",
    description: "Dedicated team for long-term partners."
  },
  {
    id: 7,
    icon: Users,
    title: "Generating Referrals",
    description: "Grow with us through satisfied clients."
  }
];

export default function SalesProcess() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Our Sales Process
        </motion.h2>

        <div className="relative">
          {/* central timeline line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-300 to-primary-600"></div>

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* card */}
                  <div
                    className={`w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white shadow">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-bold text-primary-700">
                        Step {step.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {/* connector dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary-600"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow hover:bg-primary-700 transition"
          >
            Start Here – Contact Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}
