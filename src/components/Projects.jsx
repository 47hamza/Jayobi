import alpha from "../assets/Projects/alpha.png";
import beta from "../assets/Projects/beta.png";
import gamma from "../assets/Projects/gamma.png";
import projectBg from "../assets/Projects/project-bg.png";
import Button from "../common/Button";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="bg-[#DFEDEF] absolute -right-28 -top-28 size-56 rounded-full" />
      <div
        className="bg-[#F8AEC3] absolute size-36 rounded-lg -left-20 top-[20%] -rotate-180"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
      <div className="max-w-[1240px] mx-auto px-4 xl:px-6 w-full relative">
        <img
          src={projectBg}
          alt="Projects"
          className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-7"
          loading="lazy"
        />
        <div className="relative z-10">
          <h6 className="text-center font-medium uppercase text-primary mb-6">Projects</h6>
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug text-center">
            Examples of Our Work
          </h2>
          <p className="text-lg text-center mt-3">
            Here are examples of MindBusiness&apos; standout projects.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6">
            <div>
              <img
                src={alpha}
                className="w-full"
                loading="lazy"
              />
              <p className="text-3xl font-medium mt-6 mb-2">Project Alpha</p>
              <p>A social media branding package for a small business</p>
            </div>
            <div>
              <img
                src={beta}
                className="w-full"
                loading="lazy"
              />
              <p className="text-3xl font-medium mt-6 mb-2">Project Beta</p>
              <p> A landing page and sales letter campaign for an online course launch.</p>
            </div>
            <div>
              <img
                src={gamma}
                className="w-full"
                loading="lazy"
              />
              <p className="text-3xl font-medium mt-6 mb-2">Project Gamma</p>
              <p>Custom video editing and brand integration for a professional webinar series</p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Button>Explore more projects by MindBusiness here</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
