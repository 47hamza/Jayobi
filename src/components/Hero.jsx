import Button from "../common/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-16 md:py-24 !bg-no-repeat !bg-cover !bg-center overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 xl:px-6 w-full flex flex-col gap-8 md:flex-row items-center lg:gap-20">
        <div className="md:w-[50%] w-full">
          <h2 className="text-2xl md:text-5xl text-main_text font-semibold ">
            Simplify Your Team Management with Our All-in-One Platform
          </h2>

          <p className="max-w-[520px] mt-6">
            From scheduling and availability sharing to recruitment and payslip
            management—everything you need in one intuitive tool.
          </p>
          <Button className="mt-5 bg-secondary text-white">Get Started Today</Button>
        </div>
        {/* <div className="md:w-[50%] w-full grid place-items-center">
            <img
              src={heroImge}
              alt="Welcome to MaerBiz"
              loading="lazy"
            />
          </div> */}
      </div>
    </section>
  );
};

export default Hero;
