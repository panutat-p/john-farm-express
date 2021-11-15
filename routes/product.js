import { Product } from "../models/product.js";

export const initProductRoutes = (express) => {
  express.get("/products", async (req, res) => {
    console.log("/product");
    const products = await Product.find({}, { __v: 0 });
    res.send(products);
  });

  express.get("/products/:id", async (req, res) => {
    console.log("products/:id");
    const id = req.params.id;
    const farm = await Product.findById(id, { __v: 0 }).populate("farm");
    res.send(farm);
  });
};
