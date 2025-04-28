import React from 'react';
import { motion } from 'framer-motion';

function Video() {
  return (
    <section id='video' className='bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <motion.div
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h3 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent'>
              Video
            </h3>
            <div className='mt-4 h-1 bg-gradient-to-r from-amber-500/30 via-amber-500 to-amber-500/30 w-1/3 mx-auto' />
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 120
            }}
            viewport={{ once: true }}
            className='relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 mx-4 lg:mx-[25%]'
          >
            <div className='aspect-video w-full'>
              <video
                className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/path/to/your-poster-image.jpg"
              >
                <source src="/src/assets/Triumph1.mp4" type="video/mp4" />
                <source src="/src/assets/Triumph1.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Play Button Overlay */}
            <div className='absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <button className='p-4 rounded-full bg-amber-500/90 hover:bg-amber-600 transition-colors shadow-lg'>
                <svg 
                  className='w-12 h-12 text-white'
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Decorative Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='mt-12 text-center'
          >
            <p className='text-gray-400 text-lg italic font-light'>
              "Experience the energy of our live performances"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Video;