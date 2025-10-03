// // // import { useState } from 'react'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from '/vite.svg'
// // // import './App.css'

// // // function App() {
// // //   // const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <h1 className='ml-220'>dafsdkj</h1>
// // //     </>
// // //   )
// // // }

// // // export default App

// // import { useState, useEffect } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import Navigation from './components/Navigation'
// // import Hero from './components/Hero'
// // import FeaturedWork from './components/FeaturedWork'
// // import About from './components/About'
// // import Contact from './components/Contact'
// // import Footer from './components/Footer'
// // import Archieve from './components/Archieve'
// // import { featuredWork1, featuredWork2, featuredWork3 } from './data/featurepage1'

// // function App() {
// //   const [loading, setLoading] = useState(true)
// //   const [currentSection, setCurrentSection] = useState(0)

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setLoading(false)
// //     }, 2000)

// //     return () => clearTimeout(timer)
// //   }, [])

// //   const handleScroll = () => {
// //     const sections = document.querySelectorAll('section')
// //     const scrollTop = window.pageYOffset

// //     sections.forEach((section, index) => {
// //       const offsetTop = section.offsetTop
// //       const sectionHeight = section.offsetHeight

// //       if (scrollTop >= offsetTop - 100 && scrollTop < offsetTop + sectionHeight - 100) {
// //         setCurrentSection(index)
// //       }
// //     })
// //   }

// //   useEffect(() => {
// //     window.addEventListener('scroll', handleScroll)
// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [])

// //   return (
// //     <main className="min-h-screen bg-cream paper-texture custom-scrollbar">
// //       {/* <AnimatePresence>
// //         {loading && (
// //           <motion.div
// //             initial={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="fixed inset-0 z-50 bg-darkBrown flex flex-col items-center justify-center"
// //           >
// //             <motion.div
// //               animate={{ 
// //                 rotate: 360,
// //                 scale: [1, 1.2, 1]
// //               }}
// //               transition={{ 
// //                 duration: 2,
// //                 repeat: Infinity,
// //                 ease: "linear"
// //               }}
// //               className="w-16 h-16 border-4 border-cream border-t-transparent rounded-full mb-8"
// //             />
// //             <motion.h1
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.5 }}
// //               className="text-2xl font-serif font-bold text-cream"
// //             >
              
// //             </motion.h1>
// //             <motion.p
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 1 }}
// //               className="text-cream/60 mt-2"
// //             >
              
// //             </motion.p>
// //           </motion.div>
// //         )}
// //       </AnimatePresence> */}

// //       <Navigation currentSection={currentSection} />
// //       <Hero />
// //       <FeaturedWork  {...featuredWork1} />
// //       <FeaturedWork  {...featuredWork2} />
// //       <FeaturedWork  {...featuredWork3} />
// //       <Archieve/>
// //       <About />
// //       <Contact />
// //       <Footer />
// //     </main>
// //   )
// // }

// // export default App




// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Navigation from './components/Navigation'
// import Hero from './components/Hero'
// import FeaturedWork from './components/FeaturedWork'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Archieve from './components/Archieve'
// import { featuredWork1, featuredWork2, featuredWork3 } from './data/featurepage1'

// function App() {
//   const [loading, setLoading] = useState(true)
//   const [currentSection, setCurrentSection] = useState(0)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//     }, 2000)
//     return () => clearTimeout(timer)
//   }, [])

//   const handleScroll = () => {
//     const sections = document.querySelectorAll('section')
//     const scrollTop = window.pageYOffset
//     sections.forEach((section, index) => {
//       const offsetTop = section.offsetTop
//       const sectionHeight = section.offsetHeight
//       if (scrollTop >= offsetTop - 100 && scrollTop < offsetTop + sectionHeight - 100) {
//         setCurrentSection(index)
//       }
//     })
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <main className="min-h-screen bg-cream paper-texture custom-scrollbar">
//       {/* <AnimatePresence>
//         {loading && (
//           <motion.div
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8 }}
//             className="fixed inset-0 z-50 bg-darkBrown flex flex-col items-center justify-center"
//           >
//             <motion.div
//               animate={{
//                 rotate: 360,
//                 scale: [1, 1.2, 1]
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//               className="w-16 h-16 border-4 border-cream border-t-transparent rounded-full mb-8"
//             />
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-2xl font-serif font-bold text-cream"
//             >
             
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//               className="text-cream/60 mt-2"
//             >
             
//             </motion.p>
//           </motion.div>
//         )}
//       </AnimatePresence> */}
//       <Navigation currentSection={currentSection} />
//       <Hero />
//       <div className="relative h-[300vh]">
//         <FeaturedWork {...featuredWork1} additionalClass="sticky top-0 h-screen" />
//         <FeaturedWork {...featuredWork2} additionalClass="sticky top-0 h-screen" />
//         <FeaturedWork {...featuredWork3} additionalClass="sticky top-0 h-screen" />
//       </div>
//       <Archieve/>
//       <About />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }

// export default App





import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Archieve from './components/Archieve';
import { featuredWork1, featuredWork2, featuredWork3 } from './data/featurepage1';


function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollTop = window.pageYOffset;
    sections.forEach((section, index) => {
      const offsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= offsetTop - 100 && scrollTop < offsetTop + sectionHeight - 100) {
        setCurrentSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-cream paper-texture custom-scrollbar">
      {/* <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center text-white"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mb-8"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-serif font-bold"
            >
              Wildy Riftian
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence> */}

      <Navigation currentSection={currentSection} />
      <Hero />
      
      
      {/* Sticky Featured Works Container - 300vh for 3x full-screen scroll */}
      <div className="relative h-[300vh] -mt-20"> {/* Offset for nav */}
        <FeaturedWork {...featuredWork1} additionalClass="sticky top-15 h-screen w-full overflow-hidden" />
        <FeaturedWork {...featuredWork2} additionalClass="sticky top-15 h-screen w-full overflow-hidden" />
        <FeaturedWork {...featuredWork3} additionalClass="sticky top-15 h-screen w-full overflow-hidden" />
      </div>
      
      <Archieve />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;