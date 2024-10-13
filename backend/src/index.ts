import express from "express";
import dotenv from "dotenv";
import router from "./routes/Routes";
import sequelize from "./database/database";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(router)

sequelize.sync().then(() => {
    console.log("DB sync");
})

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})