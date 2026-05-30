import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Which courses are available at Dr. Jeelan’s Knowledge Hub?",
    answer:
      "We provide coaching for NEET, IIT Foundation, Advanced Learning for Classes 1 to 5, Navodaya Coaching, Sainik School Entrance, RMS Entrance and Home Tuitions.",
  },
  {
    question: "What is IIT Foundation coaching?",
    answer:
      "IIT Foundation helps students from Classes 6 to 10 build strong Maths and Science basics, logical thinking, problem-solving skills and exam confidence from an early stage.",
  },
  {
    question: "Do you provide NEET coaching in Kadapa?",
    answer:
      "Yes. We provide NEET coaching with focus on Biology, Physics and Chemistry, regular tests, revision planning, doubt clearing and personal guidance.",
  },
  {
    question: "What is Advanced Learning for kids?",
    answer:
      "Advanced Learning is designed for Classes 1 to 5. It focuses mainly on Maths basics such as numbers, addition, subtraction, multiplication, division, tables and activity-based learning.",
  },
  {
    question: "Do you provide Home Tuitions?",
    answer:
      "Yes. Home Tuitions are available for students who need personal attention, school syllabus support, homework guidance and exam preparation.",
  },
  {
    question: "Are weekly tests conducted?",
    answer:
      "Yes. Weekly tests and practice sessions are conducted to track student progress, improve confidence and identify areas where extra support is needed.",
  },
  {
    question: "Is personal doubt clearing available?",
    answer:
      "Yes. Students get doubt clearing support so they can understand concepts clearly instead of memorizing without clarity.",
  },
  {
    question: "Which classes can join Advanced Learning?",
    answer:
      "Advanced Learning is mainly for Classes 1 to 5, especially for students who need stronger Maths basics and better learning confidence.",
  },
  {
    question: "How can I know the fee details?",
    answer:
      "Fee details depend on the course, class and learning requirement. You can call or WhatsApp us to get the correct fee details.",
  },
  {
    question: "How can I join a new batch?",
    answer:
      "You can contact us through call or WhatsApp. Our team will share batch timings, course details and admission guidance.",
  },
];

export default function FAQSection() {
  // Two FAQs open by default: first left and first right
  const [openIndexes, setOpenIndexes] = useState([0, 5]);

  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

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
          <div className="space-y-4">{renderFaq(rightFaqs, 5)}</div>
        </div>
      </div>
    </section>
  );
}