const Header = () => {
  return (
    <header className="bg-[#0E756D] text-white sticky top-0 z-50 overflow-hidden p-4">
      <div className="flex  py-4 justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-medium"><a href="#hero">🚀Acme Rockets</a></h1>
        <nav>
          <ul className="flex list-none text-lg gap-8">
            <li>
              <a href="#our-rockets">Our Rockets</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
