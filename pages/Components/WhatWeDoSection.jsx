import { Typewriter } from "react-simple-typewriter";

export default function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 md:px-10 lg:py-32">
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#1f67a8]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-[#ffb21a]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl text-center">
        <p className="mb-7 text-[12px] font-extrabold uppercase tracking-[0.32em] text-[#1f67a8]">
          What We Do
        </p>

        <div className="mx-auto min-h-[300px] max-w-6xl md:min-h-[360px] lg:min-h-[390px]">
          <h2 className="text-[36px] font-extrabold leading-[1.13] tracking-[-1.5px] text-slate-950 md:text-[58px] lg:text-[74px]">
            <span className="block">
              Teaching, tutoring and entrance coaching.
            </span>

            <span className="block">
              Provided with experience, care,
            </span>

            <span className="mt-1 flex items-baseline justify-center gap-4">
              <span className="shrink-0">thought and</span>

              {/* Fixed width box: only this word moves */}
              <span className="inline-block w-[220px] text-left text-[#ffb21a] md:w-[340px] lg:w-[390px]">
                <Typewriter
                  words={["results", "confidence", "discipline", "guidance"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={45}
                  delaySpeed={1200}
                />
              </span>
            </span>
          </h2>
        </div>

        <div className="">
          <h3 className="text-base font-extrabold text-slate-950">
            Jeelan&apos;s Knowledge Hub
          </h3>

          <p className="mt-2 text-sm font-semibold text-slate-400">
            NEET • IIT Foundation • Navodaya Entrance • Sainik Entrance • RMS Entrance • Home Tuitions
          </p>
        </div>
      </div>
    </section>
  );
}