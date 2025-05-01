import { motion } from "framer-motion";
import GalleryItem from "@/components/ui/GalleryItem";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-primary">
            Project Gallery
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Explore our portfolio of custom pallet and packaging solutions designed 
            for various industries and applications.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryItems.map((item, index) => (
            <GalleryItem 
              key={index}
              item={item}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
