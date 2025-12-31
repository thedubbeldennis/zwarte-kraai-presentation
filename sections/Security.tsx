import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Server } from 'lucide-react';

const securityItems = [
  {
    icon: Shield,
    title: 'Strikte beveiligingsprioriteit',
    description: 'We beschermen gegevens volgens toonaangevende industriestandaarden en regelgeving.',
    color: 'text-brand-green',
  },
  {
    icon: FileCheck,
    title: 'ISO 27001 & ISO 9001',
    description: 'Onze processen voldoen aan de internationale normen voor informatiebeveiliging en kwaliteitsbeheer.',
    color: 'text-brand-green',
  },
  {
    icon: Lock,
    title: 'Privacy & regelgeving',
    description: 'Onze werkwijze sluit aan op o.a. de AVG en Data Processing Agreements om privacy te waarborgen.',
    color: 'text-brand-green',
  },
  {
    icon: Server,
    title: 'Geavanceerde versleuteling',
    description: 'Al het dataverkeer is SSL-versleuteld en maakt gebruik van de nieuwste beveiligingsprotocollen.',
    color: 'text-brand-green',
  },
];

export const Security: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Green Triangle */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-brand-green z-0"
        style={{ clipPath: 'polygon(0 100%, 0 20%, 100% 100%)' }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black uppercase leading-none mb-12"
        >
          Beveiliging en
          <br />
          <span className="text-brand-green">compliance</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0">
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <div>
                <h3 className={`font-black text-lg mb-2 ${item.color}`}>{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
