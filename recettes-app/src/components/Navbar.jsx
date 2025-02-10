import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-celadon shadow-md p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* ✅ Logo - Lien vers la page d'accueil */}
        <Link to="/" className="text-2xl font-bold text-raspberry">
          Ma Cuisine
        </Link>

        {/* ✅ Menu */}
        <ul className="flex space-x-6 text-lg font-bold">
          <li>
            <Link to="/saison" className="text-neutral-50 hover:text-gray-500">
              Fruits & Légumes
            </Link>
          </li>
          <li>
            <Link to="/vins" className="text-neutral-50 hover:text-gray-500">
              Mes Vins
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
