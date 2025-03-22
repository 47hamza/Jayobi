import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const featuresComingSoon = [
  "Job Posting for External Candidates",
  "Advanced Team Analytics and Reporting",
  "Integration with Payroll Systems",
];

export default function WaitingListSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for joining the waiting list, ${email}!`);
    setEmail("");
  };

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Exciting Features Are On the Way!</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Stay ahead of the curve. Join our waiting list and be the first to access upcoming features.
        </p>
        <div className="bg-gray-800 shadow-xl rounded-2xl p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-left">
            <ul className="space-y-4 text-lg">
              {featuresComingSoon.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-200">
                  <span className="text-green-400 text-xl">✔</span> {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-gray-700 p-8 rounded-xl shadow-inner text-center">
            <p className="text-lg font-semibold mb-4 text-gray-100">Join the waiting list for early access</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative w-full">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-600 border border-gray-500 text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
              >
                Join the Waiting List
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
