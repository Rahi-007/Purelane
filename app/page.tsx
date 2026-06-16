import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import BestBuy from "@/components/common/BestBuy";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Navbar />
      <BestBuy />
      <Footer />
    </div>
  );
}
