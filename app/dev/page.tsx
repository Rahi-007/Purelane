"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import HowIWork from "./components/HowIWork";


export default function Portfolio() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900 transition-colors duration-500 dark:bg-[#080d16] dark:text-[#e7ecf7]">
      <motion.div
        className="fixed left-0 top-0 z-9999 h-0.5 w-full origin-left bg-[#449690]"
        style={{ scaleX: progress }}
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <HowIWork />
      <Contact />
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-white/5 dark:text-slate-500">
        © {new Date().getFullYear()} Rahi. Built with Next.js & Framer Motion.
      </footer>
    </main>
  );
}