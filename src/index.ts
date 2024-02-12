import Express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes";

dotenv.config();

const app = Express();

app.use(json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router);

app.listen(process.env.PORT || 8002, () => {
  console.log(`listening at http://localhost:${process.env.PORT || 8002}`);
});
