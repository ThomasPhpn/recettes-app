import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql", // Vérifie bien que ton API GraphQL est à cette adresse
  cache: new InMemoryCache(),
});

export default client;
