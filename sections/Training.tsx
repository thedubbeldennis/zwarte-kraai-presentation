import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, TrendingUp, Users, MessageSquare } from 'lucide-react';

const items = [
  {
    title: 'Maandelijkse optimalisatie',
    description: 'Verkoopprocessen continu verbeteren.',
    color: 'text-brand-pink',
  },
  {
    title: 'Leadgeneratie',
    description: '(optioneel): Gericht nieuwe leads aantrekken.',
    color: 'text-brand-green',
  },
  {
    title: 'Training',
    description: 'Teamontwikkeling met praktische sessies.',
    color: 'text-brand-pink',
  },
];

export const Training: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Pink Background Diagonal */}
      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-[60vw] h-full bg-brand-pink/10 -skew-x-12 z-0"
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
              Training en
              <br />
              <span className="text-brand-pink">ontwikkeling</span>
            </motion.h2>

            <div className="space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                >
                  <h3 className={`font-black text-xl ${item.color}`}>{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Image Placeholder with Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-80 h-96">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                  alt="Training professional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple via-transparent to-transparent" />
              </div>

              {/* Floating Chat Icon */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-brand-pink rounded-xl p-3"
              >
                <MessageSquare className="w-8 h-8 text-white" />
                <div className="absolute -bottom-1 -right-1 bg-black rounded p-1">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-xs font-black">
                    ZK
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
