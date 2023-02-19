import { Shop } from "./models/shop";

export const resolvers = {
    Query: {
        helloWorld:() => 'Hello World',
        shops: () => Shop.find()
    },
    Mutation: {
        createShop: async(_, { name }) => {
            const item = new Shop({ name });
            await item.save();
            return item;
        }
    }

}