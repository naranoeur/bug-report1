import { gql, ApolloServer } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    blogPosts: String
  }
`;

const resolvers = {
  Query: {
    blogPosts: (_parent, _args, _context) => {
      return "test";
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };

export default handler;
