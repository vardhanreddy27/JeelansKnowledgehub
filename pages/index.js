import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import EnrollmentCTA from "@/components/EnrollmentCTA";
import PackagesSection from "@/components/PackagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO, {
  courseSchema,
  faqSchema,
  organizationSchemas,
} from "@/components/SEO";
import { COURSES, FAQS } from "@/lib/site";

const FAQSection = dynamic(() => import("@/components/FAQSection"));
const TestimonialsSection = dynamic(() =>
  import("@/components/TestimonialsSection")
);

function HomePage() {
  return (
    <>
      <SEO
        schemas={[
          ...organizationSchemas(),
          ...COURSES.map(courseSchema),
          faqSchema(FAQS),
        ]}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <EnrollmentCTA />
        <PackagesSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
