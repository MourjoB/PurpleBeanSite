// src/pages/Products.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getProductSummaries } from '../data.js';

export default function ProductsLanding() {
  const products = getProductSummaries();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-16 pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Products</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Export-grade and domestic coffee, chicory and instant tea — curated for buyers, packers and private-label partners.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, idx) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <Link to={`/products/${p.slug}`} className="block">
                  <div className="h-56 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-primary-600 font-medium">{p.category}</div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{p.shortDescription}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-purple-500">{p.price}</span>
                      <div className="text-primary-600 font-semibold flex items-center gap-2">
                        <span>View</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
