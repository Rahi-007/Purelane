import { motion } from "framer-motion";
import SectionNumber from "./SectionNumber";

export default function Experience() {
  const experiences = [
    {
      year: "2025 — 2026",
      title: "Software Developer",
      company: "ERP Software Company",
      description:
        "Worked on business applications, REST APIs, database systems and frontend interfaces.",
    },
    {
      year: "2024 — 2025",
      title: "Full Stack Development",
      company: "Independent Projects",
      description:
        "Built full-stack applications using React, Next.js, NestJS, PostgreSQL and modern development tools.",
    },
  ];

  return (
    <section
      id="experience"
      className="px-4 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <SectionNumber number="02" title="Experience" />

        <div className="relative mt-16">

          <div className="absolute left-2.75 top-0 h-full w-px bg-slate-200 dark:bg-white/10" />

          <div className="space-y-14">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-[#f7f9fc] bg-[#449690] dark:border-[#080d16]" />

                <span className="font-mono text-sm text-[#449690]">
                  {experience.year}
                </span>

                <h3 className="mt-3 text-2xl font-semibold">
                  {experience.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {experience.company}
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}