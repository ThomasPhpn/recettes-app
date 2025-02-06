import { useQuery } from "@apollo/client";
import { GET_RECIPES } from "./api/queries";
import RecipeCard from "./components/RecipeCard";

function App() {
  const { loading, error, data } = useQuery(GET_RECIPES);

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

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        🍽️ Mes Recettes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.posts.nodes.map((post) => (
          <RecipeCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            image={post.featuredImage?.node.sourceUrl}
            note={parseInt(post.customFields?.note) || 0} // ✅ Convertir en nombre
          />
        ))}
      </div>
    </div>
  );
}

export default App;
