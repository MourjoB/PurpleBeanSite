import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  TrendingUp,
  ArrowUp,
  MessageCircle,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
      (async function () {
        const cal = await getCalApi({"namespace":"30min"});
        cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      })();
    }, []);

    const handleDownloadCatalogue = () => {
    const link = document.createElement('a');
    link.href = '/catalogue.pdf'; 
    link.download = 'Purple-Bean-Agro-Catalogue.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const handleScheduleCall = () => {
    const subject = encodeURIComponent('Schedule a Call - Purple Bean Agro');
    const body = encodeURIComponent(
      'Hello,\n\nI would like to schedule a call to discuss your coffee products and services at your convenience.\n\nBest regards,'
    );
    const mailtoLink = `mailto:purplebeanagro@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

    const handleScheduleCallOne = () => {
    window.open("https://cal.com/purple-bean-agro-industries-pvt-ltd-wnsgkh/30min", "_blank");
  };

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Carefully crafted to deliver rich taste, aroma, and consistency in every cup',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving businesses across 20+ countries worldwide',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 dedicated support team for all your business needs',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Eco-friendly practices for sustainable business solutions',
    },
  ];

  const products = [
    {
      name: 'Flavoured Coffee',
      description: 'Premium flavored coffee blends for cafes and restaurants',
      image: 'https://t3.ftcdn.net/jpg/12/42/96/54/360_F_1242965459_kpunghVpfVLm1sUCS5kXMrTAY5OsKIBd.jpg',
    },
    {
      name: 'Plain Coffee',
      description: 'High-quality instant coffee in various processing methods',
      image: 'https://img.freepik.com/free-photo/top-view-coffee-powder-beans_23-2148254984.jpg',
    },
    {
      name: 'Coffee Premix',
      description: 'Ready-to-use coffee premixes for commercial applications',
      image: 'https://img.freepik.com/free-photo/coconut-palm-sugar-wooden-spoon-isolated-white-background_123827-32696.jpg?semt=ais_hybrid&w=740',
    },
  ];

  const stats = [
    { number: '50+', label: 'Global Clients' },
    { number: '250+', label: 'Products' },
    { number: '20+', label: 'Countries' },
    { number: '50+', label: 'Combined Years of Experience' },
  ];

  const handleLearnMoreClick = () => {
    navigate('/products');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-300 via-primary-400 to-primary-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
            alt="Coffee Products"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Premium Wholesale 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Coffee
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Are you a Cafe Owner, Coffee Wholesaler, Trader, or Restaurant Operator?
            <br/>
            If so, we guarantee in providing premium-grade coffee at best prices.
          </motion.p>

          <br/>
          <br/>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-150 flex items-center space-x-2 mr-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-700 transition duration-150 ml-2"
              >
                Get Contact
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join hundreds of businesses worldwide who trust us for their coffee product needs. Let's discuss how we can help your business grow.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleScheduleCall}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Email
              </motion.button>

              <motion.button
                onClick={handleScheduleCallOne}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100"
              >
                Schedule Call
              </motion.button>
              
              <motion.button
                onClick={handleDownloadCatalogue}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                Download Catalog
              </motion.button>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine decades of expertise with cutting-edge technology to deliver exceptional coffee products that meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of premium coffee products, carefully sourced and processed to meet the highest quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-200" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <motion.button
                    onClick={handleLearnMoreClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition"
              >
                View All Products
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      
      {/* <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses worldwide who trust us for their coffee product needs. Let's discuss how we can help your business grow.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 flex items-center space-x-2"
              >
                <span>Start Partnership</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      Scroll to Top Button
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-purple-600 shadow-lg hover:bg-purple-700 transition duration-200 flex items-center justify-center"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </button>
      )}

      WhatsApp Button
      <a
        href="https://wa.me/919798786431"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition duration-200 flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a> */}



      <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-purple-600 shadow-lg hover:bg-purple-700 transition-all duration-100 flex items-center justify-center ${
            showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          >
            <ArrowUp className="h-6 w-6 text-white" />
        </button>

        <a
          href="https://wa.me/918101287339?text=Hello%20Purple%20Bean%2C%20I%27m%20interested%20in%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
          className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </a>
    </motion.div>
  );
};

export default Home;
