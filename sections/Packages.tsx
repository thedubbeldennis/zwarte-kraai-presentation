import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Settings, Target, Lightbulb } from 'lucide-react';

const packages = [
  {
    num: '1',
    title: 'Kickstart',
    subtitle: 'Implementatie winstgevend salesteam',
    icon: Rocket,
    color: 'bg-brand-green',
    items: [
      'Opzet van systemen, dashboarding & KPI\'s',
      '3 acquisitiescripts, 3 e-mailtemplates, 2 sales flows',
      'Onboarding & training salesmedewerkers',
      'Basisinstelling pipeline & offertetool',
    ],
  },
  {
    num: '2',
    title: 'Optimalisatie en onderhoud',
    subtitle: 'Maandelijkse salesoptimalisatie',
    icon: Settings,
    color: 'bg-brand-pink',
    items: [
      'Analyse & rapportages voor verbetering',
      'Optimalisatie van scripts, flows & dashboards',
      'Dagelijkse AI-feedback & prioritisering',
    ],
  },
  {
    num: '3',
    title: 'Leadgeneratie',
    subtitle: 'Leadgeneratie & opvolging',
    icon: Target,
    color: 'bg-brand-purple-light',
    items: [
      'Maandelijks X aantal leads aangeleverd',
      'Opvolging via sales scripts & flows',
      'Maandelijkse rapportages over conversies & leadkwaliteit',
    ],
  },
  {
    num: '4',
    title: 'Coaching en onboarding',
    subtitle: 'Sales onboarding & training',
    icon: Lightbulb,
    color: 'bg-brand-green',
    items: [
      'Starttraining voor nieuwe medewerkers',
      'Maandelijkse teamtrainingen',
      'Praktische coaching voor salesvaardigheden',
      'Coaching & sparren voor hogere omzetten',
    ],
  },
];

export const Packages: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Background Shapes */}
      <motion.div
        initial={{ y: '-100%' }}
        whileInView={{ y: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-1/2 h-[30vh] bg-brand-purple-light/20 z-0"
      />
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 right-0 w-1/2 h-[30vh] bg-brand-green/10 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-black uppercase leading-none mb-8 text-center"
        >
          Onze <span className="text-brand-green">Pakketten</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-brand-purple-light text-4xl font-black">{pkg.num}.</div>
                <div>
                  <h3 className={`font-black text-lg ${index % 2 === 0 ? 'text-brand-green' : 'text-brand-pink'}`}>
                    {pkg.title}
                  </h3>
                  <p className="text-brand-purple text-sm font-bold">{pkg.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-xs">
                    <span className="text-brand-purple">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end">
                <div className={`${pkg.color} rounded-full p-2`}>
                  <pkg.icon className="w-5 h-5 text-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
