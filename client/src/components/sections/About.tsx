import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "1000+", label: "Regular Clients" },
  { value: "500K+", label: "Pallets Produced" },
  { value: "99%", label: "Customer Satisfaction" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Bay State Pallet warehouse operations"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-primary">
              About Bay State Pallet
            </h2>
            <p className="text-lg mb-6">
              Since 1990, Bay State Pallet has been a trusted provider of high-quality wooden 
              pallets and packaging solutions throughout Massachusetts and New England.
            </p>
            <p className="text-lg mb-6">
              Our family-owned business combines decades of industry expertise with modern 
              manufacturing techniques to deliver products that meet the highest standards 
              of quality and durability.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-neutral-800">{stat.label}</p>
                </div>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
