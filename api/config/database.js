require("dotenv").config();
import { connect, connection } from "mongoose";

const MongoConnect = () => {
  connect(process.env.MONGODB);
  const db = connection;
  db.on("error", (err) => {
    console.log("Database Connection Error: " + err.message);
  });
  db.once("connected", () => {
    console.log("Database Connected");
  });
};

export default MongoConnect;
