import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express();
dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("express + typescript!");
});

app.listen(process.env.PORT, () => {
  console.log("Listen on port 3001");
});
