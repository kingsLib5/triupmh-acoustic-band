import React, { useRef, useState, useEffect } from 'react';
import { IoShareSocial } from "react-icons/io5";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pathMp3 from '../assets/path.mp3';
import path2Mp3 from '../assets/path2.mp3';

const songVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      type: "spring",
      stiffness: 120
    } 
  },
};

const SongCard = ({ title, audioSrc, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      ref={ref}
      variants={songVariants}
      initial="hidden"
      animate={controls}
      className="group relative bg-[black] border-gray-800 rounded-2xl mx-[5%] md:mx-[25%] my-4 p-6 flex flex-col shadow-2xl hover:shadow-3xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="border-b border-gray-800 pb-4 mb-4 flex justify-between items-center">
        <div className="flex flex-col">
          <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            {title}
          </h4>
          <p className="text-sm md:text-base text-gray-400 mt-1">
            Original Song By Triumph Acoustic Band
          </p>
        </div>
        <button className="hover:text-amber-400 transition-colors hover:scale-110">
          <IoShareSocial className="text-2xl" />
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-center justify-between">
          <motion.button 
            onClick={handlePlayPause}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {isPlaying ? (
              <IoPauseCircleOutline className="text-amber-400 text-4xl md:text-5xl drop-shadow-glow" />
            ) : (
              <IoPlayCircleOutline className="text-amber-400 text-4xl md:text-5xl drop-shadow-glow" />
            )}
          </motion.button>
          <span className="text-amber-300 text-lg md:text-xl font-medium">
            {title}
          </span>
        </div>

        <div className="w-full bg-gray-800 h-1.5 rounded-full mb-2 mt-4">
          <motion.div
            className="bg-amber-400 h-full rounded-full relative"
            animate={{ width: `${(currentTime / duration) * 100}%` }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute right-0 -top-1 w-3 h-3 bg-amber-400 rounded-full shadow-glow" />
          </motion.div>
        </div>

        <div className="flex justify-between text-gray-400 text-sm font-mono mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </motion.div>
  );
};

function Music() {
  return (
    <div id='music' className="bg-[#0a0a0a] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-center mb-16"
      >
        <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
          Music
        </span>
        <div className="mt-4 h-1 bg-gradient-to-r from-amber-500/30 via-amber-500 to-amber-500/30 w-1/3 mx-auto" />
      </motion.h2>
      
      <div className="space-y-12">
        <SongCard 
          title="PATH" 
          audioSrc={pathMp3} 
          index={0}
        />
        <SongCard 
          title="RUNNER" 
          audioSrc={path2Mp3} 
          index={1}
        />
      </div>
    </div>
  );
}

export default Music;
