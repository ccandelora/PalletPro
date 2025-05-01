import { motion } from "framer-motion";

const initiatives = [
  {
    title: "Responsible Sourcing",
    description: "We source lumber from sustainably managed forests and suppliers who share our commitment to environmental stewardship."
  },
  {
    title: "Zero Waste Manufacturing",
    description: "Our manufacturing process utilizes 100% of wood materials, with sawdust and scrap converted into mulch, animal bedding, and biofuel."
  },
  {
    title: "Pallet Recovery & Recycling",
    description: "Our comprehensive recycling program keeps millions of pallets out of landfills each year, giving them new life through repair and reconditioning."
  },
  {
    title: "Reduced Carbon Footprint",
    description: "Our local manufacturing and strategic delivery routes minimize transportation emissions and support the regional economy."
  }
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-secondary">
              Our Commitment to Sustainability
            </h2>
            <p className="text-lg mb-6">
              At Bay State Pallet, environmental responsibility is a core value. 
              We're committed to sustainable practices that reduce waste, conserve 
              resources, and minimize our carbon footprint.
            </p>

            <div className="space-y-6">
              {initiatives.map((initiative, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1 text-secondary">
                    <i className="fas fa-check-circle text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-secondary">
                      {initiative.title}
                    </h3>
                    <p className="text-neutral-800">{initiative.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Learn About Our Green Initiatives
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1610555356070-d0efcf2d8802?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000&q=80"
              alt="Sustainable wooden pallet manufacturing"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
