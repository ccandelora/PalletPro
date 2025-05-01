import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-6">
              BAY STATE <span className="text-secondary">PALLET</span>
            </h3>
            <p className="mb-6 text-neutral-300">
              Providing premium quality wooden pallets and packaging solutions since 1990.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-neutral-300 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-300 hover:text-white transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-neutral-300 hover:text-white transition">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-neutral-300 hover:text-white transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-neutral-300 hover:text-white transition">
                  Standard Pallets
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-300 hover:text-white transition">
                  Custom Crates
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-300 hover:text-white transition">
                  Recycled Pallets
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-300 hover:text-white transition">
                  Heat Treated Pallets
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-300 hover:text-white transition">
                  Specialty Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span className="text-neutral-300">
                  135 N Quincy Street, Brockton, MA 02302
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-secondary"></i>
                <a
                  href="tel:+17817674550"
                  className="text-neutral-300 hover:text-white transition"
                >
                  (781) 767-4550
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-secondary"></i>
                <a
                  href="mailto:info@baystatepallet.com"
                  className="text-neutral-300 hover:text-white transition"
                >
                  info@baystatepallet.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-secondary"></i>
                <span className="text-neutral-300">Mon-Fri: 7AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} Bay State Pallet. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
