import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";

const quotes = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9Yfk5l9vJOi2tHDW7ROt2cbDWXJONs-MWw&s",
    name: "John D.",
    designation: "Operations Manager",
    text: "This platform has completely transformed how we manage our team. Everything from availability sharing to hiring is easier and more efficient.",
    bgColor: "bg-gray-800",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIHO2EJxxpo-peIOwbvKxttdnV9Lbqi6VHg&s",
    name: "Sarah P.",
    designation: "HR Director",
    text: "The CV builder has been a lifesaver for our HR team. We can now generate and review professional resumes quickly and effortlessly.",
    bgColor: "bg-pink-900",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRxfERFlApLKpIifup2oj0wda4S4g_wmb_g&s",
    name: "Emma K.",
    designation: "Payroll Manager",
    text: "Payslips sharing is seamless, and our employees love how easy it is to access their payment history.",
    bgColor: "bg-blue-300",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhObwH3IBSJGPl5qBCWnsFJDwtF2ABk09n-w&s",
    name: "Michael T.",
    designation: "Recruitment Lead",
    text: "The automated hiring workflow has significantly reduced our time-to-hire. Managing candidates has never been this smooth and efficient.",
    bgColor: "bg-green-600",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background py-20 p-5 md:p-0">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-2xl md:text-5xl font-bold text-primary">
          Testimonials
        </h2>
        <p className="text-lg text-secondary max-w-4xl mx-auto mb-12 text-center">
          Here’s how our users are benefiting from the platform.
        </p>

        {/* Quote Icon using FontAwesome CDN */}
        <i className="fas fa-quote-left text-white text-6xl pb-4"></i>

        {/* Testimonial Content */}
        <div
          className="bg-white p-8 rounded-lg shadow-lg min-h-[300px] flex flex-col items-center relative overflow-hidden">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 flex flex-col items-center justify-center ${
                index === currentIndex ? "opacity-100 relative" : "opacity-0"
              }`}
            >
              {/* Profile Image */}
              <div
                className={`w-24 h-24 rounded-full overflow-hidden flex items-center justify-center ${quote.bgColor}`}>
                <img src={quote.img} alt={quote.name} className="w-full h-full object-cover" />
              </div>

              {/* Star Rating */}
              <ReactStars count={5} value={5} size={30} color2="#ffd700" edit={false} className="mt-3" />

              {/* Name & Designation */}
              <h4 className="text-2xl text-primary font-semibold mt-2">{quote.name}</h4>
              <h6 className="text-lg text-themeYellow">{quote.designation}</h6>

              {/* Testimonial Text */}
              <blockquote className="mt-4 text-secondary text-center px-4">{quote.text}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
