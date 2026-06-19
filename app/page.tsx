import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import BestBuy from "@/components/common/BestBuy";
import CategoryList from "@/components/product/Category";
import BenefitsSection from "@/components/common/BenefitsSection";
import LatestProduct from "@/components/common/LatestProduct";
import ContactForm from "@/components/common/ContactForm";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Navbar />
      <BestBuy />
      <CategoryList />
      <BenefitsSection />
      <LatestProduct />
      <ContactForm className="mt-12" />
      <Footer />
    </div>
  );
}
