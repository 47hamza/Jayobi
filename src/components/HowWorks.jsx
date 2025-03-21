import { SiGnuprivacyguard } from "react-icons/si";
import { FaUsers, FaTasks, FaCogs } from "react-icons/fa";

const data = [
  {
    icon: <SiGnuprivacyguard className="text-4xl fill-primary mx-auto mb-4" />, 
    title: "Sign Up",
    desc: "Create your account and personalize your dashboard in minutes.",
  },
  {
    icon: <FaUsers className="text-4xl fill-primary mx-auto mb-4" />, 
    title: "Add Your Team",
    desc: "Invite team members and set up roles, availability, and schedules.",
  },
  {
    icon: <FaTasks className="text-4xl fill-primary mx-auto mb-4" />, 
    title: "Start Managing",
    desc: "Post job openings, request holidays, assign shifts, and start collaborating instantly.",
  },
  {
    icon: <FaCogs className="text-4xl fill-primary mx-auto mb-4" />, 
    title: "Streamline Operations",
    desc: "Enjoy a more organized team with seamless integrations across all features.",
  },
];

export default function HowWork() {
  return (
    <section className="w-full px-6 py-16 md:py-20" id="how-it-works">
      <div className="max-w-[1280px] mx-auto w-full">
        <h2 className="mt-3 text-center text-2xl md:text-4xl font-medium !font-poppins text-primary">
          How it Works
        </h2>
        <p className="text-center text-sm font-light">
          Getting started is simple. Here’s how you can begin.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {data.map((itm, idx) => (
            <div
              key={idx}
              className="px-8 py-8 w-full relative overflow-hidden rounded-lg text-center  bg-[#F4f4f4]"
            >
              <div className="relative z-30">
                {itm.icon}
                <p className="text-xl md:text-3xl mb-2.5 font-semibold">{itm.title}</p>
                <div className="max-w-[300px] mx-auto">
                  <p className="mb-4">{itm.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
