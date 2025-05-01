import { useState } from "react";
import Logo from "@/components/ui/Logo";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a
              href="#about"
              className="text-neutral-800 hover:text-primary font-semibold transition duration-300"
            >
              About
            </a>
            <a
              href="#products"
              className="text-neutral-800 hover:text-primary font-semibold transition duration-300"
            >
              Products
            </a>
            <a
              href="#services"
              className="text-neutral-800 hover:text-primary font-semibold transition duration-300"
            >
              Services
            </a>
            <a
              href="#sustainability"
              className="text-neutral-800 hover:text-primary font-semibold transition duration-300"
            >
              Sustainability
            </a>
            <a
              href="#gallery"
              className="text-neutral-800 hover:text-primary font-semibold transition duration-300"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-md transition duration-300"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-neutral-800 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <i className="fas fa-times text-2xl"></i>
            ) : (
              <i className="fas fa-bars text-2xl"></i>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden mt-4 pb-4 ${mobileMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-neutral-800 hover:text-primary font-semibold py-2 transition"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a
              href="#products"
              className="text-neutral-800 hover:text-primary font-semibold py-2 transition"
              onClick={closeMobileMenu}
            >
              Products
            </a>
            <a
              href="#services"
              className="text-neutral-800 hover:text-primary font-semibold py-2 transition"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a
              href="#sustainability"
              className="text-neutral-800 hover:text-primary font-semibold py-2 transition"
              onClick={closeMobileMenu}
            >
              Sustainability
            </a>
            <a
              href="#gallery"
              className="text-neutral-800 hover:text-primary font-semibold py-2 transition"
              onClick={closeMobileMenu}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 text-center rounded-md transition"
              onClick={closeMobileMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
