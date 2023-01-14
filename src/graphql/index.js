const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const typeDefs = `
    type Query{
        hello: String
        getPerson(name: String, age: Int): String
        getInt: Int
        getFloat: Float
        getString: String
        getBoolean: Boolean
        getID: ID
    }
`;

const resolvers ={
    Query:{
        hello: () => 'Hola mundo',
        getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age} years old`,
        getInt: () => 1,
        getFloat: () => 1.1,
        getString: () => 'Palabra',
        getBoolean: () => true,
        getID: () => 123
    }
};

const useGraphql = async (app) =>{
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        plugins:[
            ApolloServerPluginLandingPageGraphQLPlayground
        ]
    });
    await server.start();
    server.applyMiddleware({ app });
}

module.exports = useGraphql;