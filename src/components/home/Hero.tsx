import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-gradient">Creative Developer</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Transforming ideas into elegant, interactive web experiences through 
          creative coding and innovative design.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                   rounded-full text-white font-semibold shadow-lg 
                   hover:shadow-purple-500/25"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  )
} 