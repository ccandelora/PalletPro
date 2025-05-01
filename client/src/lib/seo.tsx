import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEO({
  title = "Bay State Pallet | Premium Wooden Pallets & Crates | Massachusetts",
  description = "Bay State Pallet - Premium wooden pallets, crates and packaging solutions. Sustainable, reliable and custom-designed for your logistics needs.",
  canonicalUrl = "https://www.baystatepallet.com",
  ogType = "website",
  ogImage = "https://www.baystatepallet.com/images/og-image.jpg"
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="wooden pallets, custom crates, pallet recycling, logistics solutions, sustainable packaging, Massachusetts pallets" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
