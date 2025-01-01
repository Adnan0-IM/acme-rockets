const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0E756D] text-white text-lg mt-32 p-4">
      <div className="max-w-4xl flex justify-between items-center mx-auto pb-8">
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
