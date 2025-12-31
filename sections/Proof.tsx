import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

export const Proof: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse Parallax Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPoint = (clientX - left) / width;
    const yPoint = (clientY - top) / height;
    
    // Calculate parallax offset (range -20 to 20 pixels)
    x.set((xPoint - 0.5) * 40);
    y.set((yPoint - 0.5) * 40);
  }

  return (
    <section 
      ref={ref}
      onMouseMove={onMouseMove}
      className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center"
    >
      {/* Aggressive Pink Background Shape */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '-20%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 w-[80vw] h-full bg-brand-pink/10 -skew-x-12 z-0"
      />
      
      {/* Floating Tag */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="absolute top-32 left-10 md:left-32 z-30 bg-brand-pink text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg shadow-brand-pink/50"
      >
        Wie wij zijn?
      </motion.div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        
        {/* Parallax Image Container */}
        <div className="relative h-[60vh] w-full flex items-center justify-center lg:justify-end order-2 lg:order-1 perspective-1000">
          <motion.div 
            style={{ x: mouseX, y: mouseY }}
            className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
          >
             {/* Using standard reliable placeholder since we don't have local assets */}
            <img 
              src="https://picsum.photos/800/1200?grayscale" 
              alt="Warehouse Manager" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple via-transparent to-transparent opacity-60"></div>
          </motion.div>
          
          {/* Floating Stats Card */}
          <motion.div 
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.4 }}
             style={{ x: useTransform(mouseX, value => value * -1.5), y: useTransform(mouseY, value => value * -1.5) }}
             className="absolute -bottom-10 -right-5 md:right-10 bg-white p-6 rounded-xl shadow-xl z-20"
          >
             <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-brand-pink/20 rounded-full">
                    <BarChart3 className="text-brand-pink w-8 h-8" />
                </div>
                <div>
                    <p className="text-gray-500 text-xs font-bold uppercase">Groei</p>
                    <p className="text-brand-purple font-black text-2xl">200%</p>
                </div>
             </div>
             {/* Animated Bars */}
             <div className="flex items-end gap-2 h-16 w-32 pb-2 border-b-2 border-gray-100">
                {[30, 50, 40, 70, 60, 90, 100].map((height, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                        className="w-1/6 bg-brand-pink rounded-t-sm"
                    />
                ))}
             </div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center">
            <motion.h2 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 text-white"
            >
                Proven <br/>
                <span className="text-brand-pink text-stroke">Track Record</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-300 max-w-lg leading-relaxed"
            >
                Wij transformeren magazijnen van reactieve chaos naar <strong className="text-white">proactieve machines</strong>. Onze data-gedreven aanpak zorgt voor meetbare resultaten.
            </motion.p>
        </div>

      </div>
    </section>
  );
};