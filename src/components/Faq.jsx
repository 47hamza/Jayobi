import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    {
      question: "1. What’s included in the free trial?",
      answer: "Enjoy full access to all current features for 14 days, no credit card required.",
    },
    {
      question: "2. Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time, no questions asked.",
    },
    {
      question: "3. How secure is my data?",
      answer:
        "We prioritize security. Your data is encrypted and stored securely to protect privacy",
    },
  ];

  const toggleFAQ = index => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };

  return (
    <section
      className="w-full px-6 py-16 md:py-20"
      id="faq"
    >
      <div className="max-w-[1240px] mx-auto w-full">
        <h2 className="text-3xl md:text-5xl mb-2 font-bold text-center text-primary">FAQs</h2>
        <p className="font-medium text-lg text-center text-secondary">
          Got questions? We’ve got answers.
        </p>
        <div className="max-w-8xl md:p-6 mx-auto w-full rounded-xl ">
          <div className="flex lg:flex-nowrap gap-14 md:gap-6 mt-6 flex-wrap justify-center">
            <div className="relative w-full lg:w-[90%]">
              <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-4 md:py-6 md:px-4 border border-background"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-themeYellow md:text-xl font-semibold">{faq.question}</h3>
                      <MdKeyboardArrowDown
                        className={`text-3xl fill-themeYellow cursor-pointer transition-transform ${
                          openIndexes.includes(index) ? "rotate-180" : "rotate-0"
                        }`}
                        onClick={() => toggleFAQ(index)}
                      />
                    </div>
                    {openIndexes.includes(index) && (
                      <div className="mt-2 border-l border-primary pl-4 pt-1">
                        <pre className="text-sm md:text-base font-[inherit] whitespace-break-spaces text-secondary">
                          {faq.answer}
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
