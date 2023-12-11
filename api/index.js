const { ApolloServer } = require("apollo-server");
const {typeDefs} = require("./schema.js"); 
const {Query } = require("./resolvers/Query.js")
const {Category } = require("./resolvers/Category.js")
const {Product } = require("./resolvers/Product.js")

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    }
});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
})