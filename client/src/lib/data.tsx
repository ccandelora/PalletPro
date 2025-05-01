import { Product } from "@/components/ui/ProductCard";
import { Service } from "@/components/ui/ServiceCard";
import { Testimonial } from "@/components/ui/TestimonialCard";
import { GalleryItem } from "@/components/ui/GalleryItem";

// Products Data
export const products: Product[] = [
  {
    image: "https://images.unsplash.com/photo-1634588024792-2723ef7b5f8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Standard Wooden Pallets",
    description: "Our durable standard pallets are available in various sizes and configurations to meet your specific requirements.",
    tags: ["2-way", "4-way", "Custom sizes"],
    tagColor: "bg-primary/10 text-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1622037022788-6fd55d4d0d3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Custom Crates & Boxes",
    description: "Protect your valuable or irregularly shaped products with our custom-designed crates and boxes.",
    tags: ["Custom sizing", "Heavy-duty", "Export-ready"],
    tagColor: "bg-primary/10 text-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1605003179269-c446bb939f00?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Recycled & Reconditioned Pallets",
    description: "Eco-friendly and cost-effective solutions that maintain high quality standards while reducing environmental impact.",
    tags: ["Sustainable", "Cost-effective", "Grade A/B/C"],
    tagColor: "bg-secondary/10 text-secondary"
  },
  {
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Heat Treated Pallets",
    description: "ISPM-15 compliant heat-treated pallets for international shipping that meet global export requirements.",
    tags: ["ISPM-15 compliant", "Export-certified", "Standard sizes"],
    tagColor: "bg-primary/10 text-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Specialty & Custom Pallets",
    description: "Engineered solutions for unique applications, including odd sizes, heavy loads, and industry-specific requirements.",
    tags: ["Custom design", "Heavy-duty", "Application-specific"],
    tagColor: "bg-primary/10 text-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Pallet Management Services",
    description: "Comprehensive pallet management programs including supply, recovery, repair, and recycling services.",
    tags: ["Inventory management", "Recycling", "Full service"],
    tagColor: "bg-primary/10 text-primary"
  }
];

// Services Data
export const services: Service[] = [
  {
    icon: "fas fa-truck-loading",
    title: "Delivery & Logistics",
    description: "Timely and reliable delivery of your pallet orders throughout New England, with flexible scheduling options to meet your operational needs.",
    color: "primary"
  },
  {
    icon: "fas fa-drafting-compass",
    title: "Custom Design Services",
    description: "Engineering and design services to create specialized solutions for unique products, unusual dimensions, or challenging shipping requirements.",
    color: "primary"
  },
  {
    icon: "fas fa-recycle",
    title: "Pallet Recycling Program",
    description: "Environmentally responsible recycling services that reduce waste and can provide credit toward future purchases.",
    color: "secondary"
  },
  {
    icon: "fas fa-warehouse",
    title: "Inventory Management",
    description: "Just-in-time delivery and inventory management solutions to ensure you always have the pallets you need without excessive storage requirements.",
    color: "secondary"
  },
  {
    icon: "fas fa-tools",
    title: "Pallet Repair Services",
    description: "Extend the life of your existing pallets with our professional repair services, saving money and reducing environmental impact.",
    color: "primary"
  },
  {
    icon: "fas fa-certificate",
    title: "ISPM-15 Certification",
    description: "Heat treatment and certification services to ensure your pallets meet international shipping regulations and standards.",
    color: "primary"
  }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    content: "Bay State Pallet has been our trusted supplier for over 5 years. Their custom pallet designs have significantly improved our shipping efficiency and reduced product damage during transit.",
    author: "Robert Johnson",
    position: "Logistics Manager, Northeast Manufacturing"
  },
  {
    content: "Their recycling program has helped us achieve our sustainability goals while also reducing our packaging costs. The team at Bay State is responsive, knowledgeable, and always delivers on time.",
    author: "Sarah Williams",
    position: "Operations Director, Green Planet Distribution"
  },
  {
    content: "When we needed heat-treated pallets for our international shipments, Bay State Pallet provided a complete solution including certification and documentation. Their expertise made the export process seamless.",
    author: "Michael Chen",
    position: "Export Manager, Atlantic Trading Co."
  }
];

// Gallery Items Data
export const galleryItems: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1634588024792-2723ef7b5f8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Heavy-Duty Industrial Pallets",
    description: "Custom-designed for manufacturing equipment transport"
  },
  {
    image: "https://images.unsplash.com/photo-1504222490429-c075f929b666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Pallet Recycling Program",
    description: "Implementing sustainable practices for major retail chain"
  },
  {
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Export-Certified Packaging",
    description: "ISPM-15 compliant solutions for international shipping"
  },
  {
    image: "https://images.unsplash.com/photo-1570914048411-796f8976feef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Custom Shipping Crates",
    description: "Protective packaging for high-value electronic equipment"
  },
  {
    image: "https://images.unsplash.com/photo-1584389852663-c45ddaca43e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Food-Grade Pallets",
    description: "Specialized solutions for food and beverage industry"
  },
  {
    image: "https://images.unsplash.com/photo-1585167161314-7c6ea8451333?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Logistics Solutions",
    description: "Just-in-time delivery program for manufacturing facility"
  }
];
