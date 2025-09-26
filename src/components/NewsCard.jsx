import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollIndicator from './ScrollIndicator'

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden" ref={ref}>
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center vintage-photo"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/aQ3NO2opb3CmbDE4Zp5zaThmk.webp?width=4000&height=6000')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/30" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center space-y-6"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-bold text-white drop-shadow-2xl"
          >
            WILDY
          </motion.h1>
          
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="text-4xl md:text-6xl font-serif font-light text-white drop-shadow-xl"
          >
            RIFTIAN
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-lg"
          >
            Creative Portfolio • 3D Artist • Motion Designer • Illustrator
          </motion.p>
        </motion.div>

        <ScrollIndicator onClick={scrollToWorks} />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-16 h-16 border-2 border-white/30 rounded-full hidden md:block"
      />
      
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-8 h-8 bg-white/20 rounded-full hidden md:block"
      />
    </section>
  )
}

export default Hero