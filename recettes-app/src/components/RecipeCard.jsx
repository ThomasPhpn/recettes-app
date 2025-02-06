import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RecipeCard({ slug, title, image, categories = [], tags = [], note }) {
  console.log(`Note reçue pour ${title} :`, note); // 🛠 Debug : voir la valeur exacte de `note`

  const renderStars = (note) => {
    const noteNumber = Number(note) || 0; // ✅ S'assurer que `note` est un nombre
    console.log(`Note convertie pour ${title} :`, noteNumber); // 🛠 Debug : voir la conversion en nombre

    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < noteNumber ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        {/* Affichage des étoiles ⭐️ */}
        <div className="mt-2 text-lg">{renderStars(note)}</div>

        <Link
          to={`/recette/${slug}`}
          className="text-blue-600 font-semibold mt-4 inline-block"
        >
          Voir la recette →
        </Link>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired })
  ),
  tags: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired })
  ),
  note: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // ✅ Autoriser string et number
};

export default RecipeCard;
