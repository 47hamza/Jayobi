import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../common/Button";


const Pricing = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-[1150px] mx-auto px-4 xl:px-6 w-full">
        <h2 className="text-2xl md:text-5xl font-bold text-primary text-center">Pricing Plans</h2>
        <p className="font-medium text-lg text-center text-secondary">Choose a plan that fits your team’s size and needs.</p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mt-12">
          <div className="bg-gradient-to-b from-gray-900 to-gray-300 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold text-white">Basic Plan</h3>
            <p className="text-gray-300 text-sm mt-2 text-center">
              Includes calendar management, availability sharing, and work shift planning.
            </p>
            <p className="text-2xl font-bold mt-4 text-white">$X/month</p>
            <ul className="font-normal mb-6 space-y-2 mt-4">
              <li>✔ Feature 1</li>
              <li>✔ Feature 2</li>
              <li>✔ Feature 3</li>
              <li>✖ Feature 4</li>
              <li>✖ Feature 5</li>
            </ul>
            <div className="flex justify-center mt-2">
              <Button className=" hover:bg-yellow-600 flex items-center gap-2  font-medium">
                Choose Plan
                <BsArrowRight className="fill-white" />
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-300 p-6 rounded-lg shadow-lg border-2 border-blue-500 flex flex-col justify-center items-center  ">
            <h3 className="text-2xl font-semibold text-white">Professional Plan</h3>
            <p className="font-light text-sm mt-2 text-gray-300 text-center">
              Everything in Basic plus job posting, CV Builder, candidate management, and holiday
              requests.
            </p>
            <p className="text-2xl font-bold text-white mt-4">$X/month</p>
            <ul className="space-y-2 mt-4 font-normal">
              <li>✔ Feature 1</li>
              <li>✔ Feature 2</li>
              <li>✔ Feature 3</li>
              <li>✔ Feature 4</li>
              <li>✖ Feature 5</li>
            </ul>
            <div className="flex justify-center mt-2">
            <Button className=" hover:bg-yellow-600 flex items-center gap-2  font-medium">
                Choose Plan
                <BsArrowRight className="fill-white" />
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-300 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center ">
            <h3 className="text-2xl font-semibold text-white">Enterprise Plan</h3>
            <p className="mt-4 font-light text-sm text-gray-300 text-center">
              For large teams with advanced needs. Includes all features plus priority support,
              custom integrations, and team management tools.
            </p>
            <p className="text-2xl font-bold mt-4 text-white">$X/month</p>
            <ul className="mt-4 space-y-2 font-light">
              <li>✔ Feature 1</li>
              <li>✔ Feature 2</li>
              <li>✔ Feature 3</li>
              <li>✔ Feature 4</li>
              <li>✔ Feature 5</li>
            </ul>
            <div className="flex justify-center mt-2">
            <Button className=" hover:bg-yellow-600 flex items-center gap-2  font-medium">
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
