import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Briefcase, Code, Mail, Compass, Atom } from 'lucide-react'

interface NavItem {
  name: string
  href: string
  icon: JSX.Element
  color: string
}

const navItems: NavItem[] = [
  { 
    name: 'Home', 
    href: '#home', 
    icon: <Home className="w-5 h-5" />, 
    color: 'from-blue-500 to-blue-600'
  },
  { 
    name: 'Projects', 
    href: '#projects', 
    icon: <Briefcase className="w-5 h-5" />, 
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'Skills', 
    href: '#skills', 
    icon: <Code className="w-5 h-5" />, 
    color: 'from-pink-500 to-pink-600'
  },
  { 
    name: 'Contact', 
    href: '#contact', 
    icon: <Mail className="w-5 h-5" />, 
    color: 'from-orange-500 to-orange-600'
  },
]

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Darker Glassmorphic Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 h-20 z-40
                 bg-black/80 backdrop-blur-[20px] border-b border-white/[0.05]
                 shadow-[0_2px_30px_rgba(0,0,0,0.5)]
                 supports-[backdrop-filter]:bg-black/60"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="#home" className="text-xl font-bold">
              <span className="text-gradient">Walter Allred</span>
            </a>
          </motion.div>

          <motion.button
            onClick={() => setIsMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-4 rounded-full bg-black/40 backdrop-blur-lg 
                     border border-white/10 shadow-lg
                     overflow-hidden group"
          >
            {/* Animated background rings */}
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    'radial-gradient(circle at center, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
                    'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)'
                  ],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full border border-white/20"
              />
            </div>

            {/* Icon */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative z-10"
            >
              <Atom className="w-5 h-5 text-white/80 group-hover:text-white
                           transition-colors duration-300" />
            </motion.div>

            {/* Glowing border */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0 0px rgba(139, 92, 246, 0.3)',
                  '0 0 0 4px rgba(139, 92, 246, 0)',
                  '0 0 0 0px rgba(139, 92, 246, 0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full"
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Enhanced Navigation Menu with Lightbox Effect */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Lightbox Overlay with enhanced cosmic effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 backdrop-blur-[12px] overscroll-none"
            >
              <div className="absolute inset-0 bg-black/80" />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.2),transparent_60%)]" />
              
              {/* Floating stars background effect */}
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.1, scale: 0 }}
                  animate={{ 
                    opacity: [0.1, 0.5, 0.1],
                    scale: [0, 1, 0],
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                  className="absolute w-1 h-1 bg-white rounded-full"
                />
              ))}
            </motion.div>

            {/* Centered Orbital Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50"
              onClick={(e) => {
                // Close menu when clicking outside the orbital circle
                const clickX = e.clientX - window.innerWidth / 2
                const clickY = e.clientY - window.innerHeight / 2
                const distanceFromCenter = Math.sqrt(clickX * clickX + clickY * clickY)
                if (distanceFromCenter > 120) {
                  setIsMenuOpen(false)
                }
              }}
            >
              <div className="relative w-[300px] h-[300px]">
                {/* Connecting Lines */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  {/* Single circular path */}
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="120"
                    fill="none"
                    stroke="url(#gradient-stroke-circle)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                    filter="url(#glow)"
                    animate={{
                      strokeDashoffset: [0, 40]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Simplified gradients */}
                  <defs>
                    <linearGradient 
                      id="gradient-stroke-circle" 
                      gradientUnits="userSpaceOnUse"
                      x1="30"
                      y1="150"
                      x2="270"
                      y2="150"
                    >
                      <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#34D399" stopOpacity="0.6" />
                    </linearGradient>

                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                </svg>

                {/* Center Element - Now Clickable */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 rounded-full bg-black/80 backdrop-blur-xl
                             border border-white/10 shadow-lg
                             flex items-center justify-center z-10
                             before:absolute before:inset-0 before:rounded-full
                             before:bg-gradient-to-b before:from-white/10 before:to-transparent
                             cursor-pointer hover:bg-black/60 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Compass className="w-10 h-10 text-purple-400" />
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl" />
                  </motion.div>
                </div>

                {/* Orbital Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {navItems.map((item, index) => {
                    const angle = (index * 360) / navItems.length
                    const radius = 120
                    
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        style={{ 
                          position: 'absolute',
                          left: `${150 + radius * Math.cos((angle * Math.PI) / 180)}px`,
                          top: `${150 + radius * Math.sin((angle * Math.PI) / 180)}px`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        onMouseEnter={() => !isMobile && setActiveIndex(index)}
                        onMouseLeave={() => !isMobile && setActiveIndex(null)}
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsMenuOpen(false)
                        }}
                      >
                        {/* Particle trail effect */}
                        <motion.div
                          animate={{ opacity: [0, 0.2, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 -z-10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                                        via-white/10 to-transparent rounded-full blur-sm" />
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          animate={{ rotate: -360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className={`
                            p-4 rounded-full relative backdrop-blur-lg
                            before:absolute before:inset-0 before:rounded-full
                            before:bg-gradient-to-b before:from-white/10 before:to-transparent
                            bg-black/60 hover:bg-black/40
                          `}
                        >
                          {item.icon}
                          <div className="absolute -inset-1 bg-white/5 rounded-full blur-sm" />
                          
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ 
                              opacity: isMobile || activeIndex === index ? 1 : 0,
                              y: isMobile || activeIndex === index ? 0 : 10
                            }}
                            className="absolute top-14 left-1/2 -translate-x-1/2
                                     px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md
                                     text-sm whitespace-nowrap border border-white/10
                                     shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                          >
                            {item.name}
                          </motion.span>
                        </motion.div>
                      </motion.a>
                    )
                  })}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 