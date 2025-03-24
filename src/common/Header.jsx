import logo from "../assets/logo2.jpeg";

const links = [
  {
    href: "#home",
    title: "Home",
  },
  {
    href: "#services",
    title: "Services",
  },
  {
    href: "#how-it-works",
    title: "How It Works",
  },
  {
    href: "#testimonials",
    title: "Testimonials",
  },
  {
    href: "#faq",
    title: "FAQ",
  },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-[1240px] mx-auto px-4 xl:px-6 w-full flex gap-3 justify-between items-center py-3 md:py-4">
        <a
          href="/"
          className="text-lg uppercase text-main_text hover:text-main_text"
        >
          <img
            src={logo}
            alt="Jayobi"
            className="w-14"
            loading="lazy"
          />
        </a>

        <div className="flex gap-6 md:gap-10 items-center">
          {links.map(link => (
            <a
              key={link.title}
              href={link.href}
              className="text-main_text hover:text-main_text max-sm:hidden hover:underline"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
