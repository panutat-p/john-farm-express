import { Product } from "../models/product.js";
import { Farm } from "../models/farm.js";

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

  // delete product and delete product ID in the farm
  express.delete("/products/:id", async (req, res) => {
    console.log("DELETE /products");
    const { id } = req.params;
    const product = await Product.findById(id); // query product to get farm ID
    const farmId = String(product.farm);
    const farm = await Farm.findById(farmId); // query farm to update
    let updatedArr = farm.products.filter(
      (el) => String(el) !== String(product._id)
    );
    farm.products = updatedArr; // update farm
    console.log(farm);
    await farm.save();
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.send({
      data: "success",
      updatedFarm: farm,
      deletedProduct: deletedProduct,
    });
  });
};
