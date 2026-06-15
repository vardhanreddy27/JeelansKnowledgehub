import Image from "next/image";
import { FaStar, FaQuoteRight, FaBookOpen } from "react-icons/fa";

const testimonials = [
  {
    name: "Akhila Reddy",
    role: "IIT Foundation Student",
    image: "/jeelan.webp",
    text: "The classes helped me understand Maths and Science basics clearly. Weekly tests improved my confidence and preparation.",
  },
  {
    name: "Rohan Varma",
    role: "NEET Student",
    image: "/j.webp",
    text: "Biology, Physics and Chemistry concepts are explained in a simple way. Doubt clearing and revision support are very useful.",
  },
  {
    name: "Sameera Khan",
    role: "Advanced Learning",
    image: "/jeelan.png",
    text: "My Maths basics improved a lot. The learning style is simple, friendly and easy for kids to understand.",
  },
  {
    name: "Meghana Sri",
    role: "Home Tuition Student",
    image: "/jeelans.png",
    text: "Personal attention helped me complete homework, prepare for exams and understand difficult topics better.",
  },
];

const movingTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#123c62] px-4 py-20 md:px-8 lg:py-28">

      <div className="absolute inset-0 bg-[#123c62]/90" />

      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="relative z-10 mx-auto">
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-[#ffb21a]">
            <FaBookOpen />
            <span className="text-sm font-extrabold uppercase tracking-[0.35em]">
              Testimonials
            </span>
          </div>

          <h2 className="text-[36px] font-extrabold leading-tight tracking-[-1px] text-white md:text-[52px]">
            What Our Students <span className="text-[#ffb21a]">Say</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-white/80 md:text-base">
            Students and parents trust Dr. Jeelan&apos;s Knowledge Hub for
            concept clarity, regular practice and personal guidance.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#123c62] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#123c62] to-transparent" />

          <div className="testimonial-track flex w-max gap-6">
            {movingTestimonials.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group relative w-[300px] shrink-0 overflow-hidden rounded-[34px] bg-white px-7 pb-7 pt-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-2 md:w-[330px]"
              >
                <div className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center rounded-bl-[22px] bg-[#ffb21a] text-white">
                  <FaQuoteRight size={22} />
                </div>

                <div className="mb-7 flex items-center gap-1 text-[#ffb21a]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} size={16} />
                  ))}
                </div>

                <p className="min-h-[130px] text-sm font-semibold italic leading-7 text-slate-500">
                  {item.text}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <div className="rounded-full border-2 border-dashed border-[#ffb21a] p-1">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-950">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-[#ffb21a]">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#ffb21a]" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          <span className="h-2 w-8 rounded-full bg-[#ffb21a]" />
          <span className="h-2 w-2 rounded-full bg-[#ffb21a]/60" />
        </div>
      </div>

    </section>
  );
}
