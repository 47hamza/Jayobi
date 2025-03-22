import { FaCalendarAlt, FaUsers, FaBriefcase, FaRegFileAlt, FaClock, FaComments, FaUserCheck, FaFileInvoiceDollar, FaPlane } from "react-icons/fa";

const features = [
  { icon: <FaCalendarAlt />, title: "Calendar Management", description: "Create and manage calendars to easily track team availability, deadlines, and key events—all in one place." },
  { icon: <FaUsers />, title: "Availability Sharing", description: "Real-time availability sharing with your team. Changes are automatically reflected in work schedules, ensuring everyone is always up to date." },
  { icon: <FaClock />, title: "Workshift Planning", description: "Plan, assign, and track shifts effortlessly. The work schedule integrates with both availability and holiday requests for smooth planning." },
  { icon: <FaPlane />, title: "Holidays & Time-Off Requests", description: "Team members can easily submit holiday requests, which are instantly integrated into their work shifts and calendars—no confusion, no missed time-offs." },
  { icon: <FaBriefcase />, title: "Job Posting & Hiring Requests", description: "Post job openings or initiate hiring requests directly from your dashboard, then manage candidate applications through a centralized portal." },
  { icon: <FaUserCheck />, title: "Candidate Management", description: "Keep track of candidates’ progress, from application to interview and hiring decisions—all in one place." },
  { icon: <FaRegFileAlt />, title: "CV Builder", description: "Create professional resumes effortlessly with our CV Builder tool. Customize templates and generate polished resumes in minutes." },
  { icon: <FaFileInvoiceDollar />, title: "Payslips Sharing & Storage", description: "Securely share payslips with your team and store them for easy access. Simplify payroll communication and ensure employees have access to their payment history." },
  { icon: <FaComments />, title: "Integrated Chat", description: "Stay connected with your team through real-time chat. Share updates, discuss shifts, and collaborate easily—all within the app." }
];

export default function Features() {
  return (
    <section className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Experience Seamless Team Management</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Manage work schedules, recruitment, communication, and more with our all-in-one platform.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition transform hover:scale-105">
              <div className="text-blue-600 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
