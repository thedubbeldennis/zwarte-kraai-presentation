import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Users } from 'lucide-react';

export const B2BValue: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Green Triangle Background */}
      <motion.div
        initial={{ y: '-100%' }}
        whileInView={{ y: '0%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-0 right-0 w-full h-[40vh] bg-brand-green z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Title */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black uppercase leading-none mb-8"
            >
              Verhoog de waarde
              <br />
              van jouw
              <br />
              <span className="text-brand-green">B2B-klanten.</span>
            </motion.h2>
          </div>

          {/* Right - Cards */}
          <div className="space-y-6">
            {/* Chat Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:relative lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0 flex justify-center mb-8"
            >
              <div className="bg-brand-pink p-6 rounded-2xl shadow-xl">
                <MessageSquare className="w-16 h-16 text-white" />
                <div className="absolute -bottom-2 -right-2 bg-black rounded-lg p-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Card 1 - Lifetime Value */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-brand-pink text-brand-purple p-6 rounded-xl shadow-xl"
            >
              <h3 className="font-black text-xl mb-2 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Maximaliseren van de lifetime value
              </h3>
              <p className="text-sm leading-relaxed">
                Wij zorgen ervoor dat jouw B2B-klanten langer klant blijven en meer waarde genereren.
              </p>
            </motion.div>

            {/* Card 2 - New Clients */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white text-brand-purple p-6 rounded-xl shadow-xl"
            >
              <h3 className="font-black text-xl mb-2 flex items-center gap-2">
                <Users className="w-6 h-6 text-brand-green" />
                Aantrekken <span className="text-brand-green">nieuwe zakelijke klanten</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Onze strategieen helpen je om zakelijke klanten op een proactieve manier te bereiken en te converteren.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
