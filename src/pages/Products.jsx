// src/pages/ProductPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductBySlug } from '../data.js';

const ProductPage = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="pt-24 max-w-4xl mx-auto px-6 text-center py-24">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <p className="text-gray-600 mb-6">Try the <Link to="/products" className="text-primary-600">products list</Link>.</p>
      </div>
    );
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-2xl shadow" />
            <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
            <p className="text-gray-700 mt-4">{product.description}</p>

            {product.specs && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="bg-gray-50 p-4 rounded-lg border">
                      <div className="text-sm text-gray-500">{k}</div>
                      <div className="text-gray-900 font-medium">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.details && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">More details</h3>
                <div className="prose max-w-none text-gray-700">
                  {product.details}
                </div>
              </div>
            )}
          </div>

          <aside className="bg-white rounded-2xl shadow p-6">
            <div className="text-sm text-gray-500 mb-2">{product.category}</div>
            <div className="text-2xl font-bold text-primary-700 mb-4">{product.price}</div>

            <ul className="space-y-2 mb-6">
              {product.features?.map((f, i) => (
                <li key={i} className="text-gray-700">• {f}</li>
              ))}
            </ul>

            <a href="/catalogue.pdf" className="block w-full text-center bg-primary-600 text-white py-3 rounded-full font-semibold hover:bg-primary-700">
              Download Specs
            </a>

            <Link to="/contact" className="block mt-3 text-center border border-primary-600 text-primary-600 py-2 rounded-full">
              Contact Sales
            </Link>

            <div className="mt-6 text-sm text-gray-500">
              <strong>Use cases:</strong> {product.useCases || 'Domestic & export clients'}
            </div>
          </aside>
        </div>
      </section>
    </motion.main>
  );
};

export default ProductPage;
