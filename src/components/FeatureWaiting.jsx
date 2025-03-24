import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Button from "../common/Button";

const featuresComingSoon = [
  "Job Posting for External Candidates",
  "Advanced Team Analytics and Reporting",
  "Integration with Payroll Systems",
];

export default function WaitingListSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you for joining the waiting list, ${email}!`);
    setEmail("");
  };

  return (
    <section className="w-full px-6 py-16 md:py-20 bg-background text-white">
      <div className="max-w-[1240px] mx-auto w-full text-center">
        <h2 className="text-3xl md:text-5xl mb-2 font-bold text-primary text-center">
          Feature Waiting
        </h2>
        <p className="font-medium text-lg text-center text-white">
          Some of our features are in development and coming soon! Be the first to know when they’re
          available.
        </p>
        <div className="bg-white shadow-xl rounded-2xl p-5 md:p-12 m flex flex-col md:flex-row items-center gap-10 mt-10">
          <div className="flex-1 text-left">
            <ul className="space-y-4 text-lg">
              {featuresComingSoon.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-secondary"
                >
                  <span className="text-green-500 text-xl">✔</span> {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-background p-8 rounded-xl shadow-inner text-center">
            <p className="text-lg font-semibold mb-4 text-gray-100">
              Join the waiting list for early access
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="relative w-full">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-600 border border-gray-500 text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              <Button
                className="font-semiold bg-themeYellow"
                type="submit"
              >
                Join the Waiting List
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
