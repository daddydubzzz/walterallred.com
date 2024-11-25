import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass } from 'lucide-react'
import { 
  Planet,         // Home - represents our world/starting point
  Rocket,         // Projects - represents launches/creations
  Sparkle,        // Changed from SparkleSquare
  Meteor          // Changed from Comet
} from "@phosphor-icons/react"
import StarField from './StarField'

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
    icon: <Planet weight="duotone" className="w-6 h-6" />, 
    color: 'from-blue-500 to-blue-600'
  },
  { 
    name: 'Projects', 
    href: '#projects', 
    icon: <Rocket weight="duotone" className="w-6 h-6" />, 
    color: 'from-zinc-400 to-zinc-600'
  },
  { 
    name: 'Skills', 
    href: '#skills', 
    icon: <Sparkle weight="duotone" className="w-6 h-6" />, 
    color: 'from-pink-500 to-pink-600'
  },
  { 
    name: 'Contact', 
    href: '#contact', 
    icon: <Meteor weight="duotone" className="w-6 h-6" />, 
    color: 'from-orange-500 to-orange-600'
  },
]

// Constants for SVG orbit circles
const ORBIT_RADII = {
  HOME: 70,
  PROJECTS: 100,
  SKILLS: 130,
  CONTACT: 160
}

// Constants for menu item positions
const MENU_POSITIONS = {
  HOME: 30,
  PROJECTS: 70,
  SKILLS: 150,
  CONTACT: 180
}

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    let scrollPosition = 0;

    if (isMenuOpen) {
      // Store the current scroll position
      scrollPosition = window.scrollY;
      // Prevent scrolling while menu is open
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      // Restore scrolling and position when menu closes
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      // Only restore scroll if we have a stored position
      if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
      }
    }

    return () => {
      // Cleanup styles
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      // Restore scroll position on unmount if menu was open
      if (isMenuOpen && scrollPosition) {
        window.scrollTo(0, scrollPosition);
      }
    };
  }, [isMenuOpen]);

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
            className="relative p-1 rounded-full bg-black/60 backdrop-blur-xl
                     border border-white/20 shadow-lg
                     flex items-center justify-center
                     before:absolute before:inset-0 before:rounded-full
                     before:bg-gradient-to-b before:from-white/20 before:to-transparent
                     overflow-hidden group"
          >
            {/* Rotating compass with enhanced effects */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="relative z-10 p-1.5"
            >
              <Compass className="w-8 h-8 text-purple-400/90
                       drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]
                       group-hover:text-white
                       transition-all duration-300
                       [stroke-width:1.0]" />
            </motion.div>

            {/* Reduced glow effect */}
            <div className="absolute inset-0 rounded-full opacity-30
                          bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.1),transparent_50%)]" />

            {/* Subtle shine effect */}
            <div className="absolute inset-0 rounded-full 
                          bg-gradient-to-br from-white/3 via-transparent to-transparent" />
          </motion.button>
        </div>
      </motion.div>

      {/* Enhanced Navigation Menu with Lightbox Effect */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Lightbox Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[40] backdrop-blur-[12px] overscroll-none"
            >
              <div className="absolute inset-0 bg-black/80" />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.2),transparent_60%)]" />
            </motion.div>

            {/* StarField component */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StarField />
            </motion.div>

            {/* Centered Orbital Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
                  className="absolute inset-0 w-[400px] h-[400px] -translate-x-[50px] -translate-y-[50px] pointer-events-none"
                  viewBox="0 0 400 400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Create an orbit path for each menu item */}
                  {navItems.map((_, index) => {
                    const orbitRadius = [
                      ORBIT_RADII.HOME,
                      ORBIT_RADII.PROJECTS,
                      ORBIT_RADII.SKILLS,
                      ORBIT_RADII.CONTACT
                    ][index]
                    
                    return (
                      <circle
                        key={`orbit-${index}`}
                        cx="200"
                        cy="200"
                        r={orbitRadius}
                        fill="none"
                        stroke={`url(#gradient-stroke-${index})`}
                        strokeWidth={1}
                        strokeLinecap="round"
                        filter="url(#glow)"
                      />
                    )
                  })}

                  {/* Updated gradients for each orbit */}
                  <defs>
                    {/* Home orbit gradient - Cyan theme */}
                    <linearGradient 
                      id="gradient-stroke-0" 
                      gradientUnits="userSpaceOnUse"
                      x1="80" y1="200" x2="320" y2="200"
                    >
                      <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.3" />
                    </linearGradient>

                    {/* Projects orbit gradient - Violet theme */}
                    <linearGradient 
                      id="gradient-stroke-1" 
                      gradientUnits="userSpaceOnUse"
                      x1="80" y1="200" x2="320" y2="200"
                    >
                      <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    </linearGradient>

                    {/* Skills orbit gradient - Rose theme */}
                    <linearGradient 
                      id="gradient-stroke-2" 
                      gradientUnits="userSpaceOnUse"
                      x1="80" y1="200" x2="320" y2="200"
                    >
                      <stop offset="0%" stopColor="#FB7185" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#E11D48" stopOpacity="0.3" />
                    </linearGradient>

                    {/* Contact orbit gradient - Amber theme */}
                    <linearGradient 
                      id="gradient-stroke-3" 
                      gradientUnits="userSpaceOnUse"
                      x1="80" y1="200" x2="320" y2="200"
                    >
                      <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
                    </linearGradient>

                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                </svg>

                {/* Center Element - faster rotation */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full bg-black/80 backdrop-blur-xl
                             border border-white/30 shadow-lg
                             flex items-center justify-center z-10
                             before:absolute before:inset-0 before:rounded-full
                             before:bg-gradient-to-b before:from-white/10 before:to-transparent
                             cursor-pointer hover:bg-black/60 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Compass className="w-10 h-10 text-purple-400 stroke-[1.0]" />
                    </motion.div>
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl" />
                  </motion.div>
                </div>

                {/* Orbital Ring - slower rotation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {navItems.map((item, index) => {
                    const angle = (index * 360) / navItems.length
                    const baseRadius = [
                      MENU_POSITIONS.HOME,
                      MENU_POSITIONS.PROJECTS,
                      MENU_POSITIONS.SKILLS,
                      MENU_POSITIONS.CONTACT
                    ][index]
                    
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 1, scale: 1 }}
                        style={{ 
                          position: 'absolute',
                          left: "150px",
                          top: "150px",
                        }}
                        animate={{
                          x: [
                            baseRadius * Math.cos((angle * Math.PI) / 180),
                            baseRadius * (1 + Math.max(0, Math.cos((angle * Math.PI) / 180)) * 0.3) * Math.cos((angle * Math.PI) / 180),
                            baseRadius * Math.cos((angle * Math.PI) / 180)
                          ],
                          y: [
                            baseRadius * Math.sin((angle * Math.PI) / 180),
                            baseRadius * (1 + Math.max(0, Math.cos((angle * Math.PI) / 180)) * 0.3) * Math.sin((angle * Math.PI) / 180),
                            baseRadius * Math.sin((angle * Math.PI) / 180)
                          ]
                        }}
                        transition={{
                          duration: 50,
                          repeat: Infinity,
                          ease: "linear",
                          times: [0, 0.5, 1]
                        }}
                        className="pointer-events-none"  // Disable pointer events on the entire anchor
                      >
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            window.location.href = item.href
                            setIsMenuOpen(false)
                          }}
                          onMouseEnter={() => !isMobile && setActiveIndex(index)}
                          onMouseLeave={() => !isMobile && setActiveIndex(null)}
                          className={`
                            p-4 rounded-full relative backdrop-blur-lg
                            before:absolute before:inset-0 before:rounded-full
                            before:bg-gradient-to-b before:from-white/10 before:to-transparent
                            ${index === 0 && 'bg-cyan-500/20 hover:bg-cyan-500/30 z-[40]'}
                            ${index === 1 && 'bg-violet-500/20 hover:bg-violet-500/30 z-[30]'}
                            ${index === 2 && 'bg-rose-500/20 hover:bg-rose-500/30 z-[20]'}
                            ${index === 3 && 'bg-amber-500/20 hover:bg-amber-500/30 z-[10]'}
                            transition-colors duration-300
                            pointer-events-auto cursor-pointer
                          `}
                        >
                          {/* Icon without any glow effects */}
                          <div className="relative z-10">
                            <div className={`
                              text-white/90 group-hover:text-transparent
                              group-hover:bg-clip-text group-hover:bg-gradient-to-r
                              ${item.color}
                            `}>
                              {item.icon}
                            </div>
                          </div>
                          
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ 
                              opacity: isMobile || activeIndex === index ? 1 : 0,
                              y: isMobile || activeIndex === index ? 0 : 10
                            }}
                            className={`
                              absolute top-14 left-1/2 -translate-x-1/2
                              px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md
                              text-sm whitespace-nowrap border border-white/10
                              shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                              pointer-events-none
                              ${index === 0 && 'z-[45]'}
                              ${index === 1 && 'z-[35]'}
                              ${index === 2 && 'z-[25]'}
                              ${index === 3 && 'z-[15]'}
                            `}
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