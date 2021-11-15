import { Farm } from "../models/farm.js";

export const initFarmRoutes = (express) => {
  express.get("/farms", async (req, res) => {
    console.log("/farms");
    const farms = await Farm.find({}, { __v: 0 });
    res.send(farms);
  });

  express.get("/farms/:id", async (req, res) => {
    console.log("/farms/:id");
    const id = req.params.id;
    const farm = await Farm.findById(id, { __v: 0 }).populate("products");
    res.send(farm);
  });
};
