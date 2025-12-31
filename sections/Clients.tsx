import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'FLOER',
  'Royal De Vries',
  'BMTEC',
  'Repos',
  'No Boring Suitcases',
  'Chocolade Bezorgd',
  'Horecabier.nl',
  'De Vries Trappen',
  'Marlan',
  'Wovar',
  'Kunstgras-online.nl',
  'Scholma',
  'Fotocadeau.nl',
  'JC-Electronics',
];

export const Clients: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Purple Light Diagonal */}
      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-[70vw] h-full bg-brand-purple-light/20 -skew-x-12 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black uppercase leading-none mb-12 text-right"
        >
          Wij werken
          <br />
          <span className="text-brand-purple-light">met trots voor</span>
        </motion.h2>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-brand-purple-light/30 rounded-2xl p-8"
        >
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-lg p-3 flex items-center justify-center h-16 shadow-lg cursor-pointer"
              >
                <span className="text-brand-purple font-black text-xs text-center leading-tight">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
