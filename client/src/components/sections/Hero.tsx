import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-neutral-800 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Modern warehouse with wooden pallets"
          className="object-cover w-full h-full opacity-40"
        />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight mb-6">
            Premium Wooden Pallets{" "}
            <span className="text-accent">Built to Last</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            For over 30 years, Bay State Pallet has delivered superior quality wooden pallets, 
            custom crates, and sustainable packaging solutions to businesses across New England.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#products"
              className="bg-primary hover:bg-primary-dark text-white text-lg font-bold py-3 px-8 rounded-md transition duration-300 text-center"
            >
              Explore Products
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white hover:bg-neutral-200 text-primary text-lg font-bold py-3 px-8 rounded-md transition duration-300 text-center"
            >
              Request a Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
