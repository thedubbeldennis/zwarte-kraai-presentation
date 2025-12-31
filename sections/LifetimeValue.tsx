import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Star, Package, RefreshCcw } from 'lucide-react';

const steps = [
  { num: 1, icon: MessageSquare, label: 'Klant plaatst\n1e bestelling', color: 'bg-brand-pink' },
  { num: 2, icon: Phone, label: 'Inventariseren\n+ klaarzetten', color: 'bg-brand-green' },
  { num: 3, icon: Phone, label: 'Review', color: 'bg-brand-green' },
  { num: 4, icon: Package, label: 'Incentive', color: 'bg-brand-purple-light' },
  { num: 5, icon: RefreshCcw, label: 'Herhalings-\naankoop 2', color: 'bg-brand-green' },
];

export const LifetimeValue: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Purple Light Background */}
      <motion.div
        initial={{ y: '-100%' }}
        whileInView={{ y: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full h-[30vh] bg-brand-purple-light/30 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black uppercase leading-none mb-4"
        >
          Herhalings-
          <br />
          <span className="text-brand-purple-light">aankopen</span>
        </motion.h2>

        {/* Flow Steps */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-12 mb-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.num}>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                className={`${step.color} rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] aspect-square shadow-xl`}
              >
                <span className="font-black text-white text-lg mb-2">{step.num}</span>
                <step.icon className="w-8 h-8 text-black mb-2" />
                <span className="text-black text-xs font-bold text-center whitespace-pre-line">{step.label}</span>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-1"
                >
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Description Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white rounded-xl p-6 max-w-xl shadow-xl"
        >
          <p className="text-brand-purple text-sm leading-relaxed">
            <strong className="text-brand-purple">Inventariseren i.c.m. databeheer.</strong> Op basis van AI en/of Automation bepalen wanneer er contact opgenomen moet worden voor een herhalingsaankoop.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
