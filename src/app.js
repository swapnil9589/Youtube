import express from "express";
import cors from "cors"
export const app = express();
app.use(express.json({ limit: "64" }));
app.use(cors({ origin: "" }));
app.use(express.json({ extended: true }));
app.use(express.static("/public"));
app.use(express.urlencoded());