import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>Bay State Pallet | Premium Wooden Pallets & Crates | Massachusetts</title>
      <meta name="description" content="Bay State Pallet - Premium wooden pallets, crates and packaging solutions. Sustainable, reliable and custom-designed for your logistics needs." />
      <meta name="keywords" content="wooden pallets, custom crates, pallet recycling, logistics solutions, sustainable packaging, Massachusetts pallets" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;600&family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bay State Pallet",
            "url": "https://www.baystatepallet.com",
            "logo": "https://www.baystatepallet.com/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-781-767-4550",
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "135 N Quincy Street",
              "addressLocality": "Brockton",
              "addressRegion": "MA",
              "postalCode": "02302",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.facebook.com/baystatepallet",
              "https://www.linkedin.com/company/bay-state-pallet"
            ]
          }
        `}
      </script>
    </Helmet>
    <App />
  </HelmetProvider>
);
