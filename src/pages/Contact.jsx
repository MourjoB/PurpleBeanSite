// src/pages/Contact.jsx  (quick, dependency-free safe fallback)
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUp,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  X,
  Download,
  Calendar,
} from 'lucide-react';

// small accessible toast component
const Toast = ({ type = 'success', message, onClose }) => {
  const bg = type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800';
  return (
    <div role="status" aria-live="polite" className={`mt-4 p-4 rounded-lg border ${bg} shadow`}>
      <div className="flex items-start gap-3">
        {type === 'success' ? <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /> : <X className="h-5 w-5 text-red-600 mt-0.5" />}
        <div className="flex-1 text-sm">{message}</div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 ml-2"><X className="h-4 w-4" /></button>
      </div>
    </div>
  );
};

const initialForm = { name: '', email: '', company: '', subject: '', message: '', website: '' /* honeypot */ };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const formRef = useRef(null);
  const successRef = useRef(null);

  const contactInfo = [
    { icon: Phone, title: 'Phone', lines: ['+91-7718781594', '+91-81649460527'], note: 'Mon–Sun • 10:00–22:00 IST' },
    { icon: Mail, title: 'Email', lines: ['exports@pbai.in', 'purplebeanagro@gmail.com'], note: 'We respond within 24 hours' },
    { icon: MapPin, title: 'Head Office', lines: ['PBAI Pvt. Ltd, Factory No. 12/4', 'Near Dapodi Metro Station, Pimpri-Chinchwad', 'Pune, Maharashtra 411012'], note: 'Visits by appointment' },
    { icon: Clock, title: 'Business Hours', lines: ['Every day • 10:00am - 10:00pm (IST)'], note: '' },
  ];

  const offices = [
    { city: 'Pune', address: ['PBAI Pvt. Ltd, Factory No. 12/4', 'Near Dapodi Metro Station', 'Pune, Maharashtra 411012'], phone: '+91-7718781594', email: 'purplebeanagro@gmail.com' },
  ];

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your full name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Please select a subject';
    if (!form.message.trim()) e.message = 'Please write a message';
    if (form.website && form.website.trim() !== '') e.website = 'Spam detected';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    if (formRef.current) formRef.current.reset();
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`Contact Form: ${form.subject || 'General Inquiry'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'N/A'}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:purplebeanagro@gmail.com?subject=${subject}&body=${body}`;
  };

  // Safe submit: only uses mailto fallback so no external dependency required
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      // instant fallback - open mail client with prefilled body
      triggerMailto();
      setToast({ type: 'success', message: 'Mail client opened. Please send to complete. If it did not open, copy the message and email us.' });
      resetForm();
      setTimeout(() => setToast(null), 6000);
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', message: 'Could not open mail client — please email purplebeanagro@gmail.com directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleDownloadCatalogue = () => {
    const a = document.createElement('a');
    a.href = '/catalogue.pdf';
    a.download = 'Purple-Bean-Agro-Catalogue.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Purple Bean, I'm interested in your products. Please share pricing and packing details.`);
    window.open(`https://wa.me/917718781594?text=${text}`, '_blank');
  };

  const scheduleCall = () => window.open('https://cal.com/purple-bean-agro-industries-pvt-ltd-wnsgkh/30min', '_blank');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-16">
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Contact & Support</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90">Whether domestic or international — product details, export docs, samples or private-label solutions.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button onClick={scheduleCall} className="inline-flex items-center gap-3 bg-white text-primary-700 px-6 py-3 rounded-full font-semibold shadow hover:opacity-95">
              <Calendar className="h-5 w-5" /> Schedule a Call
            </button>

            <button onClick={handleDownloadCatalogue} className="inline-flex items-center gap-3 border border-white/40 text-white px-6 py-3 rounded-full">
              <Download className="h-5 w-5" /> Download Catalogue
            </button>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-3">Send us a message</h2>
          <p className="text-sm text-gray-600 mb-6">We’ll get back to you within 24 hours.</p>

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Full name *</span>
                <input name="name" value={form.name} onChange={handleChange} className={`mt-1 block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 ${errors.name ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.name && <div className="text-xs text-red-600 mt-1">{errors.name}</div>}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email *</span>
                <input name="email" type="email" value={form.email} onChange={handleChange} className={`mt-1 block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.email && <div className="text-xs text-red-600 mt-1">{errors.email}</div>}
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Company</span>
              <input name="company" value={form.company} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500" />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Subject *</span>
              <select name="subject" value={form.subject} onChange={handleChange} className={`mt-1 block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 ${errors.subject ? 'border-red-400' : 'border-gray-200'}`}>
                <option value="">Select a subject</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="bulk-order">Bulk Order</option>
                <option value="partnership">Partnership</option>
                <option value="custom-formulation">Custom Formulation</option>
                <option value="general">General Question</option>
              </select>
              {errors.subject && <div className="text-xs text-red-600 mt-1">{errors.subject}</div>}
            </label>

            <div style={{ display: 'none' }}>
              <label>Website (leave blank)<input name="website" value={form.website} onChange={handleChange} /></label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Message *</span>
              <textarea name="message" rows="6" value={form.message} onChange={handleChange} className={`mt-1 block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 ${errors.message ? 'border-red-400' : 'border-gray-200'}`} />
              {errors.message && <div className="text-xs text-red-600 mt-1">{errors.message}</div>}
            </label>

            <div className="flex gap-3 items-center">
              <button type="submit" disabled={isSubmitting} className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'}`}>
                {isSubmitting ? <div className="h-4 w-4 border-b-2 border-white rounded-full animate-spin" /> : <Send className="h-4 w-4" />}
                <span>{isSubmitting ? 'Processing...' : 'Send Message'}</span>
              </button>

              <button type="button" onClick={handleDownloadCatalogue} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50">
                <Download className="h-4 w-4" /> Download Catalogue
              </button>

              <button type="button" onClick={handleWhatsApp} className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </button>
            </div>
          </form>

          <div ref={successRef} tabIndex={-1}>
            {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
          </div>
        </div>

        {/* Right column cards & map (unchanged) */}
        <aside className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-5 shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-lg"><Icon className="h-6 w-6 text-primary-600" /></div>
                    <div>
                      <h4 className="font-semibold">{c.title}</h4>
                      <div className="mt-1 text-sm text-gray-700">{c.lines.map((l,i)=><div key={i}>{l}</div>)}</div>
                      {c.note && <div className="mt-2 text-xs text-gray-500">{c.note}</div>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <h4 className="font-semibold mb-3">Our Offices</h4>
            <div className="space-y-3">
              {offices.map((o)=>(
                <div key={o.city} className="border-t pt-3 first:pt-0">
                  <div className="font-semibold">{o.city}</div>
                  <div className="text-sm text-gray-700">{o.address.join(' ')}</div>
                  <div className="mt-2 text-sm text-gray-600">Phone: <a href={`tel:${o.phone}`} className="text-primary-600 hover:underline">{o.phone}</a> • Email: <a href={`mailto:${o.email}`} className="text-primary-600 hover:underline">{o.email}</a></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow">
  <div className="h-96"> {/* Adjust height: h-56, h-72, h-96 depending on how tall you want */}
    <iframe
      title="Purple Bean Agro Office"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.798932513027!2d73.83025367443216!3d18.583101467262672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f43ed1d8f1%3A0x211f6c1df120735!2sPurple%20Bean%20Agro%20Industries%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1757524886259!5m2!1sen!2sin"
      className="w-full h-full border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>


          <div className="bg-white rounded-2xl p-4 shadow">
            <h4 className="font-semibold mb-2">Book a 30-min Call</h4>
            <p className="text-sm text-gray-600 mb-3">Pick a time to discuss export listings, samples, or private label opportunities.</p>
            <div><button onClick={scheduleCall} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600 text-white"><Calendar className="h-4 w-4" /> Schedule a Call</button></div>
          </div>
        </aside>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-2">Need Export Documentation or Samples?</h3>
          <p className="text-sm text-white/90 mb-4">We provide COA, phytosanitary certificates and full export documentation on request.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={handleDownloadCatalogue} className="bg-white text-primary-700 px-6 py-3 rounded-full font-semibold">Download Catalogue</button>
            <button onClick={scheduleCall} className="border border-white/30 px-6 py-3 rounded-full">Schedule a Call</button>
          </div>
        </div>
      </section>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary-700 shadow-lg hover:bg-primary-800 transition-all duration-100 flex items-center justify-center ${showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Scroll to top"><ArrowUp className="h-6 w-6 text-white" /></button>

      <a href="https://wa.me/917718781594?text=Hello%20Purple%20Bean%2C%20I%27m%20interested%20in%20your%20products." target="_blank" rel="noreferrer" className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center" aria-label="Chat on WhatsApp"><MessageCircle className="h-6 w-6 text-white" /></a>

      {toast && <div className="fixed top-6 right-6 z-50"><Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} /></div>}
    </motion.div>
  );
}
