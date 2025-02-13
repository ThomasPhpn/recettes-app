import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function SaisonPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "datagir-impact-co2";
    script.src = "https://impactco2.fr/iframe.js";
    script.dataset.type = "fruitsetlegumes";
    script.dataset.search = "?theme=default";
    script.async = true;

    document.getElementById("iframe-container").appendChild(script);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 text-mint">
          Fruits et Légumes de Saison
        </h1>

        {/* ✅ Conteneur pour insérer l'iframe dynamiquement */}
        <div id="iframe-container" className="flex justify-center"></div>
      </main>

      <Footer />
    </div>
  );
}

export default SaisonPage;
