import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Connection failed:", error.message);
        console.log("Troubleshooting:");
        console.log("1. Check if IP is whitelisted in Atlas");
        console.log("2. Verify connection string in .env");
        console.log("3. Confirm database user exists");
        process.exit(1);
    }
};

export default dbConnect;