import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: 'http://localhost:4400',
    }),
    typeDefs: gql`
      extend type Store {
        id: ID!
        location: String!
        date: String!
        storename: String!
        coordinates: String!
        missings:[Item]
      }

      extend type Item {
        id: ID! 
        item: String,
        number: String
      }
   `,
    cache: new InMemoryCache()
  });
}