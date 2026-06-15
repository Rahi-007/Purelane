import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="md:w-[40%] md:pr-10">
          <Image
            src="/logo.jpeg"
            alt="Purelane Logo"
            width={190}
            height={190}
            className="w-auto mb-4"
          />

          <p className="text-gray-400 text-sm leading-6 text-justify">
            Discover premium products designed to elevate your everyday
            lifestyle. Quality, comfort, and convenience delivered to your
            doorstep.
          </p>
        </div>

        <div className="md:w-[30%] md:ml-14">
          <h3 className="text-lg md:text-xl font-semibold mb-5">Get in Touch</h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p>PURELANE</p>

            <p>
              2841 Wellman Ave
              <br />
              Bronx, NY 10461
              <br />
              United States
            </p>

            <a
              href="tel:+18008294933"
              className="block hover:text-white transition">
              1-800-829-4933
            </a>

            <a
              href="mailto:support@aamiramart.com"
              className="block hover:text-white transition">
              support@purelane.com
            </a>
          </div>
        </div>

        <div className="md:w-[30%]">
          <h3 className="text-lg md:text-xl font-semibold mb-5">Our Policy</h3>

          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <Link
              href="/shipping-policy"
              className="hover:text-white transition">
              Shipping Policy
            </Link>

            <Link href="/refund-policy" className="hover:text-white transition">
              Refund & Returns Policy
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link
              href="/order-tracking"
              className="hover:text-white transition">
              Order Tracking
            </Link>

            <Link href="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-2 sm:px-0">
        <p className="text-center text-xs text-gray-500 py-3 sm:py-5">
          © {new Date().getFullYear()} Purelane. All Rights Reserved. Built for
          a better shopping experience.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
