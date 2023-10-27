import mongoose from "mongoose";

const uri = "mongodb+srv://airiartenavarro:neW6K5fQAK29Cslw@pokemontraders.gi5nrdr.mongodb.net/?retryWrites=true&w=majority";


let isConnected = false;

export const connectToDB = async () => {
    //mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect((uri), {
            dbName: "pokemon_traders",
            useNewUrlParser: true,
            
        })

        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

connectToDB();

