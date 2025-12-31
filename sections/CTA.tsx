import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-pink/20 via-brand-purple to-brand-purple"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-12"
        >
            Klaar om bij de <span className="text-brand-green inline-block mx-2">10%</span> <br/>
            proactieve bedrijven te horen?
        </motion.h2>

        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
            <button className="group relative px-8 py-6 bg-brand-green text-brand-purple font-black text-xl uppercase tracking-wider rounded-none overflow-hidden hover:scale-105 transition-transform duration-300">
                <span className="relative z-10 flex items-center gap-3">
                    Plan Strategiegesprek
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
            </button>

            <button className="px-8 py-6 border-2 border-white/20 text-white font-bold text-xl uppercase tracking-wider hover:bg-white/10 transition-colors">
                Bekijk onze methode
            </button>
        </motion.div>
      </div>

      {/* Footer Element */}
      <div className="absolute bottom-4 w-full text-center text-gray-500 text-sm uppercase tracking-widest">
        © 2024 Zwarte Kraai. All rights reserved.
      </div>
    </section>
  );
};