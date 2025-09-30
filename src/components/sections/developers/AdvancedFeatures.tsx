'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Slack, Github, Cpu, Network } from 'lucide-react';
import { useTranslations } from 'next-intl';

const AdvancedFeatures: React.FC = () => {
  const t = useTranslations('developers.tech_watch');
  
  const mcpConnections = [
    { name: "Client Instance", icon: <Cpu className="w-6 h-6" />, color: "text-primary-blue" },
    { name: "Slack", icon: <Slack className="w-6 h-6" />, color: "text-success-green" },
    { name: "GitHub", icon: <Github className="w-6 h-6" />, color: "text-accent-red" },
  ];

  return (
    <section className="py-12 md:py-24 bg-background-dark-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-h1 font-bold mb-4 md:mb-6 text-text-primary">
              {t('title')}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed mb-8 md:mb-12">
              {t('description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {t('new_stacks.title')}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t('new_stacks.description')}
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-accent-red" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {t('mcp_protocols.title')}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t('mcp_protocols.description')}
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-success-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-success-green" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {t('best_practices.title')}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t('best_practices.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;