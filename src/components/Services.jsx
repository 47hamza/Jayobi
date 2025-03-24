import {
  FaBriefcase,
  FaCalendarAlt,
  FaClock,
  FaComments,
  FaFileInvoiceDollar,
  FaPlane,
  FaRegFileAlt,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import servicebg from "../assets/Services/service-bg.png";


const features = [
  {
    icon: <FaCalendarAlt className="text-themeYellow"/>,
    title: "Calendar Management",
    description:
      "Create and manage calendars to easily track team availability, deadlines, and key events—all in one place.",
  },
  {
    icon: <FaUsers className="text-themeYellow"/>,
    title: "Availability Sharing",
    description:
      "Real-time availability sharing with your team. Changes are automatically reflected in work schedules, ensuring everyone is always up to date.",
  },
  {
    icon: <FaClock className="text-themeYellow"/>,
    title: "Workshift Planning",
    description:
      "Plan, assign, and track shifts effortlessly. The work schedule integrates with both availability and holiday requests for smooth planning.",
  },
  {
    icon: <FaPlane className="text-themeYellow"/>,
    title: "Holidays & Time-Off Requests",
    description:
      "Team members can easily submit holiday requests, which are instantly integrated into their work shifts and calendars—no confusion, no missed time-offs.",
  },
  {
    icon: <FaBriefcase className="text-themeYellow"/>,
    title: "Job Posting & Hiring Requests",
    description:
      "Post job openings or initiate hiring requests directly from your dashboard, then manage candidate applications through a centralized portal.",
  },
  {
    icon: <FaUserCheck className="text-themeYellow"/>,
    title: "Candidate Management",
    description:
      "Keep track of candidates’ progress, from application to interview and hiring decisions—all in one place.",
  },
  {
    icon: <FaRegFileAlt className="text-themeYellow"/>,
    title: "CV Builder",
    description:
      "Create professional resumes effortlessly with our CV Builder tool. Customize templates and generate polished resumes in minutes.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-themeYellow"/>,
    title: "Payslips Sharing & Storage",
    description:
      "Securely share payslips with your team and store them for easy access. Simplify payroll communication and ensure employees have access to their payment history.",
  },
  {
    icon: <FaComments className="text-themeYellow"/>,
    title: "Integrated Chat",
    description:
      "Stay connected with your team through real-time chat. Share updates, discuss shifts, and collaborate easily—all within the app.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 md:!pt-32 !bg-no-repeat !bg-cover max-md:!bg-fixed md:-mt-14 relative"
      style={{ background: `url(${servicebg})` }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-primary">
          Features
        </h2>
        <p className="text-lg text-secondary max-w-4xl mx-auto mb-12">
          Experience seamless management of your team’s work schedules,
          recruitment, communication, and more with our all-in-one platform.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition transform hover:scale-105"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-secondary text-center font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
