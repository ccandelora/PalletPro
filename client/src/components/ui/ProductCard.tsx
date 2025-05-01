import { motion } from "framer-motion";

export interface Product {
  image: string;
  title: string;
  description: string;
  tags: string[];
  tagColor: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-neutral-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold font-montserrat mb-3 text-primary">{product.title}</h3>
        <p className="mb-4 text-neutral-800">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`${product.tagColor} text-sm px-3 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-block text-primary font-bold hover:text-primary-dark transition"
        >
          Learn More <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </motion.div>
  );
}
