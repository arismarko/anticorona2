import { combineResolvers, skip } from 'graphql-resolvers';


export default {
    Query: {
        getStoreById:  async (parent, { id }, { prisma }) => {
            const store = await prisma.store({ id });
            return store;
        },
        getStoresByName: async (parent, { name}, { prisma }) => {
            const store = await prisma.stores({ where: { storename: name} });

            return store;
        },
        getItemsByName: async (parent, { name }, { prisma }) => {
            const item = await prisma.items({ where: { item: name} });
            return item;
        },
        getStoresByItemName: async (parent, { name }, { prisma }) => {
            const stores = await prisma.stores({ where: {
                            missings_every: {item: name }
                        }
                    }); 
            return stores;
        },
        getItemById: async (parent, { id }, { prisma }) => {
            const item = await prisma.item({ id });
            return item;
        }
    },
    Mutation: {
        addStore: async (parent, { location, date,  storename, coordinates, items}, { prisma }) => {
            try {

                const store = await prisma.createStore({ location, date , storename, coordinates,
                    missings: {
                     create: [{item: items[0].item, number: items[0].number}]
                    }
                });

                return store;

            } catch (error) {
                throw new Error(error);
            }
        }
    },
}