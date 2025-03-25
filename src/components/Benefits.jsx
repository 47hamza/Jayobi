"use client";
import { FaSync, FaUsersCog, FaClock, FaCogs } from "react-icons/fa";
import benefitsbg from "../assets/benefits/benefits.svg";
const benefits = [
  {
    icon: (
      <FaCogs style={{ transform: "translate(-50px,20px)", color: "black", fontSize: "80px" }} />
    ),
    title: "Fully Integrated Features",
    desc:
      "Our platform connects your calendar, work shifts, holiday requests, and\n" +
      "more to create a seamless experience for both you and your team.",
  },
  {
    icon: (
      <FaUsersCog
        style={{ transform: "translate(-50px,20px)", color: "black", fontSize: "80px" }}
      />
    ),
    title: "Easy-to-Use Interface",
    desc:
      "No training required. Designed to be intuitive and simple, even for nontechnical\n" +
      "users.",
  },
  {
    icon: (
      <FaSync style={{ transform: "translate(-50px,20px)", color: "black", fontSize: "80px" }} />
    ),
    title: "Real-Time Synchronization",
    desc:
      "Every update is instantly reflected across all features—whether it’s a\n" +
      "change in availability, a holiday request, or a shift swap.",
  },
  {
    icon: (
      <FaClock style={{ transform: "translate(-50px,20px)", color: "black", fontSize: "80px" }} />
    ),
    title: "Flexible and Scalable",
    desc:
      "Whether you’re a small startup or a large enterprise, our platform grows\n" +
      "with your team’s needs.",
  },
];

export default function BenefitsFullScreen() {
  return (
    <section className="w-full px-6 py-16 md:py-20 relative">
        <img
          src={benefitsbg}
          className="absolute z-0 md:left-[-6%] top-0 left-[-31%]"
        />
      <div className="max-w-[1240px] mx-auto w-full">
        <div className="relative text-white flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl mb-2 font-bold text-primary">Benefits</h2>
          <p className="text-lg text-secondary max-w-4xl mx-auto mb-12 text-center">
            Maximize your team&#39;s productivity and streamline your operations with our
            feature-packed platform.
          </p>

          {/* Floating Benefits (Responsive Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl w-full">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center transition-all duration-500 transform hover:scale-110 p-6"
              >
                {/* Icon with Glow */}
                <div className="w-32 h-32 flex items-center justify-center rounded-full text-4xl md:text-5xl transition-all duration-500 bg-gradient-to-br from-[#eebb00] to-[#eebb00] shadow-lg group-hover:shadow-cyan-500/50">
                  {benefit.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl  font-semibold mt-6 text-cyan-300 tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-secondary text-md md:text-lg max-w-[260px] mt-3 tracking-tight">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
