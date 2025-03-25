import { BsArrowRight } from "react-icons/bs";
import Button from "../common/Button";
import projectBg from "../assets/Projects/pricing-bg.png";

const plans = [
  {
    name: "Basic Plan",
    price: "$X",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    excludedFeatures: ["Feature 4", "Feature 5"],
  },
  {
    name: "Professional Plan",
    price: "$X",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    excludedFeatures: ["Feature 5"],
  },
  {
    name: "Enterprise Plan",
    price: "$X",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    excludedFeatures: [],
  },
];

const Pricing = () => {
  return (
    <section className="w-full px-6 py-16 md:py-20 bg-gray-100 relative">
      <div className="absolute -right-28 -top-28 size-56 rounded-full bg-[#DFEDEF]" />
      <div
        className="absolute size-36 rounded-lg -left-20 top-[20%] -rotate-180 bg-[#F8AEC3]"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="max-w-[1240px] mx-auto px-4 xl:px-6 w-full relative">
        <img
          src={projectBg}
          alt="Projects"
          className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-7"
          loading="lazy"
        />

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Pricing Plans</h2>
          <p className="font-medium text-lg text-secondary mt-2">
            Choose a plan that fits your team’s size and needs.
          </p>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mt-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg flex flex-col items-center bg-black border border-gray-700`}
              >
                <h3 className="text-2xl font-semibold text-themeYellow">{plan.name}</h3>
                <p className="text-white text-sm mt-2 text-center h-[60px]">
                  {index === 0
                    ? "Includes calendar management, availability sharing, and work shift planning."
                    : index === 1
                      ? "Everything in Basic plus job posting, CV Builder, candidate management, and holiday requests."
                      : "For large teams with advanced needs. Includes all features plus priority support, custom integrations, and team management tools."}
                </p>
                <p className="text-2xl font-bold mt-4 text-white">
                  <span className="text-3xl text-themeYellow">{plan.price}</span>/month
                </p>

                <ul className="space-y-2 mt-4 font-normal">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-white"
                    >
                      <span className="text-green-500">✔</span> {feature}
                    </li>
                  ))}
                  {plan.excludedFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="text-white"
                    >
                      <span className="text-red-500">✖</span> {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center mt-4">
                  <Button className="bg-themeYellow hover:bg-opacity-90 flex items-center gap-2 font-medium">
                    Choose Plan <BsArrowRight className="fill-white" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
