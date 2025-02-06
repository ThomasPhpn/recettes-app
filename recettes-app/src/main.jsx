import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import client from "./api/apolloClient";
import App from "./App";
import RecipePage from "./pages/RecipePage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recette/:slug" element={<RecipePage />} />{" "}
        {/* ✅ Vérifie bien que `:slug` est présent */}
      </Routes>
    </Router>
  </ApolloProvider>
);
