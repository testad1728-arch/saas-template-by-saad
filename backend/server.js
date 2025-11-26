import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as authRoutes } from "./src/routes/auth.js";
import { router as billingRoutes } from "./src/routes/billing.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/billing", billingRoutes);
app.get("/", (req, res) => res.json({ message: "SaaS API Running" }));
app.listen(5000);