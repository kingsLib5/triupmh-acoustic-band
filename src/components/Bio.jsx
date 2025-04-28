import React from 'react';
import { motion } from 'framer-motion';
import bioImage from '../assets/clo4.jpg';

export default function Bio() {
  const paragraphs = [
    `Triump Acoustic Band have performed as a live acoustic duo in Salt Lake City, Park City, and the wider Salt Lake region since 2012.`,
    
    `Their fun selection of beloved covers from the past several decades combines with unique vocal harmonies and instrumentation (guitar, banjo, harmonica) to deliver professional and highly enjoyable performances.`,
    
    `Each live show features dynamic duets alongside individual performances, showcasing their versatile musical chemistry.`,
    
    `Triump Acoustic Band elevate events of all kinds - from intimate weddings to corporate gatherings - with tailored musical experiences that captivate audiences.`
  ];

  return (
    <section className="bg-[#0a0a0a] text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="bio-heading">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          id="bio-heading" 
          className="text-center text-5xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            The Artists
          </span>
          <div className="mt-4 h-1 bg-gradient-to-r from-amber-500/30 via-amber-500 to-amber-500/30 w-1/3 mx-auto" />
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.figure
            className="relative group"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                src={bioImage}
                alt="Will Rogers on stage playing guitar"
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.02 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <figcaption className="absolute bottom-4 left-4 text-sm text-amber-300 font-medium">
              Live Performance at Red Butte Garden
            </figcaption>
          </motion.figure>

          {/* Text Content */}
          <motion.article
            className="space-y-6 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {paragraphs.map((para, idx) => (
              <motion.p
                key={idx}
                className="relative pl-6 border-l-2 border-amber-500/30"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <span className="absolute left-0 -translate-x-3 text-amber-500">♫</span>
                {para}
              </motion.p>
            ))}
          </motion.article>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
    </section>
  );
}