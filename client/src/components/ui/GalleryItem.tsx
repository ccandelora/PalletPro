import { motion } from "framer-motion";

export interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface GalleryItemProps {
  item: GalleryItem;
  index: number;
}

export default function GalleryItem({ item, index }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 group relative"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
        <div className="text-white text-center p-4">
          <h3 className="font-bold font-montserrat text-xl mb-2">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
