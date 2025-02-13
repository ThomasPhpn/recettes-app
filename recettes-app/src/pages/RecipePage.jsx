import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const GET_RECIPE = gql`
  query GetRecipe($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

function RecipePage() {
  console.log("Params récupérés :", useParams()); // Vérification des paramètres d'URL
  const { slug } = useParams();
  console.log("Slug récupéré :", slug); // Vérification si slug est bien extrait

  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { slug },
    skip: !slug,
  });

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

  if (!data || !data.post) {
    return (
      <p className="text-center text-red-500 text-lg">
        ❌ Aucune recette trouvée.
      </p>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">
          {data.post.title}
        </h1>
        {data.post.featuredImage && (
          <img
            src={data.post.featuredImage.node.sourceUrl}
            alt={data.post.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        <div
          className="text-gray-700 text-lg list-disc list-inside"
          dangerouslySetInnerHTML={{ __html: data.post.content }}
        />
      </main>

      {/* ✅ Footer placé en dehors du contenu principal */}
      <Footer />
    </div>
  );
}

export default RecipePage;
