import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ScrollIndicator = ({ onClick }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="flex flex-col items-center space-y-2 text-white hover:text-cream transition-colors"
      >
        <span className="text-sm font-light tracking-widest">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </motion.div>
  )
}

export default ScrollIndicator