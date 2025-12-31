import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';

const features = [
  'Snel en gericht bellen',
  'Inzicht in gesprekstijd en aantallen',
  'Gespreksanalyse voor training',
  'Duidelijke klantgeschiedenis + notities',
  'Eenvoudig samenwerken',
];

export const Dashboarding: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Purple Light Background */}
      <motion.div
        initial={{ y: '-100%' }}
        whileInView={{ y: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full h-[35vh] bg-brand-purple-light/20 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black uppercase leading-none mb-8"
            >
              Dashboarding
            </motion.h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Icon */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="flex justify-center"
          >
            <div className="bg-brand-green rounded-3xl p-12 relative">
              <div className="bg-black rounded-2xl p-8">
                <div className="flex items-end gap-4 mb-4">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 60 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="w-6 bg-white rounded-t"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 40 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="w-6 bg-brand-pink rounded-t"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 80 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="w-6 bg-white rounded-t"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.9 }}
                    className="w-8 h-8 rounded-full border-4 border-white border-r-brand-pink"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1 }}
                    className="w-8 h-8 rounded-full border-4 border-brand-pink border-r-white"
                  />
                </div>
              </div>
              {/* Monitor Stand */}
              <div className="flex justify-center mt-2">
                <div className="w-16 h-2 bg-black rounded" />
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-black rounded-b" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
