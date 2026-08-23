"use client";

import { useRef } from "react";
import { fadeUp } from "@/lib/motion.utils";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Page() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      className="dev-scrollbar pb-20 md:pb-20 xl:pb-41"
      style={{
        background: `
          radial-gradient(
            circle at 15% 5%,
            rgba(79, 209, 197, 0.06) 0%,
            transparent 40%
          ),
          radial-gradient(
            circle at 85% 15%,
            rgba(99, 102, 241, 0.05) 0%,
            transparent 40%
          ),
          #080d16
        `,
      }}
    >
      <motion.div
        className="fixed left-0 top-0 z-9999 h-0.5 w-full origin-left bg-[#4da6a0] shadow-[0_0_8px_rgba(77,166,160,0.35)]"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        custom={{ y: 30 }}
        className="mx-auto max-w-7xl px-4"
      >
        <StackCard
          index={0}
          title="About Me"
          description="A passionate Full Stack Web Developer building modern and scalable web applications."
        />

        <StackCard
          index={1}
          title="Experience"
          description="Hands-on experience working with React, Next.js, NestJS, ASP.NET and PostgreSQL."
        />

        <StackCard
          index={2}
          title="Projects"
          description="Building real-world products with clean architecture and modern UI."
        />

        <StackCard
          index={3}
          title="Skills"
          description="React.js, Next.js, TypeScript, NestJS, ASP.NET, PostgreSQL and more."
        />
      </motion.div>
    </div>
  );
}

function StackCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0.94, 0.98, 1]
  );

  return (
    <div
      ref={ref}
      className="sticky mb-8"
      style={{
        top: `${96 + index * 18}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          y,
        }}
        className="
          relative
          min-h-105
          overflow-hidden
          rounded-3xl
          border
          border-white/8
          bg-[#0b121c]/95
          p-8
          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
          sm:p-12
        "
      >
        {/* Cyan Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-72
            w-72
            rounded-full
            bg-[#4da6a0]/6
            blur-3xl
          "
        />

        {/* Purple Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-72
            w-72
            rounded-full
            bg-[#6366f1]/5
            blur-3xl
          "
        />

        {/* Subtle border glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-3xl
            ring-1
            ring-inset
            ring-white/2.5
          "
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Number */}
          <span className="font-mono text-sm text-[#4da6a0]">
            0{index + 1}
          </span>

          {/* Title */}
          <h2
            className="
              mt-5
              text-4xl
              font-bold
              tracking-tight
              text-[#e7ecf7]
              sm:text-5xl
            "
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-[#7f8db0]
            "
          >
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { JetBrains_Mono, Inter } from "next/font/google";
// import { fadeUp2 } from "@/lib/motion.utils";
// import { TABS, CONTACT_LINKS, EDUCATION, EXPERIENCE, LANGUAGES, SKILLS, STACK } from "./data";

// const mono = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   variable: "--font-mono",
// });
// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-sans",
// });

// export default function Page() {
//   const [active, setActive] = useState("hero");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setActive(entry.target.id);
//         });
//       },
//       { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
//     );
//     TABS.forEach((t) => {
//       const el = document.getElementById(t.id);
//       if (el) observer.observe(el);
//     });
//     return () => observer.disconnect();
//   }, []);

//   const scrollTo = (id: string) =>
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

//   return (
//     <div className={`${mono.variable} ${inter.variable} min-h-screen bg-[#0a0f1a] font-[family-name:var(--font-sans)] text-[#e7ecf7] selection:bg-[#4fd1c5] selection:text-[#0a0f1a]`}>
//       {/* <div className="pointer-events-none fixed inset-0 -z-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 900px 500px at 15% -10%, rgba(79,209,197,0.14), transparent 60%), radial-gradient(ellipse 700px 500px at 100% 10%, rgba(159,140,242,0.10), transparent 60%)",
//           }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//             backgroundSize: "42px 42px",
//             maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
//           }}
//         />
//       </div> */}

//       <div className="mx-auto my-7 max-w-6xl overflow-hidden rounded-2xl border border-[#1f2c45] bg-[#111a2b] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]">
//         {/* titlebar */}
//         <div className="flex items-center gap-3.5 border-b border-[#1f2c45] bg-[#0d1524] px-4 py-3">
//           <div className="flex gap-[7px]">
//             <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
//             <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
//             <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
//           </div>
//           <div className="font-[family-name:var(--font-mono)] text-[12.5px] tracking-wide text-[#7f8db0]">
//             <b className="font-semibold text-[#e7ecf7]">rahi-007</b> — portfolio — ~/rubaied-ahammed
//           </div>
//         </div>

//         {/* tabs */}
//         <div className="flex overflow-x-auto border-b border-[#1f2c45] bg-[#0d1524] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//           {TABS.map((t) => (
//             <button
//               key={t.id}
//               onClick={() => scrollTo(t.id)}
//               className={`flex flex-none items-center gap-2 whitespace-nowrap border-r border-[#1f2c45] px-4.5 py-2.5 font-[family-name:var(--font-mono)] text-[12.5px] transition-colors ${
//                 active === t.id
//                   ? "-mt-px border-t-2 border-t-[#4fd1c5] bg-[#111a2b] text-[#e7ecf7]"
//                   : "text-[#7f8db0] hover:text-[#e7ecf7]"
//               }`}
//             >
//               <span className={`h-1.5 w-1.5 rounded-full ${active === t.id ? "bg-[#4fd1c5]" : "bg-[#7f8db0]"}`} />
//               {t.label}
//             </button>
//           ))}
//         </div>

//         <div className="px-6 pb-6 pt-2 sm:px-10 sm:pt-2 md:px-16">
//           {/* HERO */}
//           <section id="hero" className="pt-6 pb-16">
//             <div className="mb-7 flex flex-wrap items-center gap-6">
//               <div className="flex h-[84px] w-[84px] items-center justify-center rounded-[14px] border border-[#1f2c45] bg-[#111a2b] font-[family-name:var(--font-mono)] text-2xl font-bold text-[#4fd1c5] shadow-[0_0_0_4px_rgba(79,209,197,0.08)]">
//                 RA
//               </div>
//               <div>
//                 <h1 className="font-[family-name:var(--font-mono)] text-3xl font-extrabold tracking-tight sm:text-4xl">
//                   <span className="text-[#9f8cf2]">const</span> dev <span className="text-[#9f8cf2]">=</span>{" "}
//                   <span className="text-[#f2b84b]">Rahi</span>();
//                 </h1>
//                 <p className="mt-1 text-[15px] text-[#4fd1c5]">Full-Stack Web Developer</p>
//                 <p className="mt-1 text-[13.5px] text-[#7f8db0]">📍 Rajshahi, Bangladesh</p>
//               </div>
//             </div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeUp2}
//               custom={{ y: 20 }}
//               className="overflow-x-auto rounded-[10px] border border-[#1f2c45] bg-[#0d1524] px-6 py-5 font-[family-name:var(--font-mono)] text-[14.5px] leading-[1.85]"
//             >
//               <div><span className="mr-4 inline-block w-3.5 select-none text-[#3c4a68]">1</span><span className="text-[#9f8cf2]">export const</span> profile = {"{"}</div>
//               <div><span className="mr-4 inline-block w-3.5 select-none text-[#3c4a68]">2</span>&nbsp;&nbsp;<span className="text-[#4fd1c5]">name</span>: <span className="text-[#8fd6a3]">&quot;Rubaied Ahammed&quot;</span>,</div>
//               <div><span className="mr-4 inline-block w-3.5 select-none text-[#3c4a68]">3</span>&nbsp;&nbsp;<span className="text-[#4fd1c5]">alias</span>: <span className="text-[#8fd6a3]">&quot;Rahi&quot;</span>,</div>
//               <div><span className="mr-4 inline-block w-3.5 select-none text-[#3c4a68]">4</span>&nbsp;&nbsp;<span className="text-[#4fd1c5]">role</span>: <span className="text-[#8fd6a3]">&quot;Full-Stack Web Developer&quot;</span>,</div>
//               <div><span className="mr-4 inline-block w-3.5 select-none text-[#3c4a68]">5</span>&nbsp;&nbsp;<span className="text-[#4fd1c5]">stack</span>: [<span className="text-[#8fd6a3]">&quot;Next.js&quot;</span>, <span className="text-[#8fd6a3]">&quot;NestJS&quot;</span>, <span className="text-[#8fd6a3]">&quot;ASP.NET&quot;</span>, <span className="text-[#8fd6a3]">&quot;PostgreSQL&quot;</span>],</div>
//               <div><span className="mr-4 inline-block w-3.5 select-none text-[#3c4a68]">6</span>&nbsp;&nbsp;<span className="text-[#4fd1c5]">available</span>: <span className="text-[#9f8cf2]">true</span>, <span className="italic text-[#5b6a8c]">open to new opportunities</span></div>
//               <div>
//                 <span className="mr-4 inline-block w-3.5 select-none text-[#3c4a68]">7</span>{"}"};
//                 <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-[#4fd1c5] align-middle motion-reduce:animate-none" />
//               </div>
//             </motion.div>

//             <div className="mt-6 flex flex-wrap gap-3">
//               <button
//                 onClick={() => scrollTo("contact")}
//                 className="rounded-lg border border-[#4fd1c5] bg-[#4fd1c5] px-4.5 py-2.5 font-[family-name:var(--font-mono)] text-[13px] font-bold text-[#0a0f1a] transition-transform hover:-translate-y-0.5 hover:bg-[#6fe0d6]"
//               >
//                 Get in touch →
//               </button>
//               <a
//                 href="https://github.com/Rahi-007"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-lg border border-[#1f2c45] px-4.5 py-2.5 font-[family-name:var(--font-mono)] text-[13px] transition-transform hover:-translate-y-0.5 hover:border-[#7f8db0]"
//               >
//                 ↗ github.com/Rahi-007
//               </a>
//               <a
//                 href="https://purelane.net/dev"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-lg border border-[#1f2c45] px-4.5 py-2.5 font-[family-name:var(--font-mono)] text-[13px] transition-transform hover:-translate-y-0.5 hover:border-[#7f8db0]"
//               >
//                 ↗ purelane.net/dev
//               </a>
//             </div>
//           </section>

//           {/* ABOUT */}
//           <Section id="about" method="GET" path="/about" title="Profile">
//             <p className="max-w-2xl text-[15.5px] leading-[1.85] text-[#c4cbe0]">
//               A passionate and dedicated <b className="text-[#e7ecf7]">Full-Stack Web Developer</b> with hands-on
//               experience building scalable web applications using modern technologies like{" "}
//               <b className="text-[#e7ecf7]">React.js</b>, <b className="text-[#e7ecf7]">Next.js</b>,{" "}
//               <b className="text-[#e7ecf7]">NestJS</b>, <b className="text-[#e7ecf7]">ASP.NET</b> and{" "}
//               <b className="text-[#e7ecf7]">PostgreSQL</b>. Comfortable working within collaborative, Agile team
//               environments — writing clean, maintainable code and solving real-world problems efficiently. Always
//               eager to learn new technologies and sharpen my craft to ship high-quality digital products.
//             </p>

//             <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
//               {LANGUAGES.map((l) => (
//                 <div key={l.name} className="rounded-lg border border-[#1f2c45] bg-[#0d1524] p-3.5">
//                   <div className="text-[13.5px] font-semibold text-[#e7ecf7]">{l.name}</div>
//                   <div className="mt-2 h-[5px] overflow-hidden rounded-full bg-[#1c2740]">
//                     <div className="h-full rounded-full bg-[#4fd1c5]" style={{ width: `${l.level}%` }} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Section>

//           {/* STACK */}
//           <Section id="stack" method="GET" path="/stack" title="Tech Stack" sub="Tools and technologies I build with, day to day.">
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               {STACK.map((group) => (
//                 <div key={group.key} className="rounded-[10px] border border-[#1f2c45] bg-[#0d1524] p-5">
//                   <span className="mb-3 block font-[family-name:var(--font-mono)] text-[12.5px] text-[#7f8db0]">
//                     &quot;{group.key}&quot;: [
//                   </span>
//                   <div className="flex flex-wrap gap-1.5">
//                     {group.items.map((item) => (
//                       <span
//                         key={item}
//                         className="rounded-md border border-[#1f2c45] bg-white/[0.03] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[#c4cbe0]"
//                       >
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Section>

//           {/* EXPERIENCE */}
//           <Section id="experience" method="GET" path="/experience" title="Work Experience" sub="A commit history of what I've shipped.">
//             {EXPERIENCE.map((job) => (
//               <div key={job.hash} className="grid grid-cols-[26px_1fr] gap-4">
//                 <div className="relative flex justify-center">
//                   <div className="absolute top-[22px] bottom-[-8px] w-px bg-[#1f2c45]" />
//                   <div className="z-10 mt-1.5 h-[11px] w-[11px] rounded-full border-2 border-[#4fd1c5] bg-[#0a0f1a]" />
//                 </div>
//                 <div>
//                   <div className="mb-1 flex flex-wrap items-baseline gap-2.5">
//                     <span className="font-[family-name:var(--font-mono)] text-[12.5px] text-[#f2b84b]">{job.hash}</span>
//                     <span className="text-[17px] font-bold text-[#e7ecf7]">{job.role}</span>
//                     <span className="text-sm text-[#4fd1c5]">@ {job.org}</span>
//                   </div>
//                   <div className="mb-4 font-[family-name:var(--font-mono)] text-xs text-[#7f8db0]">{job.date}</div>
//                   <ul className="max-w-xl space-y-2">
//                     {job.diffs.map((line, i) => (
//                       <li key={i} className="relative pl-5 text-[14.5px] leading-relaxed text-[#c4cbe0]">
//                         <span className="absolute left-0 font-[family-name:var(--font-mono)] font-bold text-[#5fd177]">+</span>
//                         {line}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </Section>

//           {/* EDUCATION */}
//           <Section id="education" method="GET" path="/education" title="Education">
//             {EDUCATION.map((e, i) => (
//               <div
//                 key={e.school}
//                 className={`flex flex-wrap items-start justify-between gap-5 py-4.5 ${i !== 0 ? "border-t border-[#1f2c45]" : ""}`}
//               >
//                 <div>
//                   <div className="text-[15px] font-semibold text-[#e7ecf7]">{e.school}</div>
//                   <div className="mt-1 text-[13.5px] text-[#7f8db0]">{e.degree}</div>
//                 </div>
//                 <div className="text-right font-[family-name:var(--font-mono)] text-[12.5px] text-[#f2b84b]">
//                   {e.period}
//                   <span className="mt-1 block text-[#7f8db0]">{e.gpa}</span>
//                 </div>
//               </div>
//             ))}
//           </Section>

//           {/* SKILLS */}
//           <Section id="skills" method="GET" path="/skills" title="Skills">
//             <div className="flex flex-wrap gap-2">
//               {SKILLS.map((s) => (
//                 <span
//                   key={s}
//                   className="flex items-center gap-2 rounded-full border border-[#1f2c45] bg-[#0d1524] px-3.5 py-2 text-[13px] text-[#c4cbe0]"
//                 >
//                   <span className="font-[family-name:var(--font-mono)] text-[#ef7a8a]">#</span>
//                   {s}
//                 </span>
//               ))}
//             </div>
//           </Section>

//           {/* CONTACT */}
//           <section id="contact" className="pt-16">
//             <RouteTag method="POST" path="/contact" />
//             <div className="grid grid-cols-1 items-center gap-6 rounded-[10px] border border-[#1f2c45] bg-[#0d1524] p-7 sm:grid-cols-[1fr_auto]">
//               <div>
//                 <h3 className="font-[family-name:var(--font-mono)] text-[19px] font-bold">
//                   <span className="text-[#9f8cf2]">function</span> letsTalk() {"{}"}
//                 </h3>
//                 <p className="mt-2 text-sm text-[#7f8db0]">
//                   Open to full-stack roles and freelance projects — reach out any time.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2.5">
//                 {CONTACT_LINKS.map((c) => (
//                   <a
//                     key={c.label}
//                     href={c.href}
//                     target={c.href.startsWith("http") ? "_blank" : undefined}
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2.5 whitespace-nowrap rounded-lg border border-[#1f2c45] px-3.5 py-2.5 font-[family-name:var(--font-mono)] text-[13px] text-[#e7ecf7] transition-all hover:translate-x-1 hover:border-[#4fd1c5]"
//                   >
//                     <span className="text-[#4fd1c5]">{c.icon}</span> {c.label}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>

//       <footer className="pb-6 pt-4 text-center font-[family-name:var(--font-mono)] text-xs text-[#7f8db0]">
//          built with care — ©2026 all rights reserved.
//       </footer>
//     </div>
//   );
// }

// /* ---------------- helpers ---------------- */

// function RouteTag({ method, path }: { method: string; path: string }) {
//   return (
//     <div className="mb-6 flex items-center gap-3 text-[12.5px]">
//       <span className="rounded-md border border-[#4fd1c5]/35 bg-[#4fd1c5]/[0.14] px-2.5 py-1 font-[family-name:var(--font-mono)] font-bold tracking-wide text-[#4fd1c5]">
//         {method}
//       </span>
//       <span className="font-[family-name:var(--font-mono)] text-[#7f8db0]">{path}</span>
//       <span className="hidden h-px flex-1 bg-[#1f2c45] sm:block" />
//       <span className="hidden text-[#5fd177]/85 sm:inline">200 OK</span>
//     </div>
//   );
// }

// function Section({
//   id,
//   method,
//   path,
//   title,
//   sub,
//   children,
// }: {
//   id: string;
//   method: string;
//   path: string;
//   title: string;
//   sub?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <motion.section
//       id={id}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={fadeUp2}
//       custom={{ y: 30 }}
//       className="border-b border-dashed border-[#1f2c45] py-16 last:border-b-0"
//     >
//       <RouteTag method={method} path={path} />
//       <h2 className="mb-1.5 text-[22px] font-bold text-[#e7ecf7]">{title}</h2>
//       {sub && <p className="mb-7 text-[13.5px] text-[#7f8db0]">{sub}</p>}
//       {!sub && <div className="mb-7" />}
//       {children}
//     </motion.section>
//   );
// }