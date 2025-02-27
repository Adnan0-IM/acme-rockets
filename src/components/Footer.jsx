const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="mt-32 bg-[#0E756D] p-4 text-lg text-white scroll-m-44">
      <div className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          555 Astro Way
          <br />
          Fairfield, New Jersey 12345-5555
          <br />
          Email:
          <a href="mailto:inquiries@acmerockets.com">
            Inquires@AcmeRockets.com
          </a>
          <br />
          Phone: <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          <a href="#our-rockets" className="hover:opacity-90">
            Our Rockets
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contact-us" className="hover:opacity-90">
            Contact Us
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">{year}</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
