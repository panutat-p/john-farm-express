import {
  MONGO_PREFIX,
  MONGO_CLUSTER,
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_JOHN_FARM,
} from "./config.js";
import mongoose from "mongoose";
import { Farm } from "../models/farm.js";
import { Product } from "../models/product.js";

const CONNECTION_STRING = `${MONGO_PREFIX}://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGO_CLUSTER}/${MONGODB_JOHN_FARM}`;

console.log(CONNECTION_STRING);

mongoose
  .connect(CONNECTION_STRING)
  .then(() => {
    console.log("connection open");
  })
  .catch((e) => {
    console.log("connection fail");
    console.log(e);
  });

const product = new Product({
  name: "apple",
  price: "8",
  category: "fruit",
});

const farm = new Farm({
  name: "Full Belly Farms",
  city: "Guinda",
  email: "belly_farm@gmail.com",
});

farm.products = [];
farm.products.push(product);

product.save().then((res) => {
  console.log(res);
});

farm.save().then((res) => {
  console.log(res);
});
