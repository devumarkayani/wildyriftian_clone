import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@wildyriftian.com' },
  { icon: Phone, label: 'Phone', value: '+62 812 3456 7890' },
  { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia' }
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
]

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Message sent successfully!')
  }

  return (
    <section id="contact" className="py-20 px-4 bg-darkBrown text-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            LET'S CONNECT
          </h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Have a project in mind? Let's bring your vision to life together.
          </p>
          <div className="w-24 h-1 bg-cream mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-serif font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cream/10 border border-cream/30 rounded-lg focus:outline-none focus:border-cream text-cream placeholder-cream/50"
                  />
                </motion.div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cream/10 border border-cream/30 rounded-lg focus:outline-none focus:border-cream text-cream placeholder-cream/50"
                  />
                </motion.div>
              </div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-cream/10 border border-cream/30 rounded-lg focus:outline-none focus:border-cream text-cream placeholder-cream/50"
                />
              </motion.div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-cream/10 border border-cream/30 rounded-lg focus:outline-none focus:border-cream text-cream placeholder-cream/50 resize-none"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-8 py-4 bg-cream text-darkBrown font-semibold rounded-lg hover:bg-cream/90 transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-darkBrown border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-serif font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-cream/80">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-cream/20">
              <h4 className="text-xl font-serif font-bold mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center hover:bg-cream/30 transition-colors duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-12 p-6 bg-cream/10 rounded-2xl archive-folder"
            >
              <p className="text-cream/80 italic">
                "Every great design begins with an even better story. Let's write yours together."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact