import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://88.193.236.167:4000/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
