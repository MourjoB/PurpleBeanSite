// src/pages/ProductsLanding.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductSummaries } from '../data.js'; // uses the helper in src/data.js

const ProductsLanding = ({ searchTerm = '' }) => {
  const all = getProductSummaries();
  const products = all.filter((p) => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q))
    );
  });

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-24 pb-16">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Product Lines</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Supplying domestic markets and international buyers with premium coffee, chicory and tea. Click a product line to view specs, packing and supply options.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              <div className="h-52 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm mb-3">
                  {p.category || 'Product'}
                </span>

                <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{p.shortDescription}</p>

                <div className="flex items-center justify-between">
                  <Link to={`/products/${p.slug}`} className="text-primary-600 font-semibold hover:underline">
                    View product page →
                  </Link>
                  <span className="text-gray-900 font-bold">{p.price}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.main>
  );
};

export default ProductsLanding;
