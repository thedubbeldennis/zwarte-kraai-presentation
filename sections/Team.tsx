import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Erwin Dijkstra',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Dennis Nijborg',
    role: 'Founder & CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Migilio Tirtosentono',
    role: 'Senior Sales Professional & Trainer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'David Pantophlet',
    role: 'Head of AI',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Roger Hamo',
    role: 'AI Automation Specialist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Klaas Jan Woudman',
    role: 'Senior Sales Consultant',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face',
  },
];

export const Team: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Pink Background Shape */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-[50vw] h-[40vh] bg-brand-pink z-0"
        style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black uppercase leading-none mb-4"
        >
          Ontmoet
          <br />
          <span className="text-brand-pink">ons team</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-xl mb-8"
        >
          Expertise, ervaring en passie voor resultaten
        </motion.p>

        {/* Team Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-3 mx-auto w-20 h-20 md:w-24 md:h-24">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-xl object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-brand-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-brand-purple font-black text-xs md:text-sm">{member.name}</h3>
                <p className="text-gray-500 text-xs leading-tight">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
