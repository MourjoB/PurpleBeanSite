// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUp,
  MessageCircle,
  Award,
  Users,
  Globe,
  Leaf,
  Heart,
  Shield,
  Zap,
  Calendar,
  MapPin,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl md:text-4xl font-extrabold text-primary-700">{value}</div>
    <div className="text-sm text-gray-600 mt-1">{label}</div>
  </div>
);

const ValueCard = ({ Icon, title, description, accent }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white rounded-2xl shadow-lg p-6 text-center"
  >
    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${accent}`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function About() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Quick stats
  const stats = [
    { value: '5+ yrs', label: 'B2B experience' },
    { value: '30+', label: 'International clients' },
    { value: '10,000+ MT', label: 'Handled annually' },
    { value: 'ISO / FSSAI', label: 'Certified operations' },
  ];

  // Values
  const values = [
    {
      Icon: Leaf,
      title: 'Responsible Sourcing',
      description: 'Direct relationships with Indian growers — traceable lots and farmer support.',
      accent: 'bg-primary-600',
    },
    {
      Icon: Shield,
      title: 'Food Safety & Quality',
      description: 'In-house QC lab, batch testing and export-grade traceability to meet global standards.',
      accent: 'bg-indigo-600',
    },
    {
      Icon: Heart,
      title: 'Long-term Partnerships',
      description: 'Tailored private-label solutions and responsive account management.',
      accent: 'bg-rose-600',
    },
    {
      Icon: Zap,
      title: 'Continuous Innovation',
      description: 'New roast profiles, instant coffee technologies and customized premixes.',
      accent: 'bg-yellow-600',
    },
  ];

  // Journey (only images)
  const journeyImages = [
    '/factory1.jpg',
    '/factory2.jpg',
    '/factory3.jpg',
    '/factory4.jpg',
    '/factory5.jpg',
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-16 pb-24">
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Purple Bean Agro — Indian origin, global standards
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-2xl">
              Founded in Pune, we specialize in Green & Roasted Coffee, Instant Coffee powders, Chicory and Tea — supplying consistent, export-ready product lines and private-label solutions to partners worldwide.
            </p>

            <div className="mt-8 flex gap-3 flex-col sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-primary-800 font-semibold shadow hover:opacity-95"
              >
                <MessageCircle className="h-5 w-5" /> Contact Sales
              </Link>

              <button
                onClick={() =>
                  window.open(
                    'https://cal.com/purple-bean-agro-industries-pvt-ltd-wnsgkh/30min',
                    '_blank'
                  )
                }
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10"
              >
                <Calendar className="h-5 w-5" /> Schedule a Call
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
              {stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/factory1.jpg"
              alt="Purple Bean Agro facility"
              className="w-full h-full object-cover max-h-[520px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Credibility row */}
      <section className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-5 shadow flex items-start gap-4">
          <Award className="h-8 w-8 text-primary-600" />
          <div>
            <div className="font-semibold">Export Ready</div>
            <div className="text-sm text-gray-600">COA, Phytosanitary, Invoice, Packing List</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow flex items-start gap-4">
          <Users className="h-8 w-8 text-indigo-600" />
          <div>
            <div className="font-semibold">Farmer Partnerships</div>
            <div className="text-sm text-gray-600">Direct sourcing, traceable supply chain</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow flex items-start gap-4">
          <Globe className="h-8 w-8 text-rose-600" />
          <div>
            <div className="font-semibold">Global Clients</div>
            <div className="text-sm text-gray-600">Asia, Middle East, Europe & Africa</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow flex items-start gap-4">
          <Shield className="h-8 w-8 text-yellow-600" />
          <div>
            <div className="font-semibold">Certified Quality</div>
            <div className="text-sm text-gray-600">FSSAI • ISO 22000</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold">Our Values — what sets us apart</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Traceability, food safety, and lasting partnerships — the principles that define how we work with clients worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Journey – only images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Our Journey</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              A visual glimpse of our growth — from early days to becoming a trusted export partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeyImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={src} alt={`Journey ${i}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Our HQ — Pune, India</h3>
            <p className="mt-4 text-white/90">Processing, QC and export documentation center. Visit by appointment.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/90 mt-1" />
                PBAI Pvt. Ltd, Factory No. 12/4, Near Dapodi Metro Station, Pune, Maharashtra 411012
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-primary-800 font-semibold shadow">
                <MessageCircle className="h-4 w-4" /> Contact Us
              </Link>
              <button onClick={() => window.open('https://cal.com/purple-bean-agro-industries-pvt-ltd-wnsgkh/30min', '_blank')} className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10">
                <Calendar className="h-4 w-4" /> Schedule Export Call
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="h-72 md:h-96">
              <iframe
                title="Purple Bean Agro - Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.798932513027!2d73.83025367443216!3d18.583101467262672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f43ed1d8f1%3A0x211f6c1df120735!2sPurple%20Bean%20Agro%20Industries%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1757524886259!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h3 initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-3xl font-bold mb-4">
            Partner with Purple Bean Agro
          </motion.h3>
          <motion.p initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-gray-600 max-w-3xl mx-auto mb-6">
            Whether you are a distributor, importer or retailer — we deliver export-grade coffee & chicory solutions tailored to your needs.
          </motion.p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold shadow">
              Get In Touch
            </Link>
            <button onClick={() => window.open('https://cal.com/purple-bean-agro-industries-pvt-ltd-wnsgkh/30min', '_blank')} className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary-200 text-primary-700">
              Book a 30-min Call
            </button>
          </div>
        </div>
      </section>

      {/* Scroll top & WhatsApp */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary-700 shadow-lg hover:bg-primary-800 transition-all duration-100 flex items-center justify-center ${showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </button>

      <a
        href="https://wa.me/917718781594?text=Hello%20Purple%20Bean%2C%20I%27m%20interested%20in%20your%20products."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </motion.main>
  );
}
