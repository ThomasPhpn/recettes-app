import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="shadow-celadon p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1>
          <Link to="/" className="text-2xl font-bold text-raspberry">
            Ma Cuisine
          </Link>
        </h1>

        <ul className="flex space-x-6 text-lg font-bold text-mint hover:text-emerald-900">
          <li>
            <Link to="/saison">Fruits & Légumes</Link>
          </li>
          <li>
            <Link to="/vins">Mes Vins</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
