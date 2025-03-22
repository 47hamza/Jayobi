"use client";
import { FaSync, FaUsersCog, FaClock, FaCogs } from "react-icons/fa";

const benefits = [
  { icon: <FaCogs />, title: "Integrated Features", desc: "Seamless calendar & shift sync." },
  { icon: <FaUsersCog />, title: "User-Friendly", desc: "No learning curve, intuitive interface." },
  { icon: <FaSync />, title: "Real-Time Updates", desc: "Instantly syncs across all users." },
  { icon: <FaClock />, title: "Scalable & Adaptive", desc: "Grows with your team’s needs." },
];

export default function BenefitsFullScreen() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-black to-cyan-900 opacity-40 blur-[120px]" />

      {/* Section Title */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 md:mb-16 uppercase tracking-wide text-center">
        Maximize Productivity
      </h2>

      {/* Floating Benefits (Responsive Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center text-center transition-all duration-500 transform hover:scale-110 hover:rotate-2 p-6"
          >
            {/* Icon with Glow */}
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full text-4xl md:text-5xl transition-all duration-500 bg-gradient-to-br from-cyan-500 to-blue-700 shadow-lg group-hover:shadow-cyan-500/50">
              {benefit.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl md:text-2xl font-semibold mt-6 text-cyan-300 tracking-wide">
              {benefit.title}
            </h3>
            <p className="text-gray-300 text-md md:text-lg max-w-[260px] mt-3 tracking-tight">
              {benefit.desc}
            </p>

            {/* Glowing Underline */}
            <div className="absolute bottom-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
