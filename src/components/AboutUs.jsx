import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-center text-gray-900 mb-4"
        >
          About Us
        </motion.h2>
        <p className="text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          At Purple Bean Agro, we blend heritage, quality, and global standards to deliver best-in-class coffee and chicory solutions — from our factory floor to your market.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/factory1.jpg"
              alt="Factory 1"
              className="rounded-xl shadow-md object-cover w-full h-48 sm:h-64"
            />
            <img
              src="/factory2.jpg"
              alt="Factory 2"
              className="rounded-xl shadow-md object-cover w-full h-48 sm:h-64"
            />
            <img
              src="/factory5.jpg"
              alt="Factory 3"
              className="rounded-xl shadow-md object-cover w-full h-48 sm:h-64 col-span-2"
            />
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 relative">
              Why Choose Purple Bean Agro?
              <span className="block w-16 h-1 bg-yellow-400 mt-2 rounded-full"></span>
            </h3>

            <ul className="space-y-5">
              {[
                'State-of-the-art manufacturing facility in India',
                'Specialized in instant coffee, chicory, and custom blends',
                'Bulk exports with full documentation & global compliance',
                'Trusted by importers, wholesalers & private-label brands',
                'Timely delivery & competitive pricing in 20+ countries',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 text-xl">✔</span>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
