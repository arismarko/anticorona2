import { importSchema } from 'graphql-import';
import { GraphQLServer } from 'graphql-yoga';

import resolvers from './resolvers';
import { Prisma } from '../prisma/generated/prisma';

import 'dotenv/config';

const typeDefs = importSchema('src/schemas/store.graphql');

export const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4488',
  secret: process.env.PRISMA_SECRET || '',
});

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: async () => ({
        prisma: db,
    }),
});

server.start({ port: process.env.PORT }, () => {
    console.log('App running on http://localhost:4400');
});