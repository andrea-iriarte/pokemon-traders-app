import { MongoClient } from "mongodb";

const uri = "mongodb+srv://airiartenavarro:neW6K5fQAK29Cslw@pokemontraders.gi5nrdr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

export const run = async () => {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1});
        console.log("Connected to MongoDB");
    } finally {
        await client.close();
    }

}

