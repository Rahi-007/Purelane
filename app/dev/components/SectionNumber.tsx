export default function SectionNumber({
  number,
  title,
  center = false,
}: {
  number: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>

      <div
        className={`flex items-center gap-4 ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-sm text-[#449690]">
          {number}
        </span>

        <span className="h-px w-10 bg-[#449690]/30" />

        <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
          Section
        </span>
      </div>

      <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
        {title}
      </h2>

    </div>
  );
}