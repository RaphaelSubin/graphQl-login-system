const express = require('express')
const app = express();
const {ApolloServer} = require('apollo-server-express')
const typeDefs = require('./graphQl/schema/schema')
const resolvers = require('./graphQl/resolver/resolver')


const server = new ApolloServer({
    typeDefs,
    resolvers
});

async function serverStart(){
    await server.start();
    server.applyMiddleware({app});
}
serverStart();

const PORT = process.env.PORT || 4000

app.listen(PORT,() =>{
    console.log('server running');
})