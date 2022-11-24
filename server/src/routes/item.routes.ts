import { Router } from "express";

import {
  getItem,
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/item.controllers";

export const itemRouter = Router();

itemRouter.get("/", getAllItems);

itemRouter.get("/:item_id", getItem);

itemRouter.post("/", createItem);

itemRouter.patch("/:item_id", updateItem);

itemRouter.delete("/:item_id", deleteItem);
