import Button from "../common/Button";
import heroImge from '../assets/6206964.jpg'

const Hero = () => {
  return (
    <section
      id="home"
      className="py-16 md:py-24"
    >
      <div className="max-w-[1240px] mx-auto px-4 xl:px-6 w-full flex flex-col gap-8 md:flex-row items-center lg:gap-20">
        <div className="md:w-[50%] w-full">
          <h2 className="text-3xl md:text-5xl mb-2 text-primary font-semibold  ">
            Simplify Your Team Management with Our All-in-One Platform
          </h2>

          <p className="max-w-[520px] mt-6 text-secondary">
            From scheduling and availability sharing to recruitment and payslip
            management—everything you need in one intuitive tool.
          </p>
          <Button className="mt-5 ">Get Started Today</Button>
        </div>
        <div className="md:w-[35%] w-full grid ">
            <img
              src={heroImge}
              // alt="Welcome to MaerBiz"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
      </div>
    </section>
  );
};

export default Hero;
