import { motion } from "framer-motion";

export interface Testimonial {
  content: string;
  author: string;
  position: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex mb-4">
        <div className="text-accent">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <p className="italic mb-6 text-neutral-800">{testimonial.content}</p>
      <div className="flex items-center">
        <div>
          <p className="font-bold font-montserrat">{testimonial.author}</p>
          <p className="text-sm text-neutral-600">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
}
