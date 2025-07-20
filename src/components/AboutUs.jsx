import { motion } from 'framer-motion';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: '50+', label: 'Global Clients' },
    { number: '250+', label: 'Products' },
    { number: '20+', label: 'Countries' },
    { number: '50+', label: 'Combined Years of Experience' },
  ];

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Carefully crafted to deliver rich taste, aroma, and consistency in every cup.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Trusted by businesses in 20+ countries with seamless export support.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our team is available to assist at every step, from sampling to shipping.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Eco-conscious practices for long-term global partnerships.',
    },
  ];

  return (
    <>
      {/* Stats Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="company-stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="company-stats-heading" className="sr-only">Company Stats</h2>
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
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" aria-labelledby="why-choose-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="why-choose-us-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Backed by decades of expertise, we deliver reliable coffee and chicory solutions tailored for your growing business.
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
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition"
              >
                <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <feature.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
