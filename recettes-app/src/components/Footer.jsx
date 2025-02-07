import { useQuery } from "@apollo/client";
import { GET_FOOTER_PAGES } from "../api/queries";
import { Link } from "react-router-dom";

function Footer() {
  const { loading, error, data } = useQuery(GET_FOOTER_PAGES);
  console.log("📡 Données du footer :", { loading, error, data });

  if (loading)
    return (
      <footer className="text-center p-4 text-gray-500">
        Chargement du footer...
      </footer>
    );
  if (error)
    return (
      <footer className="text-center p-4 text-red-500">
        Erreur : {error.message}
      </footer>
    );

  // Liste des pages à afficher dans le footer
  const validPages = [
    "Mentions Légales",
    "Contact",
    "Politique de confidentialité",
  ];

  return (
    <footer className="bg-gray-100 text-center p-4 mt-10">
      <nav>
        <ul className="flex justify-center space-x-6 text-blue-600">
          {data.pages.nodes
            .filter((page) => validPages.includes(page.title)) // Filtrage des pages
            .map((page) => (
              <li key={page.slug}>
                <Link to={`/page/${page.slug}`}>{page.title}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <p className="text-gray-500 mt-2">
        © {new Date().getFullYear()} Recettes de Thomas
      </p>
    </footer>
  );
}

export default Footer;
