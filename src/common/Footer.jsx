import logo2 from "../assets/logo2.jpeg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import discord from "../assets/discord.svg";

const Footer = () => {
  return (
    <footer className="w-full px-4 xl:px-8 py-12 md:pt-16 pb-8 border-t border-[#291A27] bg-background">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-12 gap-6">
          <div>
            <img
              src={logo2}
              alt="logo"
              className="w-14"
            />
            <p className="mt-6 text-sm font-light text-secondary font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias ea eos ut
              sapiente voluptatibus fuga veniam
            </p>
            <div className="flex gap-4 md:gap-6 items-start mt-6">
              <a
                href="#"
                target="_blank"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-6"
                />
              </a>
              <a
                href="#"
                target="_blank"
              >
                <img
                  src={discord}
                  alt="discord"
                  className="w-6"
                />
              </a>
              <a
                href="#"
                target="_blank"
              >
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-6"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-lg font-semibold">Quick Links</h4>
            <a
              href="#"
              className="text-secondary"
            >
              About us
            </a>

            <a
              href="#"
              className="text-secondary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-secondary"
            >
              Terms of Service
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-lg font-semibold">Help</h4>
            <a
              href="#"
              className="text-secondary"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-secondary"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-secondary"
            >
              Have Your Say
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-lg font-semibold">Get In Touch</h4>
            <a
              href="#"
              className="text-secondary"
            >
              Address
            </a>
            <a
              href="#"
              className="text-secondary"
            >
              Email
            </a>
            <a
              href="#"
              className="text-secondary"
            >
              Phone Number
            </a>
          </div>
        </div>

        <hr className="mt-12 bg-[#D9D9D933] h-[1px]" />

        <p className="text-secondary font-light text-sm text-center mt-7">
          © Copyright 2022, All Rights Reserved by Jayobi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
