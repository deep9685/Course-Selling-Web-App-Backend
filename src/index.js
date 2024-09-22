import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
        .then(() => {
            app.on("error", (error) => {
                console.log("Error : ", error);
                throw error;
            })
            app.listen(process.env.PORT || 8000, () => {
                console.log(`Server is listening at port : ${process.env.PORT}`);
            })
        }).catch((error) => {
            console.log("MONGO_DB connection failed !!", error);
        })
