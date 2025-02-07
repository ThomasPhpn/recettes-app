import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import client from "./api/apolloClient";
import App from "./App";
import RecipePage from "./pages/RecipePage";
import "./index.css";
import Page from "./pages/Page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recette/:slug" element={<RecipePage />} />{" "}
        <Route path="/page/:slug" element={<Page />} />{" "}
      </Routes>
    </Router>
  </ApolloProvider>
);
