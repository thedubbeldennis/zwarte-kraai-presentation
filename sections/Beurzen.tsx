import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Scan, Smartphone } from 'lucide-react';

export const Beurzen: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Pink Background Shape */}
      <motion.div
        initial={{ y: '-100%' }}
        whileInView={{ y: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-full h-[40vh] bg-brand-pink z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black uppercase leading-none mb-6"
            >
              Efficientie
              <br />
              <span className="text-brand-pink">op beurzen</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-brand-pink font-bold mb-4"
            >
              Scan een QR-code en importeer klantgegevens direct in het CRM, ideaal voor beurzen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Dit versnelt follow-ups via mail, sms of telefoon.
            </motion.p>
          </div>

          {/* Right - QR Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            className="flex justify-center"
          >
            <div className="bg-brand-purple-light rounded-3xl p-10 relative">
              <div className="bg-white rounded-2xl p-8">
                {/* QR Code Pattern */}
                <div className="grid grid-cols-5 gap-1 w-32 h-32">
                  {[...Array(25)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 + i * 0.02 }}
                      className={`rounded-sm ${
                        [0, 1, 2, 4, 5, 6, 10, 12, 14, 18, 20, 22, 24].includes(i)
                          ? 'bg-black'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Corner Markers */}
              <div className="absolute top-6 left-6 w-6 h-6 border-l-4 border-t-4 border-black rounded-tl" />
              <div className="absolute top-6 right-6 w-6 h-6 border-r-4 border-t-4 border-black rounded-tr" />
              <div className="absolute bottom-6 left-6 w-6 h-6 border-l-4 border-b-4 border-black rounded-bl" />
              <div className="absolute bottom-6 right-6 w-6 h-6 border-r-4 border-b-4 border-black rounded-br" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
