import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import ContactForm from "@/components/common/ContactForm";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Navbar gap={true} />
      <ContactForm className="mt-22 sm:mt-30" />
      <Footer />
    </div>
  );
}
