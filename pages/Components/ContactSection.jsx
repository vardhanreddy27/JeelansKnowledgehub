import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const phoneNumber = "919494403103";

const whatsappMessage =
  "Hi Dr. Jeelan's Knowledge Hub, I want to know about coaching details, batches and admission process.";

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#f5f8ff] px-4 py-20 md:px-8 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#ffb21a]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#1f67a8]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-[#1f67a8]">
            Contact Us
          </p>

          <h2 className="max-w-xl text-[34px] font-extrabold leading-[1.15] tracking-[-1px] text-[#123c62] md:text-[48px]">
            Feel free to contact & get in touch!
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
            For NEET, IIT Foundation, Advanced Learning, Navodaya, Sainik School,
            RMS Entrance and Home Tuitions, contact Dr. Jeelan&apos;s Knowledge Hub.
          </p>

          <div className="mt-9 space-y-4">
            <div className="flex items-center gap-4 rounded-[26px] border border-dashed border-[#1f67a8]/25 bg-white px-5 py-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eaf4ff] text-[#1f67a8]">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#123c62]">
                  Email Address:
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  drjeelansknowledgehub@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[26px] border border-dashed border-[#1f67a8]/25 bg-white px-5 py-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eaf4ff] text-[#1f67a8]">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#123c62]">
                  Phone Number:
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  +91 8520074907
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[26px] border border-dashed border-[#1f67a8]/25 bg-white px-5 py-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eaf4ff] text-[#1f67a8]">
                <FaMapMarkerAlt size={22} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#123c62]">
                  Location Address:
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  42/212-7, N.G.O. Colony, Kadapa
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`tel:+${phoneNumber}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#ffb21a] px-7 py-4 text-sm font-extrabold text-white shadow-[0_15px_35px_rgba(255,178,26,0.3)] "
            >
              <FaPhoneAlt size={14} />
              Call Now
            </Link>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-extrabold text-white shadow-[0_15px_35px_rgba(37,211,102,0.25)]"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-extrabold text-[#123c62]">
              Follow us on social media:
            </h3>

            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f67a8] text-white    "
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffb21a] text-white    "
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white    "
              >
                <FaYoutube />
              </Link>

              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white    "
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
          <div className="relative h-[420px] overflow-hidden rounded-[26px] md:h-[520px]">
            <iframe
              title="Dr. Jeelan's Knowledge Hub Location"
              src="https://www.google.com/maps?q=42%2F212-7%2C%20N.G.O.%20Colony%2C%20Kadapa&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.16)] backdrop-blur-md">
              <h3 className="text-base font-extrabold text-[#123c62]">
                Dr. Jeelan&apos;s Knowledge Hub
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                42/212-7, N.G.O. Colony, Kadapa
              </p>

              <Link
                href="https://www.google.com/maps/search/?api=1&query=42%2F212-7%2C%20N.G.O.%20Colony%2C%20Kadapa"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex rounded-full bg-[#1f67a8] px-5 py-2 text-xs font-extrabold text-white transition hover:bg-[#123c62]"
              >
                Open in Google Maps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
