import { Router } from "express";
import { getProduitsPresqueExpirer } from "../controllers/produit.controller.js";

const router = Router();

// GET /api/produits/alerte
router.get("/alerte", getProduitsPresqueExpirer);

export default router;
