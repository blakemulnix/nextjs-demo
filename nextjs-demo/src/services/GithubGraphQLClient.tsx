import { createHttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const GithubGraphQLClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default GithubGraphQLClient;
