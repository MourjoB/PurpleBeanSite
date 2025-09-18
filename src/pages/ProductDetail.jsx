// src/pages/ProductDetail.jsx
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import { getProductBySlug } from '../data.js';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="pt-24 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
          <p className="text-gray-600 mb-6">We couldn't find that product. Try browsing other product pages.</p>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-full"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </button>
        </div>
      </div>
    );
  }

  // Helpers to normalise and render potentially mixed types
  const renderTypes = (types) => {
    if (!types) return null;

    // Object with nested details OR array
    if (Array.isArray(types)) {
      return (
        <ul className="list-disc list-inside text-gray-700">
          {types.map((t) => <li key={t}>{t}</li>)}
        </ul>
      );
    }

    // Object -> show each key & details
    return Object.entries(types).map(([typeName, details]) => (
      <div key={typeName} className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-1">{typeName}</h4>

        {Array.isArray(details) ? (
          <ul className="list-disc list-inside text-gray-700">
            {details.map((d) => <li key={d}>{d}</li>)}
          </ul>
        ) : (
          <>
            {details.forms && <div className="text-sm text-gray-700 mb-1"><strong>Forms:</strong> {details.forms.join(', ')}</div>}
            {details.grades && <div className="text-sm text-gray-700"><strong>Grades:</strong> {details.grades.join(', ')}</div>}
            {/* If details has nested object of forms */}
            {details.forms && Array.isArray(details.forms) && details.forms.length === 0 && <div className="text-sm text-gray-700">—</div>}
          </>
        )}
      </div>
    ));
  };

  // Variants can be an array (instant coffee) or an object (instant tea with categories)
  const renderVariants = (variants) => {
    if (!variants) return null;

    if (Array.isArray(variants)) {
      return (
        <ul className="list-disc list-inside text-gray-700">
          {variants.map((v) => <li key={v}>{v}</li>)}
        </ul>
      );
    }

    if (typeof variants === 'object') {
      return Object.entries(variants).map(([k, v]) => (
        <div key={k} className="mb-3">
          <h4 className="font-semibold text-gray-800">{k}</h4>
          {/* v might be { forms: [...] } or array */}
          {v && v.forms && Array.isArray(v.forms) ? (
            <ul className="list-disc list-inside text-gray-700">
              {v.forms.map((f) => <li key={f}>{f}</li>)}
            </ul>
          ) : Array.isArray(v) ? (
            <ul className="list-disc list-inside text-gray-700">
              {v.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : (
            <div className="text-gray-700">—</div>
          )}
        </div>
      ));
    }

    return null;
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back / breadcrumb */}
        <div className="mb-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary-600 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* hero image */}
            <div className="h-72 overflow-hidden bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-primary-600 font-medium">{product.category}</div>
                <div className="text-sm text-gray-600">
                  {product.certifications?.length ? product.certifications.join(' • ') : null}
                </div>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold mb-3">{product.name}</h1>

              <p className="text-gray-700 mb-6">{product.description}</p>

              {product.detailedDescription && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-gray-700">{product.detailedDescription}</p>
                </div>
              )}

              {/* Classifications / Types */}
              {product.types && (
                <section className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Classifications</h3>
                  <div className="text-gray-700">
                    {renderTypes(product.types)}
                  </div>
                </section>
              )}

              {/* Variants */}
              {product.variants && (
                <section className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Variants</h3>
                  <div className="text-gray-700">
                    {renderVariants(product.variants)}
                  </div>
                </section>
              )}

              {/* Blends */}
              {product.blends && (
                <section className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Blends & Formulations</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {product.blends.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </section>
              )}

              {/* Features */}
              {product.features && (
                <section className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <div className="text-gray-700">{f}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Specifications */}
              {product.specs && (
                <section className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                    {Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between py-2 border-b last:border-b-0">
                        <div className="text-sm text-gray-600">{k}</div>
                        <div className="text-sm text-gray-800">{v}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-gray-600 text-sm mb-3">Price</div>
              <div className="text-2xl font-bold text-primary-700 mb-4">{product.price}</div>

              <div className="space-y-3 mb-4 text-sm text-gray-700">
                <div><strong>MOQ:</strong> {product.moq || 'Contact us'}</div>
                <div><strong>Packing:</strong> {(product.packing || []).join(', ') || 'Custom'}</div>
              </div>

              <div className="space-y-3">
                <a href="/catalogue.pdf" className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 border border-primary-600 text-primary-600 rounded-full hover:bg-primary-50">
                  <Download className="h-4 w-4" /> Download Specs
                </a>

                <a href={`mailto:purplebeanagro@gmail.com?subject=${encodeURIComponent('Quote request: ' + product.name)}`} className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-primary-600 text-white rounded-full">
                  Request Quote
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-sm">
              <div className="font-semibold mb-2">Certifications</div>
              <div className="flex flex-wrap gap-2">
                {(product.certifications || []).map((c) => (
                  <span key={c} className="px-3 py-1 bg-gray-100 rounded-full text-xs">{c}</span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-sm">
              <div className="font-semibold mb-2">Export Docs</div>
              <p className="text-gray-600 mb-3">COA, Phytosanitary, Export documentation available on request.</p>
              <a href="/catalogue.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-600 text-primary-600 hover:bg-primary-50">
                Download brochure
              </a>
            </div>
          </aside>
        </div>
      </div>
    </motion.main>
  );
}
