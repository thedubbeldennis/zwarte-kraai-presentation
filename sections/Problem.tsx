import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedCounter } from '../components/AnimatedCounter';

const GlitchWord: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200); // Quick red flash
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <span 
      ref={ref}
      className={`transition-colors duration-100 ${isGlitching ? 'text-red-500 font-mono scale-110' : 'text-white'}`}
    >
      {text}
    </span>
  );
};

export const Problem: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex flex-col items-center justify-center">
      {/* Background Transition Shape */}
      <motion.div
        initial={{ y: '-100%' }}
        whileInView={{ y: '0%' }}
        transition={{ duration: 0.8, ease: 'circOut' }}
        className="absolute top-0 right-0 w-full h-[30vh] bg-gradient-to-b from-brand-green/20 to-transparent z-0"
      />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 max-w-6xl">
        
        {/* The Data */}
        <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="font-black text-[12rem] md:text-[16rem] leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500"
            >
              <AnimatedCounter end={90} />
            </motion.div>
            <p className="text-xl text-gray-400 font-bold uppercase tracking-widest mt-[-2rem] ml-4">
              Van de bedrijven
            </p>
        </div>

        {/* The Pain */}
        <div className="text-left">
          <motion.h2 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-black leading-tight uppercase"
          >
            Heeft een <br/>
            <span className="text-brand-green">Reactief Salesproces</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-2xl md:text-3xl font-bold leading-relaxed max-w-lg"
          >
            Waarbij kansen <GlitchWord text="niet" delay={1200} /> of <GlitchWord text="te laat" delay={1400} /> worden gezien.
          </motion.p>
        </div>
      </div>
    </section>
  );
};