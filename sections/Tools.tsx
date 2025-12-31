import React from 'react';
import { motion } from 'framer-motion';
import { Globe, UserPlus, Building2, QrCode, Mic, FileText } from 'lucide-react';

const tools = [
  {
    icon: Globe,
    title: 'Website Lead Tracker',
    subtitle: 'Van anonieme naar geidentificeerde bezoekers',
    description: 'Bezoekers blijven vaak anoniem. Deze tool identificeert automatisch welke bedrijven je site bezoeken en koppelt dit aan concrete contactpersonen.',
    color: 'bg-brand-pink',
  },
  {
    icon: UserPlus,
    title: 'Contactpersoon Verrijker',
    subtitle: 'Geen zoekwerk meer. Altijd het juiste contact.',
    description: 'Nooit meer zoeken naar de juiste contactpersoon. Deze tool koppelt automatisch naam, functie, LinkedIn en e-mail aan je leads.',
    color: 'bg-brand-pink',
  },
  {
    icon: Building2,
    title: 'AI Bedrijfsverrijking',
    subtitle: 'Slim verkopen begint met volledige informatie',
    description: 'Binnen seconden weet je alles: branche, grootte, locatie, website en omzet. Deze AI vult automatisch je CRM aan.',
    color: 'bg-brand-green',
  },
  {
    icon: QrCode,
    title: 'QR Sample Activatie',
    subtitle: 'Maak jouw product en benadering uniek',
    description: 'Stuur fysieke samples met impact. Deze tool genereert automatisch QR-codes en koppelt activaties aan realtime alerts.',
    color: 'bg-brand-purple-light',
  },
  {
    icon: Mic,
    title: 'AI Gespreksanalyse',
    subtitle: 'Automatische samenvattingen, direct in je klantdossier',
    description: 'Notuleren is verleden tijd. Onze AI neemt gesprekken op, vat ze samen en analyseert ze voor training.',
    color: 'bg-brand-purple-light',
  },
  {
    icon: FileText,
    title: 'Offerte Aanvragen',
    subtitle: 'Snelle & geautomatiseerde offertes',
    description: 'Offerte-aanvraag automatisch in zakelijke pijplijn. Inventarisatie met beltaak, prioritering op urgentie.',
    color: 'bg-brand-green',
  },
];

export const Tools: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden bg-brand-purple flex items-center">
      {/* Pink Diagonal Background */}
      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-[40vw] h-full bg-brand-pink/10 -skew-x-12 z-0"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black uppercase leading-none mb-8 text-center"
        >
          Onze <span className="text-brand-green">Tools</span> & <span className="text-brand-pink">AI</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className={`${tool.color} rounded-xl p-3 w-fit mb-3`}>
                <tool.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-black text-lg mb-1 group-hover:text-brand-green transition-colors">{tool.title}</h3>
              <p className="text-brand-green text-xs font-bold mb-2">{tool.subtitle}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
