import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FAQS } from "@/lib/site";

export default function FAQSection() {
  const midpoint = Math.ceil(FAQS.length / 2);
  // Keep the first question in each column open initially.
  const [openIndexes, setOpenIndexes] = useState([0, midpoint]);
  const leftFaqs = FAQS.slice(0, midpoint);
  const rightFaqs = FAQS.slice(midpoint);

  const handleToggle = (actualIndex) => {
    setOpenIndexes((prev) => {
      if (prev.includes(actualIndex)) {
        return prev.filter((item) => item !== actualIndex);
      }

      // Keeps maximum 2 FAQs open
      return [...prev.slice(-1), actualIndex];
    });
  };

  const renderFaq = (items, indexOffset = 0) =>
    items.map((faq, index) => {
      const actualIndex = index + indexOffset;
      const isOpen = openIndexes.includes(actualIndex);

      return (
        <div
          key={faq.question}
          className="overflow-hidden rounded-2xl bg-[#f5f8ff] transition-all duration-300"
        >
          <button
            type="button"
            onClick={() => handleToggle(actualIndex)}
            className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-bold transition md:px-6 ${
              isOpen
                ? "bg-[#1f67a8] text-white"
                : "text-[#123c62] hover:bg-[#eef6ff]"
            }`}
            aria-expanded={isOpen}
          >
            <span>{faq.question}</span>

            <FiChevronDown
              size={20}
              className={`shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-180 text-white" : "text-[#1f67a8]"
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-5 py-5 text-sm leading-7 text-slate-600 md:px-6">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      );
    });

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 md:px-8 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#ffb21a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#1f67a8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mx-auto mb-5 inline-flex rounded-full bg-[#eaf4ff] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#1f67a8]">
            Common Questions
          </p>

          <h2 className="text-[34px] font-extrabold tracking-[-1px] text-[#123c62] md:text-[48px] lg:text-[56px]">
            Most Popular Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            Quick answers about our coaching programs, batches, tests, home
            tuitions and admission process.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-4">{renderFaq(leftFaqs, 0)}</div>
          <div className="space-y-4">{renderFaq(rightFaqs, midpoint)}</div>
        </div>
      </div>
    </section>
  );
}
