import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"

const app = express();
const port = 5000;
const dbUri = "mongodb://localhost:27017/fullstack-mern";

app.use(express.json());
app.use(cors());
app.use(UserRoute)

const startServer = async () => {
    try {
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB connected");

        app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

startServer()