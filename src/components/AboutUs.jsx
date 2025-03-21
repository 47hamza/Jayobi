import logo from "../assets/logo.jpeg";
import adam from "../assets/Team/adam.png";
import lauren from "../assets/Team/lauren.png";
import Mona1 from "../assets/Team/mono1.png";
import Mona2 from "../assets/Team/mona2.png";
import Button from "../common/Button";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="py-16 md:py-24 bg-[#EEF7F8]"
    >
      <div className="relative">
        <div className="bg-[#DFEDEF] absolute -left-28 size-56 rounded-full" />
        <div
          className="bg-[#F8AEC3] absolute size-36 rounded-lg -right-20 top-[20%] -rotate-45"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
        <div className="max-w-[1240px] mx-auto px-4 xl:px-6 w-full relative">
          <div>
            <div className="grid md:grid-cols-2 items-end">
              <div>
                <h6 className="font-medium uppercase text-primary mb-6">About Us</h6>
                <h2 className="text-3xl md:text-5xl font-semibold !leading-tight max-w-[400px]">
                  Meet the MaterBiz Team
                </h2>
              </div>
              <div className="space-y-2.5 max-w-[500px] md:ml-auto">
                <p>
                  At MaterBiz, we are a passionate team dedicated to design and creating content
                  that delivers value
                </p>
                <p>
                  We draw inspiration from industry leaders like Vilma Nuñez, Hormozi, and Tony
                  Robbins
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={adam}
                  className="w-full"
                  loading="lazy"
                />
                <div className="bg-white p-6">
                  <p className="text-xl font-bold">Adam Huffmeyer</p>
                  <p className="mt-2">
                    Elementum cursus diam cursus nunc morbi ullam corper diam elemen tum. Eget proin
                    eu
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={lauren}
                  className="w-full"
                  loading="lazy"
                />
                <div className="bg-white p-6">
                  <p className="text-xl font-bold">Lauren Huffmeyer</p>
                  <p className="mt-2">
                    Elementum cursus diam cursus nunc morbi ullam corper diam elemen tum. Eget proin
                    eu
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={Mona1}
                  className="w-full"
                  loading="lazy"
                />
                <div className="bg-white p-6">
                  <p className="text-xl font-bold">Mona Campbell</p>
                  <p className="mt-2">
                    Elementum cursus diam cursus nunc morbi ullam corper diam elemen tum. Eget proin
                    eu
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={Mona2}
                  className="w-full"
                  loading="lazy"
                />
                <div className="bg-white p-6">
                  <p className="text-xl font-bold">Mona Campbell</p>
                  <p className="mt-2">
                    Elementum cursus diam cursus nunc morbi ullam corper diam elemen tum. Eget proin
                    eu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div
            className="bg-primary overflow-hidden rounded-3xl w-full p-6 md:p-10 space-y-6 relative"
            style={{ boxShadow: "0px 2px 0px 10px #EEF7F8" }}
          >
            <div className="text-center px-6 py-14 !pt-20 space-y-6 bg-white rounded-2xl -mt-14">
              <img
                src={logo}
                alt="MaterBiz"
                className="w-fit mx-auto"
                loading="lazy"
              />
              <h2 className="text-3xl md:text-5xl !leading-tight font-semibold max-w-[800px] mx-auto">
                At MaterBiz, we don&apos;t just deliver services; we deliver results.
              </h2>
              <h6 className="text-center font-medium uppercase text-primary">
                Here&apos;s our promise to you:
              </h6>
              <p className="opacity-80">
                We guarantee high-quality designs and content tailored to your needs. <br />
                Your success is our priority—whether it&apos;s creating engaging content, driving
                sales, or building brand recognition.
              </p>
              <Button>Ready to transform your business? Let&apos;s get started!</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
