'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Target } from 'lucide-react';

const ServicesHero: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full p-8">
          {Array.from({ length: 144 }, (_, i) => (
            <div 
              key={i} 
              className="bg-text-secondary rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-accent-blue/30"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code size={48} />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent-purple/30"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Target size={56} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur-xl opacity-50"></div>
            <div className="relative w-20 h-20 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-h1 font-bold mb-6 bg-gradient-to-r from-text-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
            Services de développement alimentés par l'IA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xl text-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
            Choisissez votre chemin vers une livraison 3x plus rapide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-lg text-text-secondary max-w-5xl mx-auto leading-relaxed">
            Que vous soyez un développeur solo noyé dans le travail client ou un propriétaire d'agence 
            cherchant à évoluer, nous avons un chemin éprouvé vers la productivité alimentée par l'IA. 
            Chaque service inclut une implémentation pratique, un suivi des résultats mesurables 
            et un support d'optimisation continu.
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-text-muted"
        >
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
            Implémentation pratique garantie
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
            Résultats mesurables suivis
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
            Support d'optimisation continue
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;