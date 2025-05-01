import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-montserrat mb-6"
        >
          Ready to Optimize Your Pallet Solutions?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg mb-8 max-w-3xl mx-auto opacity-90"
        >
          Contact us today to discuss your specific requirements and discover how 
          Bay State Pallet can enhance your logistics operations with our premium 
          quality products and services.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-white text-primary hover:bg-neutral-100 font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Request a Quote
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+17817674550"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md transition duration-300"
          >
            <i className="fas fa-phone mr-2"></i> Call (781) 767-4550
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
