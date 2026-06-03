import Image from "next/image";
import Link from "next/link";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaBookOpen,
  FaFlask,
  FaCalculator,
  FaHome,
} from "react-icons/fa";

const phoneNumber = "919999999999";

const whatsappMessage =
  "Hi Dr. Jeelan's Knowledge Hub, I want to know about IIT, NEET, Advanced Learning and Home Tuition packages.";

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const packages = [
  {
    title: "Advanced Learning",
    tag: "Classes 1 to 5",
    icon: FaCalculator,
    color: "bg-[#ffb21a]",
    image:"https://www.shutterstock.com/shutterstock/videos/1092019115/thumb/1.jpg?ip=x480",
    features: [
      "Basic Maths improvement",
      "Addition, subtraction, tables",
      "Activity-based learning",
      "Practice worksheets",
      "Confidence building",
    ],
    price: "Contact us",
  },
  {
    title: "IIT Foundation",
    tag: "Classes 6 to 12",
    icon: FaBookOpen,
    color: "bg-[#1f67a8]",
    image:"https://images.shiksha.com/mediadata/images/articles/1682688256phpUghaiy.jpeg",
    features: [
      "Maths & Science foundation",
      "Concept clarity from basics",
      "Problem-solving practice",
      "Weekly tests and revision",
      "Doubt clearing support",
    ],
    price: "Contact us",
  },
  {
    title: "NEET Coaching",
    tag: "Medical Entrance",
    icon: FaFlask,
    color: "bg-[#123c62]",
    image:
      "https://media.istockphoto.com/id/2163915959/photo/indian-asian-young-doctors-or-medical-professionals-isolated-or-in-office-hospital.jpg?s=612x612&w=0&k=20&c=Ew-pDn43ubKoHYwUn5p2x2ElZRCX3N1elPGRMNSc1qU=",
    features: [
      "Biology, Physics & Chemistry",
      "Chapter-wise preparation",
      "Regular mock tests",
      "Revision and practice plans",
      "Personal guidance",
    ],
    price: "Contact us",
    highlight: true,
  },
  {
    title: "Home Tuitions",
    tag: "Personal Coaching",
    icon: FaHome,
    color: "bg-[#2c84c4]",
    image:"https://content3.jdmagicbox.com/v2/comp/jaipur/u6/0141px141.x141.230210093520.v1u6/catalogue/click-home-tuition-ramnagar-extension-jaipur-home-tutors-m89qrezwp9.jpg",
    features: [
      "One-to-one attention",
      "School syllabus support",
      "Daily homework guidance",
      "Exam preparation",
      "Flexible learning support",
    ],
    price: "Contact us",
  },
];

export default function PackagesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] px-4 pb-5 pt-5 md:px-8">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#ffb21a]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#1f67a8]/10 blur-3xl" />

      <div className="relative mx-auto">
        <div id="choose-program" className="mb-14 scroll-mt-28 text-center">
          <p className="mx-auto inline-flex rounded-full bg-[#eaf4ff] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#1f67a8]">
            Choose Program
          </p>

          <h2 className="mx-auto text-[38px] font-extrabold text-[#123c62] md:text-[56px] lg:text-[68px]">
            Upgrade your skills and knowledge
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-500 md:text-base">
            Select the right coaching program for your child based on class,
            exam goal and learning need.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] ${
                  item.highlight ? "xl:-mt-5" : ""
                }`}
              >
                <div
                  className={`relative min-h-45 overflow-hidden px-7 py-8 text-white ${
                    item.image ? "bg-[#123c62]" : item.color
                  }`}
                >
                  {item.image ? (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071f36]/90 via-[#123c62]/45 to-black/10" />
                      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15" />
                    </>
                  ) : (
                    <>
                      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15" />
                      <div className="absolute -bottom-16 right-6 h-40 w-40 rotate-12 rounded-[45px] bg-white/15" />

                      <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/18 backdrop-blur-md">
                        <Icon size={26} />
                      </div>
                    </>
                  )}

                  <div className="relative z-10 mt-20">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                      {item.tag}
                    </p>

                    <h3 className="text-2xl font-extrabold tracking-[-0.5px]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-7">
                  <h4 className="mb-5 text-lg font-extrabold text-[#123c62]">
                    Features
                  </h4>

                  <div className="space-y-4">
                    {item.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 border-b border-slate-100 pb-3 text-sm font-medium text-slate-600 last:border-b-0"
                      >
                        <FaCheckCircle className="shrink-0 text-[#ffb21a]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="mt-2 text-2xl font-extrabold text-[#123c62]">
                      {item.price}
                    </p>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <Link
                      href={`tel:+${phoneNumber}`}
                      className="flex items-center justify-center gap-2 rounded-full bg-[#ffb21a] px-4 py-3 text-xs font-extrabold text-white transition hover:bg-[#f5a400]"
                    >
                      <FaPhoneAlt size={12} />
                      Call
                    </Link>

                    <Link
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-xs font-extrabold text-white transition hover:bg-[#1fbd59]"
                    >
                      <FaWhatsapp size={15} />
                      WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}