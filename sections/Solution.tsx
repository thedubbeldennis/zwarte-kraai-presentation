import React from 'react';
import { motion } from 'framer-motion';
import { Database, Bot, GraduationCap } from 'lucide-react';

const pillars = [
  {
    num: '01',
    icon: Database,
    title: 'CRM',
    description: 'Een centrale plek voor al je klantdata. Opgeschoond, verrijkt, gekoppeld aan je bestaande systemen. Geen gedoe, volledig inzicht.',
    color: 'bg-brand-green',
  },
  {
    num: '02',
    icon: Bot,
    title: 'AI & Automatisering',
    description: 'Slimme signalen die je team waarschuwen bij kansen en risico\'s. Automatische opvolging. Minder handwerk, meer impact.',
    color: 'bg-brand-purple',
  },
  {
    num: '03',
    icon: GraduationCap,
    title: 'Training & Coaching',
    description: 'Hands-on begeleiding. Gesprekstechnieken, CRM-adoptie, proactief werken. Niet een keer, maar doorlopend tot het de nieuwe standaard is.',
    color: 'bg-brand-pink',
  },
];

export const Solution: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Background Shape */}
      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-0 right-0 w-[60vw] h-full bg-brand-purple-light/5 -skew-x-12 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Title */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black uppercase leading-none mb-6"
            >
              Opzet <span className="text-brand-green">voor</span>
              <br />
              <span className="text-brand-green">succes!</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-lg leading-relaxed"
            >
              Wij bouwen uw <strong className="text-white">winstgevende salesteam</strong> vanaf de basis—van systemen en belscripts tot de eerste telefonische verkopen als bewijs dat het werkt.
            </motion.p>
          </div>

          {/* Right - Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="bg-white rounded-xl p-6 flex items-start gap-5 shadow-xl"
              >
                <div className={`${pillar.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-black text-sm shrink-0`}>
                  {pillar.num}
                </div>
                <div>
                  <h3 className="text-brand-purple font-black text-lg mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
