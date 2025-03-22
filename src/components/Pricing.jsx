import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-main_text">Pricing Plans</h2>
        <p className="font-light text-sm">Choose a plan that fits your team’s size and needs.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-b from-gray-900 to-gray-300 p-6 rounded-lg shadow-lg w-80 mx-auto">
            <h3 className="text-2xl font-semibold text-white">Basic Plan</h3>
            <p className="text-gray-300 text-sm mt-2">
              Includes calendar management, availability sharing, and work shift planning.
            </p>
            <p className="text-2xl font-bold mt-4 text-white">$X/month</p>
            <ul className="text-gray-300 mb-6 space-y-2 mt-4">
              <li>✔ Feature 1</li>
              <li>✔ Feature 2</li>
              <li>✔ Feature 3</li>
            </ul>
            <div className="flex justify-center mt-2">
              <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-yellow-600 flex items-center gap-2">
                Choose Plan
                <BsArrowRight className="fill-black" />
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-300 p-6 rounded-lg shadow-lg border-2 border-blue-500 w-80 mx-auto">
            <h3 className="text-2xl font-semibold text-white">Professional Plan</h3>
            <p className="font-light text-sm mt-2 text-gray-300">
              Everything in Basic plus job posting, CV Builder, candidate management, and holiday requests.
            </p>
            <p className="text-2xl font-bold text-white mt-4">$X/month</p>
            <ul className="space-y-2 mt-4 text-gray-300">
              <li>✔ Feature 1</li>
              <li>✔ Feature 2</li>
              <li>✔ Feature 3</li>
              <li>✔ Feature 4</li>
            </ul>
            <div className="flex justify-center mt-2">
              <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-yellow-600 flex items-center gap-2">
                Choose Plan
                <BsArrowRight className="fill-black" />
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-300 p-6 rounded-lg shadow-lg w-80 mx-auto">
            <h3 className="text-2xl font-semibold text-white">Enterprise Plan</h3>
            <p className="mt-4 font-light text-sm text-gray-300">
              For large teams with advanced needs. Includes all features plus priority support,
              custom integrations, and team management tools.
            </p>
            <p className="text-2xl font-bold mt-4 text-white">$X/month</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>✔ Feature 1</li>
              <li>✔ Feature 2</li>
              <li>✔ Feature 3</li>
              <li>✔ Feature 4</li>
              <li>✔ Feature 5</li>
            </ul>
            <div className="flex justify-center mt-2">
              <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-yellow-600 flex items-center gap-2">
                Choose Plan
                <BsArrowRight className="fill-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
