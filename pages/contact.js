import Link from "next/link";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import {
  PHONE_DISPLAY,
  PHONE_E164,
  createWhatsAppLink,
} from "@/lib/site";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=42%2F212-7%2C%20N.G.O.%20Colony%2C%20Kadapa";

export default function ContactPage() {
  const whatsappLink = createWhatsAppLink(
    "Hi Dr. Jeelan's Knowledge Hub, I want coaching and admission details."
  );

  return (
    <>
      <SEO
        title="Contact Dr. Jeelan's Knowledge Hub in Kadapa"
        description="Contact Dr. Jeelan's Knowledge Hub in N.G.O. Colony, Kadapa for NEET, IIT Foundation, entrance coaching, advanced learning and home tuition."
        path="/contact"
        keywords={[
          "Dr Jeelan Knowledge Hub Kadapa contact",
          "Coaching institute in NGO Colony Kadapa",
          "Home tuition in Kadapa",
        ]}
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Navbar />
      <main className="bg-[#f5f8ff] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1f67a8]">
            Admissions and Enquiries
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-[#123c62] md:text-6xl">
            Contact our coaching institute in Kadapa
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Ask about current batches, course details, fees and personal
            learning support at Dr. Jeelan&apos;s Knowledge Hub.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Link
              href={`tel:${PHONE_E164}`}
              className="flex min-h-36 flex-col justify-center rounded-3xl bg-white p-7 shadow-sm"
            >
              <FaPhoneAlt className="text-2xl text-[#1f67a8]" />
              <h2 className="mt-4 font-extrabold text-[#123c62]">Call us</h2>
              <p className="mt-2 text-slate-600">{PHONE_DISPLAY}</p>
            </Link>
            <div className="flex min-h-36 flex-col justify-center rounded-3xl bg-white p-7 shadow-sm">
              <FaEnvelope className="text-2xl text-[#1f67a8]" />
              <h2 className="mt-4 font-extrabold text-[#123c62]">Email</h2>
              <p className="mt-2 text-slate-600">
                drjeelansknowledgehub [at] gmail [dot] com
              </p>
            </div>
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-36 flex-col justify-center rounded-3xl bg-white p-7 shadow-sm"
            >
              <FaMapMarkerAlt className="text-2xl text-[#1f67a8]" />
              <h2 className="mt-4 font-extrabold text-[#123c62]">Visit us</h2>
              <p className="mt-2 text-slate-600">
                42/212-7, N.G.O. Colony, Kadapa, Andhra Pradesh
              </p>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 font-extrabold text-white"
            >
              <FaWhatsapp />
              WhatsApp for admission details
            </Link>
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1f67a8] px-7 py-3 font-extrabold text-white"
            >
              <FaMapMarkerAlt />
              Open in Google Maps
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
