import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const FloatingParticle = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-brand-green/20"
    style={{ left: x, width: size, height: size }}
    initial={{ y: '100vh', opacity: 0 }}
    animate={{ 
      y: '-20vh', 
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

export const Intro: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center justify-center">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParticle delay={0} x="10%" size={8} />
        <FloatingParticle delay={2} x="25%" size={12} />
        <FloatingParticle delay={4} x="45%" size={6} />
        <FloatingParticle delay={1} x="65%" size={10} />
        <FloatingParticle delay={3} x="80%" size={8} />
        <FloatingParticle delay={5} x="90%" size={14} />
      </div>

      {/* Animated Green Corner */}
      <motion.div
        initial={{ x: '100%', y: '-100%', rotate: 12 }}
        whileInView={{ x: '0%', y: '0%', rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-gradient-to-bl from-brand-green/20 via-brand-green/10 to-transparent z-0"
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 0 0)' }}
      />

      {/* Secondary Shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-[40vw] h-[30vh] bg-brand-pink/5 z-0"
        style={{ clipPath: 'polygon(0 100%, 0 40%, 100% 100%)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {/* Sparkle Icon */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -180 },
              visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, type: 'spring' } }
            }}
            className="mb-6"
          >
            <Sparkles className="w-12 h-12 text-brand-green" />
          </motion.div>

          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } }
            }}
            className="text-2xl md:text-3xl font-bold text-gray-400 mb-4 uppercase tracking-widest"
          >
            Ondernemers onderschatten...
          </motion.h2>

          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="relative inline-block"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight uppercase">
              De kracht van een<br />
              <span className="text-brand-green relative inline-block">
                proactieve
                <motion.div 
                  initial={{ width: '0%', opacity: 0 }}
                  whileInView={{ width: '100%', opacity: 0.5 }}
                  transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-0 h-3 bg-brand-green"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 1.4, duration: 1.5, ease: 'easeOut' }}
                  className="absolute -right-4 -top-4"
                >
                  <Sparkles className="w-6 h-6 text-brand-green" />
                </motion.div>
              </span>
              <br />
              organisatie.
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }
            }}
            className="mt-8 text-xl text-gray-300 max-w-xl"
          >
            Van reactief naar proactief. Wij helpen B2B-bedrijven hun sales te transformeren.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-sm uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-brand-green" />
        </motion.div>
      </motion.div>
    </section>
  );
};
