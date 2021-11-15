import { Product } from "../models/product.js";

export const initProductRoutes = (express) => {
  express.get("/products", async (req, res) => {
    console.log("/product");
    const products = await Product.find({});
    res.send(products);
  });
};
