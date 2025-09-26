import React from 'react'

function Archieve() {
  const projects = [
    { id: 1, number: "01", name: "2048w", image: "https://framerusercontent.com/images/opMbbkxWaIDdScv5KDYMRdjVFk.webp?width=3000&height=3000" },
    { id: 2, number: "02", name: "nasty", image: "https://framerusercontent.com/images/0wzsyC6Q9etLR3B4BCM72YUyk.webp?width=1662&height=1666" },
    { id: 3, number: "03", name: "midnight-designer-design-club", image: "https://framerusercontent.com/images/H7GE6nioT8UHrDmVJEd6IrQVBw.webp?width=936&height=1664" },
    { id: 4, number: "04", name: "pumpkin", image: "https://framerusercontent.com/images/rNpdFPSz6UVPYmnz8FSkjsxyoE.webp?width=1920&height=1920" },
    { id: 5, number: "05", name: "citrus-symphony", image: "https://framerusercontent.com/images/THMg83ruN8xETZ9POkT2WqpY.webp?width=1334&height=1670" },
    { id: 6, number: "06", name: "aaa", image: "https://framerusercontent.com/images/psBdr67IrpTYsqioGWFL1KD4Kg.webp?width=1200&height=757" },
    { id: 2, number: "02", name: "nasty", image: "https://framerusercontent.com/images/0wzsyC6Q9etLR3B4BCM72YUyk.webp?width=1662&height=1666" },
    { id: 3, number: "03", name: "midnight-designer-design-club", image: "https://framerusercontent.com/images/H7GE6nioT8UHrDmVJEd6IrQVBw.webp?width=936&height=1664" },
    { id: 4, number: "04", name: "pumpkin", image: "https://framerusercontent.com/images/rNpdFPSz6UVPYmnz8FSkjsxyoE.webp?width=1920&height=1920" },
    { id: 5, number: "05", name: "citrus-symphony", image: "https://framerusercontent.com/images/THMg83ruN8xETZ9POkT2WqpY.webp?width=1334&height=1670" },
    { id: 6, number: "06", name: "aaa", image: "https://framerusercontent.com/images/psBdr67IrpTYsqioGWFL1KD4Kg.webp?width=1200&height=757" }
  ];

  const menuItems = [
    { number: "01", title: "Motion Design", href: "./works-motion" },
    { number: "02", title: "Brand Design", href: "./works-branding" },
    { number: "03", title: "Editorial Design", href: "./works-editorial" },
    { number: "04", title: "Photography", href: "./works-photoworks" },
    { number: "05", title: "Illustration", href: "./works-illustration" },
    { number: "06", title: "3D Tech", href: "./works-3d-tech" }
  ];

  const socialLinks = [
    { title: "EMAIL", href: "mailto:wildyriftian@gmail.com" },
    { title: "INSTAGRAM", href: "https://www.instagram.com/wildyriftian/" },
    { title: "LINKEDIN", href: "https://www.linkedin.com/in/wildy-riftian" },
    { title: "RESUME", href: "https://drive.google.com/file/d/1HiKpidWsvFJH0V6Rod-6GuOZczbI0Phj/view?usp=drive_link" }
  ];
  return (
    <>
     <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div>
        <h3 className="text-3xl pl-11.5">Archive</h3>
        <div className='text px-115 text-text-capitalize-lg  ' >
          <h4>
            A curated stash of playful, bite-sized creations
            <span> <br />too small for a project, but too good to keep hidden</span>
.
          </h4>
        </div>
      </div>
      {/* Projects Grid */}
      <section id="works" className="py-20 px-6">
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 gap-4    ">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer  border-dotted border p-2">
                <div className="relative overflow-hidden   ">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 z-20">
                    <span className="text-1xl font-light bg-sky-50">{project.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* See All Button */}
          <div className="text-center mt-12">
            <a href="./archive" className="inline-flex items-center text-lg font-medium hover:text-gray-600 transition-colors">
              SEE ALL →
            </a>
          </div>
        </div>
      </section>

      {/* Footer/Menu Section */}
      <footer className="bg-gray-900 text-gray-100 py-20 px-6">
        <div className="container mx-auto">
          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              {menuItems.slice(0, 3).map((item, index) => (
                <a key={index} href={item.href} className="block group">
                  <div className="flex items-center space-x-6">
                    <span className="text-2xl font-light">{item.number}</span>
                    <h3 className="text-3xl font-light group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
            <div className="space-y-8">
              {menuItems.slice(3).map((item, index) => (
                <a key={index} href={item.href} className="block group">
                  <div className="flex items-center space-x-6">
                    <span className="text-2xl font-light">{item.number}</span>
                    <h3 className="text-3xl font-light group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-8 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group"
              >
                <div className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                  {link.title}
                </div>
                <div className="absolute inset-0 bg-yellow-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Brand Text */}
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-light opacity-50 leading-none">
              WILDYRIFTIANWORKS
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 WILDY RIFTIAN
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <span>WEBSITE BY</span>
              <a 
                href="https://surd.studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                SURD.STUDIO
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Archieve
