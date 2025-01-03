const MobileNav = ({setMenuOpen}) => {
  return (
    <nav
      id="mobile-menu"
      className="aria-label='mobile' flex min-h-screen flex-col items-center bg-black py-8 text-5xl md:hidden"
    >
      <a href="#hero" className="w-full py-6 text-center hover:opacity-90"
      onClick={() => setMenuOpen(false)}>
        Home
      </a>
      <a
        href="#our-rockets"
        className="w-full py-6 text-center hover:opacity-90"
        onClick={() => setMenuOpen(false)}
      >
        Our Rockets
      </a>
      <a
        href="#testimonials"
        className="w-full py-6 text-center hover:opacity-90"
        onClick={() => setMenuOpen(false)}
      >
        Testimonials
      </a>
      <a
        href="#contact-us"
        className="w-full py-6 text-center hover:opacity-90"
        onClick={() => setMenuOpen(false)}
      >
        Contact Us
      </a>
      <a href="#footer" className="w-full py-6 text-center hover:opacity-90"
      onClick={() => setMenuOpen(false)}>
        Legal
      </a>
    </nav>
  );
};

export default MobileNav;
