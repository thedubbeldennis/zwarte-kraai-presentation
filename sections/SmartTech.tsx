import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, FileText, BarChart3 } from 'lucide-react';

const features = [
  'Snel en eenvoudig bellen',
  'Inzicht in gesprekstijd & aantal',
  'Gespreksanalyse voor verbetering',
  'Duidelijke klantgeschiedenis & notities',
  'Transparante samenwerking met collega\'s',
];

export const SmartTech: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Purple Light Diagonal */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-[70vw] h-full bg-brand-purple-light/10 -skew-x-12 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black uppercase leading-none mb-6"
            >
              <span className="text-brand-green">Proactief inzicht</span>
              <br />
              <span className="text-brand-purple-light">met slimme</span>
              <br />
              <span className="text-brand-purple-light">technologie</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="bg-brand-green rounded-2xl p-4 shrink-0">
                <CheckCircle className="w-12 h-12 text-black" />
                <div className="absolute -bottom-1 -right-1 bg-black rounded-lg p-1">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-black">o</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg max-w-md">
                <p className="text-brand-purple text-sm leading-relaxed">
                  <strong>Ons algoritme detecteert direct veranderingen in klantgedrag,</strong> zoals een daling in bestelbedrag of frequentie. Verkoopmedewerkers worden hier direct van op de hoogte gesteld middels een taak, zodat ze proactief kunnen inspelen op klantbehoeften.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Belprogramma
                <br />
                <span className="text-brand-pink">in klantkaart</span>
              </h3>
            </motion.div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-brand-green rounded-full" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Icon Stack */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="mt-8 flex items-center justify-end"
            >
              <div className="relative">
                <div className="bg-brand-green rounded-2xl p-6">
                  <Phone className="w-12 h-12 text-black" />
                </div>
                <div className="absolute -bottom-3 -left-3 bg-brand-purple-light rounded-xl p-3">
                  <FileText className="w-6 h-6 text-black" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
