import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';
import backgroundImage from '../assets/clo3.jpg'; // Import the background image
import song from '../assets/Band.mp3'; // Import the MP3 file

function Hero() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Use the imported image
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0))'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
        >
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            TRIUMPH ACOUSTIC
          </span>
          <br />
          <span className="text-white mt-2 inline-block">BAND</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mt-8"
        >
          {/* Listen Now Button */}
          <button
            onClick={handlePlayPause}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
            {isPlaying ? 'Pause' : 'Listen Now'}
          </button>
          
          {/* Book Now Button */}
          <a
            href="#contact"
            className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </a>
        </motion.div>

        {/* Audio Element */}
        <audio ref={audioRef} src={song} /> {/* Use the imported MP3 file */}

        {/* Scrolling Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-4 h-8 border-2 border-amber-500 rounded-full relative">
            <motion.div
              animate={{ y: [0, 12], opacity: [1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-1 bg-amber-500 rounded-full absolute top-1 left-1/2 -translate-x-1/2"
            />
          </div>
          <span className="text-amber-500 text-sm font-medium">Scroll</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;