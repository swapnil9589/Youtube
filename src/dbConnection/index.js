import mongoose from "mongoose";
export const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MONGODB Connected Successfully: ${connection.connection.host}`);

    } catch (error) {
        console.log(error.message);


    }
}