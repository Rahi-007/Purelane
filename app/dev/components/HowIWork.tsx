import { motion } from "framer-motion";
import SectionNumber from "./SectionNumber";

export default function HowIWork() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      text: "Understand the problem, requirements and expected outcome.",
    },
    {
      number: "02",
      title: "Design",
      text: "Plan architecture, data flow and user experience.",
    },
    {
      number: "03",
      title: "Build",
      text: "Develop clean, maintainable and scalable features.",
    },
    {
      number: "04",
      title: "Test",
      text: "Test functionality, edge cases and application behavior.",
    },
    {
      number: "05",
      title: "Deploy",
      text: "Deploy the application and continuously improve it.",
    },
  ];

  return (
    <section className="px-4 py-32">

      <div className="mx-auto max-w-7xl">

        <SectionNumber number="05" title="How I Build" />

        <div className="mt-16 grid gap-5 md:grid-cols-5">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-2 hover:border-[#449690]/40 dark:border-white/8 dark:bg-[#0b121c]"
            >

              <span className="font-mono text-xs text-[#449690]">
                {step.number}
              </span>

              <h3 className="mt-7 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {step.text}
              </p>

              {index < steps.length - 1 && (
                <div className="mt-7 hidden text-[#449690]/40 md:block">
                  →
                </div>
              )}

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}