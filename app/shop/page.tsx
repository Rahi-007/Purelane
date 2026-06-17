import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Navbar gap={true} />
      <Footer />
    </div>
  );
}
