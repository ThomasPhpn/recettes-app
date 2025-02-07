import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_PAGE = gql`
  query GetPage($slug: String!) {
    pageBy(uri: $slug) {
      title
      content
    }
  }
`;

function Page() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PAGE, { variables: { slug } });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{data.pageBy.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.pageBy.content }}
        className="mt-4 text-gray-700"
      />
    </div>
  );
}

export default Page;
