import { motion } from "framer-motion";

export interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex"
    >
      <div className={`mr-6 text-${service.color}`}>
        <i className={`${service.icon} text-4xl`}></i>
      </div>
      <div>
        <h3 className={`text-xl font-bold font-montserrat mb-3 text-${service.color}`}>
          {service.title}
        </h3>
        <p className="text-neutral-800">{service.description}</p>
      </div>
    </motion.div>
  );
}
