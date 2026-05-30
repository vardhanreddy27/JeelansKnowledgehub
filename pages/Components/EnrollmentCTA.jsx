import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaUserGraduate,
  FaBookOpen,
} from "react-icons/fa";

const phoneNumber = "919999999999";

const whatsappMessage =
  "Hi Dr. Jeelan's Knowledge Hub, I want to know about coaching programs, batches, fees and admission details.";

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function EnrollmentCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] ">
      <div className="mx-auto">
        <div className="relative overflow-hidden  bg-gradient-to-br from-[#0f4f8f] via-[#1f67a8] to-[#2c84c4] px-6 py-12 shadow-[0_30px_90px_rgba(15,23,42,0.18)] md:px-12 lg:px-16">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.14]">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          {/* Soft Shapes */}
          <div className="absolute -right-24 top-12 h-[360px] w-[360px] rounded-full bg-[#ffb21a]/25 blur-3xl" />
          <div className="absolute -bottom-24 left-20 h-[300px] w-[300px] rounded-full bg-white/15 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT IMAGE */}
            <div className="relative hidden min-h-[520px] items-end justify-center lg:flex">
              <div className="absolute bottom-0 h-[390px] w-[390px] rounded-full bg-white/12" />

              <Image
                src="/student.png"
                alt="Dr. Jeelan's Knowledge Hub Student"
                width={520}
                height={620}
                priority
                className="relative z-10 max-h-[560px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.28)]"
              />

              <div className="absolute left-4 top-14 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-white backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
                  <FaUserGraduate className="text-[#ffb21a]" />
                  Expert Guidance
                </div>
                <p className="mt-1 text-3xl font-extrabold">20+</p>
              </div>

              <div className="absolute bottom-24 right-0 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-white backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
                  <FaBookOpen className="text-[#ffb21a]" />
                  Weekly Practice
                </div>
                <p className="mt-1 text-3xl font-extrabold">100+</p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-3xl">


              <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white md:text-[56px] lg:text-[70px]">
                Start your learning journey with{" "}
                <span className="text-[#ffb21a]">
                    <br />
                    Dr. Jeelan&apos;s</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                Join focused coaching programs for NEET, IIT Foundation,
                Navodaya, Sainik Schools, RMS Entrance and Home Tuitions with
                strong basics, regular tests and personal guidance.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Concept clarity from basics",
                  "Weekly tests and revision",
                  "Personal doubt clearing",
                  "Guidance for better results",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md"
                  >
                    <FaCheckCircle className="shrink-0 text-[#ffb21a]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href={`tel:+${phoneNumber}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#ffb21a] px-8 py-4 text-sm font-extrabold text-white shadow-[0_18px_35px_rgba(255,178,26,0.35)] transition hover:-translate-y-1"
                >
                  <FaPhoneAlt size={14} />
                  Call Now
                </Link>

                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-extrabold text-white shadow-[0_18px_35px_rgba(37,211,102,0.28)] transition hover:-translate-y-1"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}