import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Sustainability from "@/components/sections/Sustainability";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Bay State Pallet | Premium Wooden Pallets & Crates | Massachusetts</title>
        <meta name="description" content="Bay State Pallet - Premium wooden pallets, crates and packaging solutions. Sustainable, reliable and custom-designed for your logistics needs." />
      </Helmet>
      
      {/* Announcement Bar */}
      <div className="bg-secondary text-white text-center py-2 px-4">
        <p className="text-sm md:text-base">
          <span className="font-bold">Now offering sustainable recycled pallets!</span>{" "}
          <a href="#contact" className="underline hover:text-white/80 transition">
            Contact us for details
          </a>
        </p>
      </div>
      
      <Header />
      
      <main>
        <Hero />
        <Benefits />
        <About />
        <Products />
        <Services />
        <Sustainability />
        <Industries />
        <Testimonials />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
