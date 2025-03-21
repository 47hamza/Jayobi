import { GoArrowUpRight } from "react-icons/go";
import bg from "../assets/Services/service-bg.png";
import Button from "../common/Button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaXTwitter } from "react-icons/fa6";
import borders from "../assets/contact-border.png";

export default function Contact() {
  return (
    <section
      className="py-16 md:py-24 md:!pt-48 !bg-no-repeat !bg-cover max-md:!bg-fixed md:-mt-48"
      style={{ background: `url(${bg})` }}
    >
      <div className="max-w-[1240px] mx-auto px-4 xl:px-6 w-full">
        <div className="grid md:grid-cols-2 items-center gap-14 md:gap-8">
          <div className="space-y-8">
            <h2 className="text-white font-semibold text-3xl md:text-5xl !leading-tight max-w-[420px]">
              Get in Touch with MaterBiz
            </h2>

            <hr className="w-full border-white opacity-20 max-w-[400px]" />

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="size-11 min-w-11 bg-[#FFEC00] rounded-full grid place-items-center">
                  <FiPhone
                    stroke="#222232"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-white">Contact Us</p>
                  <p className="text-white">+088 (246) 642-27-10</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-11 min-w-11 bg-[#FFEC00] rounded-full grid place-items-center">
                  <HiOutlineEnvelope
                    stroke="#222232"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-white">Email</p>
                  <p className="text-white">email@email.com</p>
                </div>
              </div>
            </div>

            <hr className="w-full border-white opacity-20 max-w-[400px]" />

            <div className="mt-10">
              <p className="text-white text-xl font-medium">Our social media</p>
              <div className="flex gap-4 items-center mt-4">
                <a
                  href="#"
                  className="size-10 grid place-items-center bg-gray-700 rounded-full"
                >
                  <FaLinkedinIn className="fill-white text-xl" />
                </a>
                <a
                  href="#"
                  className="size-10 grid place-items-center bg-gray-700 rounded-full"
                >
                  <FaXTwitter className="fill-white text-xl" />
                </a>
                <a
                  href="#"
                  className="size-10 grid place-items-center bg-gray-700 rounded-full"
                >
                  <FaInstagram className="fill-white text-xl" />
                </a>
                <a
                  href="#"
                  className="size-10 grid place-items-center bg-gray-700 rounded-full"
                >
                  <FaFacebookF className="fill-white text-xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={borders}
              alt="borders"
              className="absolute -left-[150px] top-1/2 -translate-y-1/2 max-md:hidden"
              loading="lazy"
            />
            <form
              onSubmit={e => e.preventDefault()}
              className="bg-white px-6 md:px-8 py-8 md:py-10 rounded-2xl relative"
            >
              <p className="text-3xl font-medium mb-6 text-center">
                Contact MaterBiz to learn more about our services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-5">
                <div>
                  <label className="block mb-2 font-medium">Name*</label>
                  <input
                    required
                    className="border border-[#dfdfdf] rounded-lg w-full p-2 bg-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-5">
                <div>
                  <label className="block mb-2 font-medium">Email*</label>
                  <input
                    required
                    className="border border-[#dfdfdf] rounded-lg w-full p-2 bg-transparent"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium">Your Message</label>
                <textarea className="border border-[#dfdfdf] rounded-lg w-full p-2 bg-transparent min-h-[120px] max-h-[180px]"></textarea>
              </div>

              <Button
                type="submit"
                className="capitalize w-full text-center flex items-center justify-center gap-2"
              >
                Send Message
                <span>
                  <GoArrowUpRight className="fill-white" />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
