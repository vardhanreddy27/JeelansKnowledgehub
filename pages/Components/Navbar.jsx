import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const navItems = [
  { name: "NEET", href: "#choose-program", badge: "New Batch" },
  { name: "IIT", href: "#choose-program", badge: "New Batch" },
  { name: "Navodaya Coaching", href: "#choose-program" },
  { name: "Sainik Schools Entrance", href: "#choose-program" },
  { name: "RMS Entrance", href: "#choose-program" },
  { name: "Home Tuitions", href: "#choose-program" },
];

const phoneNumber = "919999999999"; // replace with your number

const whatsappMessage =
  "Hi Jeelan's Knowledge Hub, I want to know about NEET, IIT, Navodaya Coaching, Sainik Schools Entrance, RMS Entrance, and Home Tuitions. Please share batch details and fees.";

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <header className="sticky left-0 top-0 z-50 w-full bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300">
   
      <nav className="mx-auto flex h-20.5 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Jeelan's Knowledge Hub"
            width={230}
            height={80}
            priority
            className="h-15.5 w-auto object-contain md:h-17.5"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-3 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-2 rounded-full px-4 py-2 text-[15px] font-semibold transition ${
                item.badge
                  ? "bg-[#fff8e8]/90 text-[#1f67a8] ring-1 ring-[#ffb21a]/35 hover:bg-[#fff1cc]"
                  : scrolled
                  ? "text-slate-700 hover:bg-blue-50 hover:text-[#1f67a8]"
                  : "text-slate-800 hover:bg-white/70 hover:text-[#1f67a8]"
              }`}
            >
              <span>{item.name}</span>

              {item.badge && (
                <span className="flex items-center gap-1 rounded-full bg-[#ffb21a] px-2 py-0.75 text-[9px] font-black uppercase tracking-wide text-white shadow-[0_6px_14px_rgba(255,178,26,0.35)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href={`tel:+${phoneNumber}`}
            className="flex items-center gap-2 rounded-full bg-[#1f67a8] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(31,103,168,0.28)] transition hover:bg-[#17558c]"
          >
            <FaPhoneAlt size={13} />
            Call
          </Link>

          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#1ebe5d]"
            aria-label="WhatsApp Admission Enquiry"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f67a8] text-white xl:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 xl:hidden ${
          open ? "max-h-155 border-t border-slate-100" : "max-h-0"
        }`}
      >
        <div className="space-y-2 px-5 py-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                item.badge
                  ? "bg-[#fff8e8] text-[#1f67a8] ring-1 ring-[#ffb21a]/35"
                  : "text-slate-700 hover:bg-blue-50 hover:text-[#1f67a8]"
              }`}
            >
              <span>{item.name}</span>

              {item.badge && (
                <span className="flex items-center gap-1 rounded-full bg-[#ffb21a] px-2 py-1 text-[9px] font-black uppercase text-white">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  {item.badge}
                </span>
              )}
            </a>
          ))}

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              href={`tel:+${phoneNumber}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#1f67a8] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              <FaPhoneAlt size={13} />
              Call
            </Link>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              <FaWhatsapp size={17} />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}