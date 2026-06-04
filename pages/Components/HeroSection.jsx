import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaStar,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const phoneNumber = "919494403103";

const whatsappMessage =
  "Hi Jeelan's Knowledge Hub, I want to know about NEET, IIT Foundation, Navodaya, Sainik School Entrance, RMS Entrance and Home Tuitions. Please share batch details.";

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const studentAvatars = [
  {
    src: "https://img.freepik.com/premium-photo/smiling-young-indian-student-with-books-backpack_53876-1255622.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Student one",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D",
    alt: "Student two",
  },
  {
    src: "https://t4.ftcdn.net/jpg/05/52/94/91/360_F_552949155_Dp8LkuLQflQIGQ9Fs6GukKVSdGRTiD5i.jpg",
    alt: "Student three",
  },{
    src: "https://i.pinimg.com/originals/8c/11/dd/8c11dd4a7110a437722370c4663f80ec.jpg",
    alt: "Student three",
  },
];

const featureCards = [
  {
    title: "IIT Foundation",
    image: "/iit.png",
    href: "#iit",
  },
  {
    title: "NEET Coaching",
    image: "/neet-coaching.png",
    href: "#neet",
  },
  {
    title: "Advanced Learning",
    image: "/advanced-learning.png",
    href: "#advanced-learning",
  },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-linear-to-br from-[#1f67a8] via-[#2c84c4] to-[#86d1ea]">
      {/* Soft Glow */}
      <div className="pointer-events-none absolute -left-30 top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-45 right-10 h-105 w-105 rounded-full bg-[#ffb21a]/20 blur-3xl" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col px-5 pb-14 pt-10 md:px-10 lg:px-16 lg:pt-14">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          {/* LEFT CONTENT */}
          <div className="">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/15 px-5 py-3 text-sm font-bold text-[#ffe082] backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffb21a] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ffb21a]" />
              </span>
              New batches open for NEET & IIT Foundation
            </div>

            <h1 id="skills-knowledge" className="scroll-mt-28 text-[44px] font-light leading-[1.08] tracking-[-1px] text-white md:text-[68px] lg:text-[86px]">
              Upgrade your skills
              <br />
              and knowledge
            </h1>

            <p className="mt-7 max-w-155 text-base leading-8 text-white/85 md:text-lg">
              Premium coaching for NEET, IIT Foundation, Navodaya, Sainik
              Schools, RMS Entrance and Home Tuitions with strong basics,
              regular tests and personal guidance.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={`tel:+${phoneNumber}`}
                className="flex items-center gap-2 font-extrabold shadow-2xl rounded-full bg-[#ffb21a] px-8 py-4 text-sm  text-white  "
              >
                <FaPhoneAlt size={14} />
                Call Now
              </Link>

              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 shadow-2xl rounded-full bg-[#25D366] px-8 py-4 text-sm font-extrabold text-white  "
              >
                <FaWhatsapp size={22} />
                WhatsApp
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-4">
                  {studentAvatars.map((student, index) => (
                    <Image
                      key={index}
                      src={student.src}
                      alt={student.alt}
                      width={48}
                      height={48}
                      unoptimized
                      className="h-12 w-12 rounded-full border-[3px] border-white object-cover shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition duration-300 hover:z-10 hover:scale-110"
                    />
                  ))}
                </div>

                <div className="rounded-full bg-[#071b2f] px-4 py-2 text-sm font-bold text-white">
                  4.9 <FaStar className="ml-1 inline text-[#ffb21a]" />
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-105 text-sm leading-6 text-white/70">
              Trusted by students for exam preparation, foundation learning and
              academic improvement.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden min-h-145 items-end justify-center lg:flex">
            <div className="absolute right-4 top-20 z-20 rounded-[22px] border border-white/20 bg-white/12 px-6 py-5 text-white backdrop-blur-md">
              <div className="mb-2 flex items-center gap-2 text-white/80">
                <FaUsers className="text-[#ffb21a]" />
                <span className="text-sm">Expert Mentors</span>
              </div>
              <p className="text-3xl font-bold">20+</p>
            </div>

            <div className="absolute bottom-24 left-8 z-20 rounded-[22px] border border-white/20 bg-white/12 px-6 py-5 text-white backdrop-blur-md">
              <div className="mb-2 flex items-center gap-2 text-white/80">
                <FaGraduationCap className="text-[#ffb21a]" />
                <span className="text-sm">Weekly Tests</span>
              </div>
              <p className="text-3xl font-bold">100+</p>
            </div>

            <div className="relative z-10 h-175 w-170">
              <Image
                src="/j.png"
                alt="Jeelan's Knowledge Hub Student"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.28)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAM IMAGE CARDS - SAME COMPONENT */}
      <div className="relative z-20 px-4 pb-20 sm:px-6 lg:px-10">
        <div className="mx-auto  rounded-[34px] p-3">
          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                aria-label={card.title}
                className="group relative aspect-[16/8.2] overflow-hidden rounded-[26px] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.18)] ring-1 ring-white/40 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.28)]"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-white/5" />

                <div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#123c62] shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition duration-300 group-hover:rotate-12 group-hover:bg-[#ffb21a] group-hover:text-white md:h-16 md:w-16">
                  <FiArrowUpRight size={30} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
