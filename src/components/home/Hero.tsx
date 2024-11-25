import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center px-4 bg-gradient-subtle">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_0%,transparent_100%)]" />
      
      <div className="section-container relative flex flex-col lg:flex-row items-center gap-12">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl"
        >
          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-purple-400 font-semibold mb-4">Product Designer & Full-Stack Developer</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Crafting Digital</span>{' '}
              <span className="text-white">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Specializing in modern web applications that combine{' '}
              <span className="text-purple-400">elegant design</span> with{' '}
              <span className="text-purple-400">powerful functionality</span>.
              Let's build something extraordinary together.
            </p>
          </motion.div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                       rounded-full text-white font-semibold shadow-lg 
                       hover:shadow-purple-500/25 transition-all text-center"
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-500/50 rounded-full
                       text-white font-semibold hover:bg-purple-500/10 
                       transition-all text-center group"
            >
              Let's Talk
              <ArrowDown className="w-4 h-4 inline-block ml-2 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </div>

          {/* Social Proof & Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {/* Quick Stats */}
            <div className="flex gap-8 text-sm text-gray-400">
              <div>
                <span className="text-white font-bold">5+ Years</span> Experience
              </div>
              <div>
                <span className="text-white font-bold">50+</span> Projects Completed
              </div>
              <div>
                <span className="text-white font-bold">100%</span> Client Satisfaction
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                         transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                         transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                         transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Element - Could be an image, animation, or code snippet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 w-full max-w-xl aspect-square rounded-2xl 
                   bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                   border border-white/10 backdrop-blur-sm"
        >
          {/* Add your hero image or animation here */}
        </motion.div>
      </div>
    </section>
  )
}

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen section-container">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="gradient-border p-6 rounded-xl"
          >
            <div className="h-48 bg-purple-500/10 rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Project {i + 1}</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen section-container bg-gradient-subtle">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="gradient-border p-6 rounded-xl text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20" />
            <h3 className="text-lg font-bold mb-2">Skill {i + 1}</h3>
            <p className="text-gray-400 text-sm">
              Expertise level: Advanced
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen section-container">
      <h2 className="section-title">Get in Touch</h2>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="gradient-border p-8 rounded-xl"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 
                         focus:border-purple-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 
                         focus:border-purple-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 
                         focus:border-purple-500 outline-none transition-colors"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                       rounded-full text-white font-semibold shadow-lg 
                       hover:shadow-purple-500/25 transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 