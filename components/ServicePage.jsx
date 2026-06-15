import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO, { breadcrumbSchema, courseSchema } from "./SEO";
import {
  PHONE_DISPLAY,
  PHONE_E164,
  createWhatsAppLink,
} from "@/lib/site";

export default function ServicePage({ course }) {
  const path = `/${course.slug}`;
  const whatsappLink = createWhatsAppLink(
    `Hi Dr. Jeelan's Knowledge Hub, I want details about ${course.name}, batches, fees and admission.`
  );

  return (
    <>
      <SEO
        title={course.title}
        description={course.description}
        path={path}
        keywords={[
          `${course.name} in Kadapa`,
          "Best coaching institute in Kadapa",
          "Dr Jeelan Knowledge Hub Kadapa",
        ]}
        schemas={[
          courseSchema(course),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: course.name, path },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <section className="overflow-hidden bg-linear-to-br from-[#123c62] via-[#1f67a8] to-[#2c84c4] px-5 py-16 text-white md:px-10 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#ffcf66]">
                {course.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
                {course.heading}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                {course.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#ffb21a] px-7 py-3 font-extrabold text-white"
                >
                  <FaPhoneAlt />
                  {PHONE_DISPLAY}
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 font-extrabold text-white"
                >
                  <FaWhatsapp />
                  WhatsApp
                </Link>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-[32px] bg-white/10 shadow-2xl ring-1 ring-white/20">
              <Image
                src={course.image}
                alt={`${course.name} at Dr. Jeelan's Knowledge Hub in Kadapa`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-extrabold text-[#123c62] md:text-5xl">
              Focused coaching and personal guidance
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              Dr. Jeelan&apos;s Knowledge Hub combines clear explanations,
              consistent practice, progress checks and supportive teaching for
              students in Kadapa.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {course.features.map((feature) => (
                <div
                  key={feature}
                  className="flex min-h-20 items-center gap-3 rounded-2xl bg-[#f5f8ff] p-5 font-semibold text-slate-700"
                >
                  <FaCheckCircle className="shrink-0 text-[#ffb21a]" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
