import { Hero } from './Hero'
import { Projects } from '../projects/Projects'
import { Skills } from './Skills'
import { Contact } from './Contact'

export const Home = () => {
  return (
    <div className="space-y-32">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
} 