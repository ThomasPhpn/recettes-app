import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import client from "./api/apolloClient";
import App from "./App";
import RecipePage from "./pages/RecipePage";
import "./index.css";
import Page from "./pages/Page";
import SaisonPage from "./pages/SaisonPage";
import VinsPage from "./pages/VinsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recette/:slug" element={<RecipePage />} />{" "}
        <Route path="/page/:slug" element={<Page />} />{" "}
        <Route path="/saison" element={<SaisonPage />} />{" "}
        <Route path="/vins" element={<VinsPage />} />{" "}
      </Routes>
    </Router>
  </ApolloProvider>
);
