import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-[#303030] to-[#252525] text-gray-300 h-[7vh] flex flex-col items-center justify-center border-t border-gray-500/30 relative overflow-hidden"
    >
      {/* Animated background element */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-20" />
      
      {/* Content */}
      <p className="text-xs md:text-sm font-mono tracking-wide">
        © 2019 TRIUMPH ACOUSTIC BAND ENTERTAINMENT
      </p>
      <p className="text-[0.6rem] md:text-xs mt-1 text-gray-400">
        Crafting Musical Experiences Since 2012
      </p>
    </motion.div>
  );
}

export default Footer;