import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Searchbar from "./searchbar";
import { RxExit } from "react-icons/rx";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-white font-Oswald flex items-center justify-between pr-3 shadow-md">
        <nav className="bg-colormain w-[25%] py-6 px-3">
          <Link className="text-colorwhite text-xl" to="/">
            TASTE QUEST
          </Link>
        </nav>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer lg:hidden"
          onClick={toggleMobileMenu}
        >
          <span className="w-7 h-1 bg-colormain"></span>
          <span className="w-7 h-1 bg-colormain"></span>
          <span className="w-7 h-1 bg-colormain"></span>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-0 left-0 w-full h-full bg-white z-40"
            >
              <div className="flex justify-end p-4">
                <button
                  className="text-3xl text-colormain focus:outline-none"
                  onClick={closeMobileMenu}
                >
                  <RxExit />
                </button>
              </div>
              <ul className="flex flex-col gap-4 font-Lato font-semibold text-colormain text-[15px] py-4 px-6">
                <li>
                  <Link to="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Favorites" onClick={closeMobileMenu}>
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link to="/contactus" onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="hidden lg:flex lg:gap-14 font-Lato font-semibold text-colormain text-[15px]">
          <Link to="/">Home</Link>
          <Link to="/Favorites">Favorites</Link>
          <Link to="/contactus">Contact Us</Link>
        </ul>

        <Searchbar />
      </header>
    </>
  );
}

export default Navbar;
