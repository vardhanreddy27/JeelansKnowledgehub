import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SOCIAL_LINKS,
  createWhatsAppLink,
} from "@/lib/site";

const whatsappMessage =
  "Hi Dr. Jeelan's Knowledge Hub, I want to know about coaching details, batches and admission process.";

const whatsappLink = createWhatsAppLink(whatsappMessage);

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "NEET", href: "/neet" },
  { name: "IIT Foundation", href: "/iit-foundation" },
  { name: "Advanced Learning", href: "/advanced-learning" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "NEET Coaching", href: "/neet" },
  { name: "IIT Foundation", href: "/iit-foundation" },
  { name: "Navodaya Coaching", href: "/navodaya-coaching" },
  { name: "Sainik School Entrance", href: "/sainik-school-entrance" },
  { name: "RMS Entrance", href: "/rms-entrance" },
  { name: "Home Tuitions", href: "/home-tuitions" },
];

const tags = [
  "NEET",
  "IIT",
  "JEE",
  "Navodaya",
  "Sainik",
  "RMS",
  "Maths",
  "Science",
  "Home Tuition",
  "Advanced Learning",
];

export default function Footer() {
  const socialIcons = [FaFacebookF, FaInstagram, FaYoutube];

  return (
    <footer className="relative overflow-hidden bg-[#0f2238] text-white">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]">
          {/* Address */}
          <div>
            <Link href="/" className="mb-6 inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Dr. Jeelan's Knowledge Hub"
                width={590}
                height={570}
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              Dr. Jeelan&apos;s Knowledge Hub provides NEET, IIT Foundation,
              Advanced Learning, Navodaya, Sainik School Entrance, RMS Entrance
              and Home Tuition coaching in Kadapa.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3 text-sm text-white/70">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#ffb21a]" />
                <span>D.No. 42/212-7, N.G.O. Colony, Kadapa</span>
              </div>

              <div className="flex gap-3 text-sm text-white/70">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#ffb21a]" />
                <span>+91 8520074907</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-extrabold text-white">
              About Us
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/60 transition hover:text-[#ffb21a]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xl font-extrabold text-white">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/60 transition hover:text-[#ffb21a]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="mb-6 text-xl font-extrabold text-white">Tags</h3>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-white/6 px-3 py-2 text-xs font-bold text-white/65 ring-1 ring-white/10 transition hover:bg-[#ffb21a] hover:text-[#123c62]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs text-white/50">
              TODO: social profile links are pending verification.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIAL_LINKS.map((profile, index) => {
                const Icon = socialIcons[index];
                return (
                  <Link
                    key={profile.name}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.name} (profile URL to verify)`}
                    title="TODO: verify this social profile URL"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-[#ffb21a] hover:bg-[#ffb21a] hover:text-[#123c62]"
                  >
                    <Icon />
                  </Link>
                );
              })}

              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-[#25D366] hover:bg-[#25D366]"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/8 bg-[#132941]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-6 md:flex-row md:px-8">
          <div className="flex flex-wrap justify-center gap-5 text-sm font-bold text-white/70 md:justify-start">
            <Link href="/contact" className="transition hover:text-[#ffb21a]">
              Contact
            </Link>
            <Link href="/#skills-knowledge" className="transition hover:text-[#ffb21a]">
              About
            </Link>
            <Link href="/#choose-program" className="transition hover:text-[#ffb21a]">
              Services
            </Link>
            <Link href="/#testimonials" className="transition hover:text-[#ffb21a]">
              Testimonials
            </Link>
            <Link href="/#choose-program" className="transition hover:text-[#ffb21a]">
              Programs
            </Link>
          </div>

          <p className="text-center text-sm font-medium text-white/50">
            {`© ${new Date().getFullYear()} Dr. Jeelan's Knowledge Hub. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
