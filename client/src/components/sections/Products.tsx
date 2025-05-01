import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/data";

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-primary">
            Our Product Line
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-neutral-800">
            We offer a comprehensive range of pallet and packaging solutions designed 
            to meet the specific needs of your industry and application.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              product={product}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Request Custom Solutions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
