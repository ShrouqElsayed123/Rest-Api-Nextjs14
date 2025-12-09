import mongoose, { Mongoose } from "mongoose";

let isConnected: boolean = false;

const connect = async (): Promise<Mongoose | undefined> => {
    if (isConnected) {
        console.log(" Using existing database connection✅️");
        return;
    }
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not defined")
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        isConnected = db.connection.readyState === 1;
        console.log("✅ MongoDB Connected");

        return mongoose
    }

    catch (error) {
        console.log("❌ MongoDB connection error:", error);
        return undefined;
    }
};

export default connect;