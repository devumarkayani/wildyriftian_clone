import { useState } from 'react'
import { motion } from 'framer-motion'

const Navigation = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Works', href: '#works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="flex justify-between items-center py-4  ">
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-serif font-bold text-darkBrown cursor-pointer"
            >
              WILDY RIFTIAN
            </motion.div> */}

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-70 ">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2,   background: 'white', color: 'black' }}
                  className={`relative px-3 py-1 text-lg transition-colors duration-3000 ${
    currentSection === index
      ? 'bg-white text-darkBrown font-semibold'
      : 'text-white'
  } group`}
>
                  {item.name}
                  <span
    className="absolute inset-0 bg-white origin-bottom scale-y-0 transition-transform duration-3000 ease-out group-hover:scale-y-100 -z-10"
  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-darkBrown block"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-darkBrown block"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-darkBrown block"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-cream border-t border-lightBrown/20"
        >
          <div className="px-4 py-2 space-y-2">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-lg text-lightBrown hover:text-darkBrown transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-darkBrown z-50 origin-left"
        style={{
          scaleX: typeof window !== 'undefined' ? 
            window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) : 0
        }}
      />
    </>
  )
}

export default Navigation