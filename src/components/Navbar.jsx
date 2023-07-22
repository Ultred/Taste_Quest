import { Link } from "react-router-dom";
import Searchbar from "./searchbar";
import logo from "./img/logo.png";
function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-30 bg-white">
        <nav className="text-black flex  justify-between max-w-screen-xl  mx-auto px-6 py-3">
          <Link to="/">
            <img className="md:h-16 h-12" src={logo} alt="Recipe Hunt" />
          </Link>
          <Searchbar />
          <ul className="md:flex gap-7  justify-center items-center hidden uppercase text-colormain font-bold">
            <Link to="/">Home</Link>
            <Link to="/Favorites">Favorites</Link>
            <Link to="/contactus">Contact Us</Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
