import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql} from "apollo-server-express";
import {resolvers} from "./resolver";
import { typeDefs} from "./typeDefs";

const server = async () => {
    const app= express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start();

    server.applyMiddleware({app});

    try{
        await mongoose.connect("mongodb+srv://project1:Superman123@cluster1.luultjy.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true})

    }catch(err){
        console.log(err)
    }


    app.get('/', (req, res) => res.send('HELLO WORLD'))

    app.listen({port:4001}, ()=> {
        console.log('connected')
    })

}

server();