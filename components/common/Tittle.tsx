import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IProps {
  title: string;
  link?: string;
}

const Title = ({ title, link }: IProps) => {
  return (
    <div className="flex items-center justify-between py-6 px-2 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 relative inline-block">
        {title}
        <span className="absolute left-0 -bottom-2 h-1 w-16 bg-cyan-700 rounded-full" />
      </h2>

      {link && (<Link
        href="/"
        className="group flex items-center gap-2 text-cyan-700 font-medium hover:text-cyan-900 transition"
      >
        See More
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
      )}
    </div>
  );
};

export default Title;