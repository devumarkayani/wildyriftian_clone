import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 0, label: 'Home', href: '#hero' },
    { id: 1, label: 'Works', href: '#featured' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40  bg-black/80 backdrop-blur-md px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-2">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 lg:space-x-56 ">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  whileHover={{ y: -2, backgroundColor: '#ffffff', color: '#000000' }}
                  className={`relative px-3 py-1 text-[0.7rem] font-serif uppercase transition-colors duration-300 ${
                    currentSection === item.id
                      ? 'bg-white text-black font-semibold'
                      : 'text-white  '
                  } group`}
                >
                  {item.label}
                  <span className="absolute inset-0 bg-white origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100 -z-10" />
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
                  className="w-full h-0.5 bg-white block"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-white block"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-white block"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black border-t border-gray-600"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-lg font-serif uppercase text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
        style={{
          scaleX: typeof window !== 'undefined'
            ? window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)
            : 0,
        }}
      />
    </>
  );
};

export default Navigation;