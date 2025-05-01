import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-primary">
            Our Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            We provide comprehensive pallet and packaging services to streamline 
            your logistics operations and improve efficiency.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
