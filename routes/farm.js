import { Farm } from "../models/farm.js";

export const initFarmRoutes = (express) => {
  express.get("/farms", async (req, res) => {
    console.log("/farms");
    const farms = await Farm.find({});
    res.send(farms);
  });
};
