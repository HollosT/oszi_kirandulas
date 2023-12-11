const { gql } = require("apollo-server");


exports.typeDefs = gql`
    type Query {
        hello: String
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }   

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category
    }

    type Category {
        id: ID!
        name: String!
        products(filter: ProductsFilterInput): [Product!]!
    }

    input ProductsFilterInput {
        onSale: Boolean
    }

    input AddCategoryInput {
        name: String!
    }
`