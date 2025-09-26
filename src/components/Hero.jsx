import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  

  const scrollPromptVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5
      }
    },
    pulse: {
      opacity: [0.5, 1, 0.5],
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (

    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className=" inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 "></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
          variants={textVariants}
        >
          <span className="block opacity-90">A COLLECTION OF</span>
          <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            VISUAL WORKS
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="mb-12"
          variants={textVariants}
        >
          <h2 className="text-2xl md:text-4xl font-light tracking-widest opacity-80">
            WILDY RIFFIAN 2025
          </h2>
        </motion.div>

        {/* Badge */}
        <motion.div
          className="inline-block px-6 py-3 border border-white border-opacity-30 rounded-full mb-16"
          variants={textVariants}
          whileHover={{
            scale: 1.05,
            borderOpacity: 0.6,
            transition: { duration: 0.2 }
          }}
        >
          <span className="text-sm md:text-base font-medium tracking-wider opacity-90">
            Site of the Day
          </span>
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={scrollPromptVariants}
          initial="hidden"
          animate={["visible", "pulse"]}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-widest opacity-70 mb-2">
              SCROLL TO EXPLORE
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-60"
              >
                <path
                  d="M8 12L3 7L4.4 5.6L8 9.2L11.6 5.6L13 7L8 12Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
    </section>
    

  );
};

export default Hero;