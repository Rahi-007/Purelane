import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionNumber from "./SectionNumber";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative px-4 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div style={{ y }}>

          <SectionNumber number="01" title="About Me" />

          <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">

            <div>
              <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Building software is not just about writing code.
              </h3>

              <p className="mt-7 leading-8 text-slate-600 dark:text-slate-400">
                I am a Full Stack Web Developer passionate about building
                modern web applications. I enjoy working across both frontend
                and backend, from designing interfaces to building APIs,
                authentication systems and database architecture.
              </p>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                My goal is to create applications that are not only visually
                appealing, but also maintainable, scalable and reliable.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/8 dark:bg-[#0b121c]">

              <p className="font-mono text-sm text-[#449690]">
                CURRENT FOCUS
              </p>

              <div className="mt-7 space-y-5">
                {[
                  "Full Stack Development",
                  "Backend Architecture",
                  "Modern UI / UX",
                  "Scalable Web Applications",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <span className="font-mono text-xs text-slate-400">
                      0{index + 1}
                    </span>

                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}