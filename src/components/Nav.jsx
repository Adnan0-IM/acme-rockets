const Nav = ({ open, setOpen }) => {
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <section className="sticky top-0 z-50 overflow-hidden bg-[#0E756D] px-4 text-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between py-3">
        <h1 className="text-3xl font-medium lg:text-xl">
          <a href="#hero">🚀Acme Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggle}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav
            className="hidden list-none gap-8 text-lg md:flex"
            aria-label="main"
          >
            <li>
              <a href="#our-rockets">Our Rockets</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Nav;
