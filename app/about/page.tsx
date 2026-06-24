import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Navbar gap={true} />
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-gray-100 px-6">
        <div className="text-center max-w-xl">
          <div className="mb-6">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-white text-3xl">
              🚧
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Under Construction
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            We&apos;re working hard to bring something amazing.
            This page will be available soon.
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="h-2 w-2 rounded-full bg-black animate-bounce"></div>
            <div
              className="h-2 w-2 rounded-full bg-black animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="h-2 w-2 rounded-full bg-black animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
