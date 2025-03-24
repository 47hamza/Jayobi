import waitlistIcon from "../assets/waitlist/wait.svg";

export default function Waitlist() {
  return (
    <section className="w-full px-6 py-16 md:py-20 bg-themeYellow">
      <div className="max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl mb-2 font-bold text-primary leading-tight mb-4">
              Build a Highly Engaged Community Effortlessly
            </h1>
            <p className="text-secondary font-medium text-lg mb-6">
              Ready to simplify your team management? Start your free trial today or join our
              waiting list for new features!
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                className="w-full sm:w-72 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themeYellow"
                placeholder="Enter your e-mail address"
                required
              />
              <button
                type="submit"
                className="bg-background text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Join Waitlist
              </button>
            </form>
          </div>
          <div className="hidden lg:block">
            <img
              src={waitlistIcon}
              className="w-full max-w-xs mx-auto"
              loading="lazy"
              alt="Waitlist Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
