const { importSchema } = require('graphql-import')
const { GraphQLServer } = require('graphql-yoga');

const resolvers = require('./resolvers');
const { Prisma } = require('./prisma/generated/prisma');

require('dotenv/config');

class GraphQLService {
    constructor() {
        typeDefs = importSchema('server/graphqlserver/schemas/store.graphql');

        db = new Prisma({
            endpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4488',
            secret: process.env.PRISMA_SECRET || '',
        });
    }
 
    init = () => {
        server = new GraphQLServer({
            typeDefs,
            resolvers,
            context: async () => ({
                prisma: db,
            }),
        });

        server.start({ port: 4400 }, () => {
            console.log('App running on http://localhost:4400');
        });
    }
      
}

module.exports = GraphQLService;

