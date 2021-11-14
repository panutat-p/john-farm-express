import {
  MONGO_PREFIX,
  MONGO_CLUSTER,
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_JOHN_FARM,
} from "/datastores/config.js";
import express from "express";
import mongoose from "mongoose";

const app = express();
