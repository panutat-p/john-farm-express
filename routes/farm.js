import { Farm } from "../models/farm.js";
import { Product } from "../models/product.js";

export const initFarmRoutes = (express) => {
  express.get("/farms", async (req, res) => {
    console.log("/farms");
    const farms = await Farm.find({}, { __v: 0 });
    res.send(farms);
  });

  express.get("/farms/:id", async (req, res) => {
    console.log("/farms/:id");
    const { id } = req.params;
    const farm = await Farm.findById(id, { __v: 0 }).populate("products");
    res.send(farm);
  });

  // create new farm
  express.post("/farms", async (req, res) => {
    console.log(req.body);
    const farm = new Farm(req.body);
    await farm.save();
    res.send({ data: "success" });
  });

  // add new product to the farm
  express.post("/farms/:id/addProduct", async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const { name, price, category } = req.body;
    const newProduct = new Product({ name, price, category });

    const farm = await Farm.findById(id);
    farm.products.push(newProduct);

    newProduct.farm = farm;

    await farm.save();
    await newProduct.save();

    res.send({ data: "success", newProduct: newProduct });
  });
};
