import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_RECIPES } from "./api/queries";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const { loading, error, data } = useQuery(GET_RECIPES);
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  if (loading)
    return (
      <p className="text-center text-gray-500 text-lg">🔄 Chargement...</p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 text-lg">
        ❌ Erreur : {error.message}
      </p>
    );

  // Filtrage des recettes
  let filteredPosts = data.posts.nodes;
  if (filter !== "all") {
    filteredPosts = filteredPosts.filter((post) =>
      post.categories.nodes?.some((cat) => cat.name.toLowerCase() === filter)
    );
  }

  // Limiter à 9 si showAll est false
  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 9);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-mint">
          Mes Recettes
        </h1>

        {/* Menu de tri */}
        <div className="mb-6 flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded ${
              filter === "all" ? "bg-mint text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            Tout
          </button>
          <button
            className={`px-4 py-2 rounded ${
              filter === "entrée" ? "bg-mint text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("entrée")}
          >
            Entrée
          </button>
          <button
            className={`px-4 py-2 rounded ${
              filter === "plat" ? "bg-mint text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("plat")}
          >
            Plat
          </button>
          <button
            className={`px-4 py-2 rounded ${
              filter === "dessert" ? "bg-mint text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("dessert")}
          >
            Dessert
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post) => (
            <RecipeCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              image={post.featuredImage?.node.sourceUrl}
              note={parseInt(post.customFields?.note) || 0}
            />
          ))}
        </div>

        {/* Bouton afficher plus */}
        {filteredPosts.length > 9 && !showAll && (
          <div className="mt-6 text-center">
            <button
              className="px-4 py-2 bg-mint text-white rounded"
              onClick={() => setShowAll(true)}
            >
              Afficher plus
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
