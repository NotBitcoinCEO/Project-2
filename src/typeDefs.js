import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Query {
    helloWorld: String!
    shops: [Shop!]!
}


type Shop {
    id: ID!
    name String!
}

`;