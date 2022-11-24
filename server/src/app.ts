import express, { Application } from "express";
import * as dotenv from "dotenv";

import { userRouter } from "./routes/user.routes";
import { authRouter } from "./routes/auth.routes";
import { listRouter } from "./routes/list.routes";
import { itemRouter } from "./routes/item.routes";

dotenv.config();

const app: Application = express();

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/list", listRouter);
app.use("/api/list/:list_id/item", itemRouter);

app.listen(process.env.PORT, () =>
  console.log(`API is listening on ${process.env.PORT}`)
);
