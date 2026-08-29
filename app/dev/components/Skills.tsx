import { skills } from "../data";
import { motion } from "framer-motion";
import SectionNumber from "./SectionNumber";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-4 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <SectionNumber number="04" title="Skills" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/8 dark:bg-[#0b121c]"
            >

              <span className="font-mono text-sm text-[#449690]">
                {category.toUpperCase()}
              </span>

              <div className="mt-7 flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-sm transition hover:border-[#449690] hover:text-[#449690] dark:border-white/8"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
