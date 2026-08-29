import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-[10%] top-[20%] h-80 w-80 rounded-full bg-[#449690]/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[10%] top-[25%] h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl pt-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="mb-5 font-mono text-sm text-[#449690]">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Md. Rubaied
            <br />
            <span className="text-slate-400 dark:text-slate-500">
              Ahammed Rahi.
            </span>
          </h1>

          <h2 className="mt-7 text-2xl font-medium sm:text-3xl">
            Full Stack Web Developer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            I build modern, scalable and production-ready web applications
            with clean architecture, thoughtful UI and reliable backend
            systems.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-[#449690] px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-[#3d8883]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium transition hover:border-[#449690] hover:text-[#449690] dark:border-white/10"
            >
              Contact Me
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "NestJS", "ASP.NET", "PostgreSQL"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/60 px-4 py-2 font-mono text-xs text-slate-600 dark:border-white/8 dark:bg-white/2 dark:text-slate-400"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-0 hidden font-mono text-xs text-slate-400 lg:block"
        >
          Scroll to explore ↓
        </motion.div>
      </div>
    </section>
  );
}