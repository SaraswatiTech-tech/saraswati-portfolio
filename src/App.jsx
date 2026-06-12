import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AnimatedBackground from './components/Background/AnimatedBackground'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Certifications from './sections/Certifications/Certifications'
import Tools from './sections/Tools/Tools'
import Contact from './sections/Contact/Contact'

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 body-section w-full pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
