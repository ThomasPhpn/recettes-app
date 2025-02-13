import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const GET_VINS = gql`
  {
    vins {
      nodes {
        title
        detailsVin {
          color
          year
          note
          cepage
        }
      }
    }
  }
`;

function VinsPage() {
  const { loading, error, data } = useQuery(GET_VINS);

  if (loading)
    return <p className="text-center text-gray-500">🔄 Chargement...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">❌ Erreur : {error.message}</p>
    );

  // Trier les vins par couleur
  const vinsRouges = data.vins.nodes.filter((vin) =>
    vin.detailsVin.color.includes("Rouge")
  );
  const vinsBlancs = data.vins.nodes.filter((vin) =>
    vin.detailsVin.color.includes("Blanc")
  );
  const vinsRoses = data.vins.nodes.filter((vin) =>
    vin.detailsVin.color.includes("Rosé")
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 text-mint">
          Mes Vins
        </h1>

        {[
          { title: "Vins Rouges", wines: vinsRouges },
          { title: "Vins Blancs", wines: vinsBlancs },
          { title: "Vins Rosés", wines: vinsRoses },
        ].map(({ title, wines, color }) => (
          <section key={title} className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 text-mint`}>{title}</h2>
            {wines.length === 0 ? (
              <p className="text-gray-500">Aucun vin ajouté.</p>
            ) : (
              <ul className="space-y-4">
                {wines.map((vin) => (
                  <li
                    key={vin.title}
                    className="p-4 border border-champagne rounded-lg"
                  >
                    <h3 className="text-xl font-bold">
                      {vin.title} ({vin.detailsVin.year})
                    </h3>
                    <p>
                      <strong>Cépage :</strong> {vin.detailsVin.cepage}
                    </p>
                    <p>
                      <strong>Note :</strong> {vin.detailsVin.note}/10
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default VinsPage;
