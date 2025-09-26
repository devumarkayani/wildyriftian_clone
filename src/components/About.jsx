import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Award, Briefcase, Heart } from 'lucide-react'

const stats = [
  { icon: Briefcase, label: 'Projects Completed', value: '50+' },
  { icon: Award, label: 'Awards Won', value: '12' },
  { icon: User, label: 'Happy Clients', value: '30+' },
  { icon: Heart, label: 'Years Experience', value: '5' },
]

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-cream to-lightBrown/10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-darkBrown mb-6">
            ABOUT WILDY
          </h2>
          <div className="w-24 h-1 bg-darkBrown mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl archive-folder"
            >
              <img
                src="https://framerusercontent.com/images/aQ3NO2opb3CmbDE4Zp5zaThmk.webp?width=600&height=600"
                alt="Wildy Riftian"
                className="w-full h-[500px] object-cover vintage-photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-darkBrown">
              Creative Visionary & Digital Artist
            </h3>
            
            <div className="space-y-4 text-lg text-darkBrown/80 leading-relaxed">
              <p>
                With over 5 years of experience in digital artistry, I specialize in creating 
                immersive 3D experiences, captivating motion graphics, and stunning illustrations 
                that tell compelling stories.
              </p>
              
              <p>
                My work spans across various mediums, from character design and environmental 
                modeling to brand identity and editorial illustration. I believe in the power 
                of visual storytelling to connect, inspire, and move audiences.
              </p>
              
              <p>
                Based in Indonesia, I draw inspiration from the rich cultural heritage and 
                vibrant landscapes of Southeast Asia, infusing my work with authentic narratives 
                and distinctive visual aesthetics.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center px-8 py-3 bg-darkBrown text-cream font-semibold rounded-full hover:bg-lightBrown transition-colors duration-300"
            >
              Download CV
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2"
              >
                ↓
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-center p-6 bg-white/50 rounded-2xl shadow-lg archive-folder"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-darkBrown text-cream rounded-full mb-4"
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <h4 className="text-3xl font-serif font-bold text-darkBrown mb-2">
                {stat.value}
              </h4>
              <p className="text-lightBrown font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About