import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

// Components
import Navbar from './components/Navbar/Navbar';
import CustomCursor from './components/common/CustomCursor';
import Banner from './components/common/Banner';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Research from './pages/Projects/Research';
import About from './pages/About/About';
import Art from './pages/Art/Art';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1,
      lerp: 0.1
    });

    // Cleanup
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <Banner />
      <main data-scroll-container>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/portfolio" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            } />
            <Route path="/portfolio/research" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Research />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            } />
            <Route path="/art" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Art />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
