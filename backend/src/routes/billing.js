import express from "express";
import { createCheckout } from "../controllers/billingController.js";
export const router=express.Router();
router.post("/checkout",createCheckout);