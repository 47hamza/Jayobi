import { BsArrowRight } from "react-icons/bs";
import Button from "../common/Button";

const Pricing = () => {
  return (
    <section className="w-full px-6 py-16 md:py-20 bg-gray-100">
      <div className="max-w-[1240px] mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center">Pricing Plans</h2>
        <p className="font-medium text-lg text-center text-secondary">
          Choose a plan that fits your team’s size and needs.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mt-12">
          <div className="bg-background p-6 rounded-lg shadow-lg flex flex-col justify-between items-center">
            <h3 className="text-2xl font-semibold text-themeYellow">Basic Plan</h3>
            <p className="text-white text-sm mt-2 text-center h-[60px]">
              Includes calendar management, availability sharing, and work shift planning.
            </p>
            <p className="text-2xl font-bold mt-4 text-white">
              <span className="text-3xl text-themeYellow">$X</span>/month
            </p>
            <ul className="font-normal space-y-2 mt-4">
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 1
              </li>
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 2
              </li>
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 3
              </li>
              <li className="text-white">
                <span className="text-red-500">✖</span> Feature 4
              </li>
              <li className="text-white">
                <span className="text-red-500">✖</span> Feature 5
              </li>
            </ul>
            <div className="flex justify-center mt-2">
              <Button className=" bg-themeYellow flex items-center gap-2 font-medium">
                Choose Plan
                <BsArrowRight className="fill-white" />
              </Button>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-lg border-2 border-primary flex flex-col justify-between items-center  ">
            <h3 className="text-2xl font-semibold text-themeYellow">Professional Plan</h3>
            <p className="font-light text-sm mt-2 text-white text-center h-[60px]">
              Everything in Basic plus job posting, CV Builder, candidate management, and holiday
              requests.
            </p>
            <p className="text-2xl font-bold mt-4 text-white">
              <span className="text-3xl text-themeYellow">$X</span>/month
            </p>
            <ul className="space-y-2 mt-4 font-normal">
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 1
              </li>
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 2
              </li>
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 3
              </li>
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 4
              </li>
              <li className="text-white">
                <span className="text-red-500">✖</span> Feature 5
              </li>
            </ul>
            <div className="flex justify-center mt-2">
              <Button className=" hover:bg-themeYellow flex items-center gap-2  font-medium">
                Choose Plan
                <BsArrowRight className="fill-white" />
              </Button>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-lg flex flex-col justify-between items-center ">
            <h3 className="text-2xl font-semibold text-themeYellow">Enterprise Plan</h3>
            <p className="mt-2 font-light text-sm text-white text-center h-[60px]">
              For large teams with advanced needs. Includes all features plus priority support,
              custom integrations, and team management tools.
            </p>
            <p className="text-2xl font-bold mt-4 text-white">
              <span className="text-3xl text-themeYellow">$X</span>/month
            </p>
            <ul className="mt-4 space-y-2 font-light">
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 1
              </li>
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 2
              </li>
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 3
              </li>
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 4
              </li>
              <li className="text-white">
                <span className="text-green-500">✔</span> Feature 5
              </li>
            </ul>
            <div className="flex justify-center mt-2">
              <Button className=" hover:bg-themeYellow flex items-center gap-2  font-medium">
                Choose Plan
                <BsArrowRight className="fill-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
