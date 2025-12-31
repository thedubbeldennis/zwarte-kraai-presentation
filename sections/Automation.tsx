import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Zap, Mail, Phone, Gift } from 'lucide-react';

const flowSteps = [
  { step: 1, text: 'Segment X - Aangemaakt op Datum Y: Mailtemplate met persoonlijke video.' },
  { step: 2, text: 'Geen reactie na 3 dagen: Beltaak voor accountmanager A.' },
  { step: 3, text: 'Reactie ontvangen: Flow stopt.' },
  { step: 4, text: 'Geen reactie na bellen: Nieuwe beltaak na 1 dag voor accountmanager A.' },
];

export const Automation: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Green Triangle */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-brand-green z-0"
        style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-black uppercase leading-none mb-6"
            >
              Flows en
              <br />
              <span className="text-brand-pink">automatiseringen</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-brand-green font-bold text-lg mb-6"
            >
              We richten verschillende "flows" in die meerdere stappen doorlopen, bijvoorbeeld:
            </motion.p>

            <div className="space-y-3">
              {flowSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-brand-pink font-black text-lg">{item.step}.</span>
                  <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Icon & Card */}
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="bg-brand-pink rounded-3xl p-8"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-brand-pink" />
                </div>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-pink" />
                </div>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-pink" />
                </div>
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-brand-pink" />
                </div>
              </div>
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <line x1="30%" y1="30%" x2="70%" y2="30%" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="30%" y1="70%" x2="70%" y2="70%" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl p-5 max-w-sm shadow-xl"
            >
              <p className="text-brand-purple text-sm leading-relaxed">
                <strong>Deze flow kan verder worden uitgebreid,</strong> bijvoorbeeld met een persoonlijk kaartje of automatische verzending van een sample. Ook AI zouden we hier kunnen toepassen, bijvoorbeeld een "outreach voicemail".
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
