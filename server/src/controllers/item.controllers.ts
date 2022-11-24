import { Request, Response } from "express";

export const getAllItems = (req: Request, res: Response) => {
  return res.json({ message: "Get all items controller" });
};

export const getItem = (req: Request, res: Response) => {
  return res.json({ message: "Get item controller" });
};

export const createItem = (req: Request, res: Response) => {
  return res.json({ message: "Create  items controller" });
};

export const updateItem = (req: Request, res: Response) => {
  return res.json({ message: "Update  items controller" });
};

export const deleteItem = (req: Request, res: Response) => {
  return res.json({ message: "Delete  items controller" });
};
