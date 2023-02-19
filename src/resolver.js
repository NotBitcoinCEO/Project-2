export const resolvers = {
    Query: {
        helloWorld:() => 'Hello World',
        shops: () => Shop.find()
    },

}