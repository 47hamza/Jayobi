import servicebg from "../assets/Services/service-bg.png";
import { Fragment } from "react";

const data = [
  {
    icon: "⚡️",
    title: "High Priority Services",
    points: [
      "Design for social media graphics and video editing",
      "Landing pages and sales letters.",
      "Custom Linktr.ee creation",
    ],
  },
  {
    icon: "👓",
    title: "Secondary Services",
    points: [
      "Website redesign, including e-commerce integration",
      "Professional editing for course videos",
    ],
  },
  {
    icon: "🚀",
    title: "Future Launches",
    points: [
      "Course platform (Sept. 2025)",
      "App with various tests (Jun. 2025)",
      "Personal Linktr.ee & websites (Mar.2025)",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 md:!pt-32 !bg-no-repeat !bg-cover max-md:!bg-fixed md:-mt-14 relative"
      style={{ background: `url(${servicebg})` }}
    >
      <div className="max-w-[1240px] mx-auto px-4 xl:px-6 w-full">
        <h2 className="text-white text-center text-3xl md:text-5xl font-semibold mb-10">
          Our Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data?.map((itm, idx) => (
            <div
              key={idx + 1}
              className="px-6 py-8 bg-white w-full rounded-2xl text-center space-y-5"
              style={{
                boxShadow: "0px 7.86px 0px 0px #4C4C67",
              }}
            >
              <h2 className="text-6xl">{itm.icon}</h2>
              <p className="font-bold text-2xl">{itm.title}</p>

              <div className="max-w-[300px] mx-auto">
                {itm.points.map((p, i) => (
                  <Fragment key={p}>
                    <p>{p}</p>
                    {i < itm.points.length - 1 && (
                      <hr className="w-full border-gray-800 my-2.5 opacity-20" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
