const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { loadFiles } = require('@graphql-tools/load-files');
const { buildContext } = require('graphql-passport');
const { typeDefs: scañarsTypeDefs , resolvers: scalarResolvers } = require('graphql-scalars')

const resolvers = require('./resolvers');

const useGraphql = async (app) =>{
    const allTypeDefs = [
        ...await loadFiles('./src/**/*.graphql'),
        scañarsTypeDefs
    ]
    const allResolvers = [
        resolvers,
        scalarResolvers,
    ]
    const server = new ApolloServer({
        typeDefs: allTypeDefs,
        resolvers: allResolvers,
        context: ({req, res}) => buildContext({req, res}), // Configuración para GraphQl + Passport
        playground: true,
        plugins:[
            ApolloServerPluginLandingPageGraphQLPlayground
        ]
    });
    await server.start();
    server.applyMiddleware({ app });
}

module.exports = useGraphql;