import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data";

export default function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.94, 0.98, 1]
  );

  return (
    <motion.article
      ref={ref}
      style={{
        scale,
        top: `${100 + index * 20}px`,
      }}
      className="sticky overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30 dark:border-white/8 dark:bg-[#0b121c] dark:shadow-black/20 sm:p-12"
    >

      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">

        {/* Fake Project Preview */}
        <div className="flex min-h-64 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 dark:bg-[#080d16]">

          <div className="text-center">
            <span className="font-mono text-6xl font-bold text-[#449690]/20">
              0{index + 1}
            </span>

            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              Project Preview
            </p>
          </div>

        </div>

        <div className="flex flex-col justify-center">

          <span className="font-mono text-sm text-[#449690]">
            {project.type}
          </span>

          <h3 className="mt-4 text-4xl font-bold">
            {project.title}
          </h3>

          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-100 px-3 py-1.5 font-mono text-xs text-slate-600 dark:bg-white/5 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-[#449690] px-5 py-2.5 text-sm text-white transition hover:bg-[#3d8883]">
              Live Demo
            </button>

            <button className="rounded-full border border-slate-200 px-5 py-2.5 text-sm transition hover:border-[#449690] hover:text-[#449690] dark:border-white/10">
              GitHub
            </button>
          </div>

        </div>

      </div>
    </motion.article>
  );
}