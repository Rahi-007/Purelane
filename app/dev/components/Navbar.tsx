export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-[#080d16]/70">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4">

        <a
          href="#hero"
          className="font-mono text-lg font-bold tracking-tight"
        >
          <span className="text-[#449690]">&lt;</span>
          Rahi
          <span className="text-[#449690]">/&gt;</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex dark:text-slate-400">
          <a href="#about" className="transition hover:text-[#449690]">
            About
          </a>

          <a href="#experience" className="transition hover:text-[#449690]">
            Experience
          </a>

          <a href="#projects" className="transition hover:text-[#449690]">
            Projects
          </a>

          <a href="#skills" className="transition hover:text-[#449690]">
            Skills
          </a>

          <a href="#contact" className="transition hover:text-[#449690]">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-[#449690]/30 px-4 py-2 text-sm transition hover:border-[#449690] hover:bg-[#449690]/10"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
