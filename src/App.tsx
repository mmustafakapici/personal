import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import TypedText from './components/TypedText';
import useThemeStore from './stores/themeStore';
import PersonalInfo from './components/PersonalInfo';
import Languages from './components/Languages';
import SocialProfiles from './components/SocialProfiles';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-black' : 'bg-white'}`}>
      <ParticlesBackground />
      
      <div className="relative z-10">
        <nav className="fixed top-0 w-full bg-opacity-80 backdrop-blur-sm p-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-geist text-2xl font-bold dark:text-white"
          >
            MK
          </motion.h1>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? <Sun className="text-white" /> : <Moon />}
          </button>
        </nav>

        <main className="container mx-auto px-4 pt-24 pb-12">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="font-geistMono text-4xl md:text-6xl font-bold mb-4 dark:text-white">
              Mustafa KAPICI
            </h1>
            <h2 className="font-geist text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Computer Engineer
            </h2>
            <div className="text-lg mb-8">
              <TypedText />
            </div>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I am a Computer & Software Engineering Student with advanced knowledge in software development at all stages. 
              My expertise lies in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Image Processing.
            </p>
          </motion.section>

          <div className="max-w-4xl mx-auto space-y-24">
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certificates />
            <ContactForm />
            <PersonalInfo />
            <Languages />
            <SocialProfiles />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;