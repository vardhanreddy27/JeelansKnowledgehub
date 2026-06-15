import Head from "next/head";
import {
  ADDRESS,
  BUSINESS_NAME,
  EMAIL,
  KEYWORDS,
  PHONE_E164,
  SITE_URL,
  SOCIAL_LINKS,
  absoluteUrl,
} from "@/lib/site";

const DEFAULT_TITLE =
  "Dr. Jeelan's Knowledge Hub | NEET, IIT Foundation & Home Tuition in Kadapa";
const DEFAULT_DESCRIPTION =
  "Dr. Jeelan's Knowledge Hub offers NEET coaching, IIT Foundation, Navodaya, Sainik School, RMS entrance coaching and home tuitions in Kadapa.";

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = KEYWORDS,
  schemas = [],
  image = "/og-image.jpg",
}) {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="theme-color" content="#1f67a8" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BUSINESS_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${BUSINESS_NAME} in Kadapa`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((schema, index) => (
        <script
          key={`${schema["@type"] || "schema"}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </Head>
  );
}

export function organizationSchemas() {
  const identity = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/logo.png"),
    email: EMAIL,
    telephone: PHONE_E164,
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    sameAs: SOCIAL_LINKS.map((profile) => profile.href),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: absoluteUrl("/og-image.jpg"),
    logo: absoluteUrl("/logo.png"),
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    areaServed: {
      "@type": "City",
      name: "Kadapa",
    },
    openingHours: "Mo-Sa 08:00-20:00",
    sameAs: SOCIAL_LINKS.map((profile) => profile.href),
  };

  const educationalOrganization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#educationalorganization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE_E164,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    areaServed: "Kadapa, Andhra Pradesh, India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coaching programs",
      itemListElement: [
        "NEET Coaching",
        "IIT Foundation",
        "Navodaya Coaching",
        "Sainik School Entrance Coaching",
        "RMS Entrance Coaching",
        "Advanced Learning",
        "Home Tuitions",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Course", name },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };

  return [identity, educationalOrganization, localBusiness, website];
}

export function courseSchema(course) {
  const url = absoluteUrl(`/${course.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#localbusiness`,
      name: BUSINESS_NAME,
      sameAs: SITE_URL,
    },
    areaServed: "Kadapa, Andhra Pradesh, India",
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
