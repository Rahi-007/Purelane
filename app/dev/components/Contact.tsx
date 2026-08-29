import { motion } from "framer-motion";
import SectionNumber from "./SectionNumber";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 py-32"
    >
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 text-center dark:border-white/8 dark:bg-[#0b121c] sm:p-16"
        >

          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#449690]/10 blur-[100px]" />

          <div className="relative">

            <SectionNumber
              number="06"
              title="Let's Build Something"
              center
            />

            <p className="mx-auto mt-7 max-w-xl leading-8 text-slate-600 dark:text-slate-400">
              Have an idea, project or opportunity? I&apos;d love to hear about it.
              Let&apos;s build something useful together.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <a
                href="mailto:your@email.com"
                className="rounded-full bg-[#449690] px-7 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                Send Me an Email
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-200 px-7 py-3 text-sm font-medium transition hover:border-[#449690] hover:text-[#449690] dark:border-white/10"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-200 px-7 py-3 text-sm font-medium transition hover:border-[#449690] hover:text-[#449690] dark:border-white/10"
              >
                LinkedIn
              </a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}