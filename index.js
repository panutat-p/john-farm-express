import {
  MONGO_PREFIX,
  MONGO_CLUSTER,
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_JOHN_FARM,
} from "./datastores/config.js";
import express from "express";
import mongoose from "mongoose";
import { initFarmRoutes } from "./routes/farm.js";
import { initProductRoutes } from "./routes/product.js";

const CONNECTION_STRING = `${MONGO_PREFIX}://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGO_CLUSTER}/${MONGODB_JOHN_FARM}`;

mongoose
  .connect(CONNECTION_STRING)
  .then(() => {
    console.log("connection open");
  })
  .catch((e) => {
    console.log("connection fail");
    console.log(e);
  });

const app = express();

initFarmRoutes(app);
initProductRoutes(app);

app.listen(3000, () => {
  console.log(`Express listening`);
});
