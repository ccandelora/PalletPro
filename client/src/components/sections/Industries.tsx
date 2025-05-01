import { motion } from "framer-motion";

const industries = [
  { icon: "fas fa-industry", name: "Manufacturing", description: "Custom solutions for production facilities and assembly lines" },
  { icon: "fas fa-shopping-cart", name: "Retail & Distribution", description: "Efficient solutions for warehousing and retail logistics" },
  { icon: "fas fa-capsules", name: "Pharmaceutical", description: "Clean, compliant packaging for sensitive medical products" },
  { icon: "fas fa-apple-alt", name: "Food & Beverage", description: "Safe, hygienic solutions for perishable goods" },
  { icon: "fas fa-microchip", name: "Electronics", description: "Protective packaging for sensitive electronic components" },
  { icon: "fas fa-hard-hat", name: "Construction", description: "Heavy-duty solutions for building materials" },
  { icon: "fas fa-car", name: "Automotive", description: "Specialized pallets for auto parts and components" },
  { icon: "fas fa-ship", name: "Export & Shipping", description: "ISPM-15 compliant solutions for international trade" }
];

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Our pallets and crates are designed to meet the specific requirements 
            of a wide range of industries and applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-center"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition duration-300"
            >
              <div className="mb-4 text-4xl">
                <i className={industry.icon}></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-2">{industry.name}</h3>
              <p className="opacity-90">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
