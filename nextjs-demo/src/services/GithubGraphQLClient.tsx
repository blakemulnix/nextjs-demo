import { createHttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN;

const GithubGraphQLClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${GH_ACCESS_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default GithubGraphQLClient;
