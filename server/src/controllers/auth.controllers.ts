import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { db } from "../database";

export const registerUser = (req: Request, res: Response) => {
  const { username, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      db("users").insert({ username, hash });
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

export const loginUser = (req: Request, res: Response) => {
  return res.json({ message: "login user controller" });
};

export const logoutUser = (req: Request, res: Response) => {
  return res.json({ message: "logout user controller" });
};
