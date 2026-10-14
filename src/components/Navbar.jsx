import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    return (
      <div className="fixed top-4 sm:top-6 left-0 w-full z-40 flex justify-center px-4"></div>
    );
  };
};

export default Navbar;
