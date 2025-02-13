import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="shadow-md bg-champagne p-4">
      <ul className="max-w-5xl mx-auto flex justify-center space-x-8 text-lg font-bold text-raspberry">
        <li>
          <Link to="/" className={isActive("/") ? "underline" : ""}>
            Mes Recettes
          </Link>
        </li>
        <li>
          <Link to="/saison" className={isActive("/saison") ? "underline" : ""}>
            Fruits & Légumes
          </Link>
        </li>
        <li>
          <Link to="/vins" className={isActive("/vins") ? "underline" : ""}>
            Mes Vins
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
