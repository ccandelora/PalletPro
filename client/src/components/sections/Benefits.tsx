import { motion } from "framer-motion";

const benefits = [
  {
    icon: "fas fa-medal",
    title: "Premium Quality",
    description: "Superior construction and materials for maximum durability and performance in any environment.",
    bgClass: "bg-primary-light"
  },
  {
    icon: "fas fa-leaf",
    title: "Eco-Friendly",
    description: "Sustainable practices and recycled materials to minimize environmental impact and maximize efficiency.",
    bgClass: "bg-secondary-light"
  },
  {
    icon: "fas fa-cogs",
    title: "Custom Solutions",
    description: "Tailored designs to meet your specific requirements, no matter how complex or unique.",
    bgClass: "bg-accent"
  }
];

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 ${benefit.bgClass} rounded-full flex items-center justify-center`}>
                <i className={`${benefit.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3">{benefit.title}</h3>
              <p className="text-neutral-800">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
