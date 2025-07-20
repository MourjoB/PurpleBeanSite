import { motion } from 'framer-motion';
import { useEffect } from 'react';

const CallToAction = () => {
  const handleScheduleCall = () => {
    const subject = encodeURIComponent('Schedule a Call - Purple Bean Agro');
    const body = encodeURIComponent(
      'Hello,\n\nI would like to schedule a call to discuss your coffee products and services at your convenience.\n\nBest regards,'
    );
    const mailtoLink = `mailto:purplebeanagro@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleScheduleCallOne = () => {
    window.open(
      'https://cal.com/purple-bean-agro-industries-pvt-ltd-wnsgkh/30min',
      '_blank'
    );
  };

  const handleDownloadCatalogue = () => {
    const link = document.createElement('a');
    link.href = '/catalogue.pdf';
    link.download = 'Purple-Bean-Agro-Catalogue.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-center"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="cta-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Partner With Us?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Trusted by buyers worldwide for our quality, reliability, and service.
            Let’s discuss how Purple Bean can power your supply chain.
          </p>

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
  );
};

export default CallToAction;
