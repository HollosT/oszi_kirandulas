const { ApolloServer } = require("apollo-server");
const {typeDefs} = require("./schema.js"); 
const {Query } = require("./resolvers/Query.js")
const {Mutation } = require("./resolvers/Mutation.js")
const {Category } = require("./resolvers/Category.js")
const {Product } = require("./resolvers/Product.js")
const {products, categories} = require("./db")


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Product
    },
    context: {
        categories, products
    }
});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
})