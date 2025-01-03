import { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0">
      <Nav open={open} setOpen={setOpen} />
      {open && <MobileNav setMenuOpen={setOpen}/>}
    </header>
  );
};

export default Header;
