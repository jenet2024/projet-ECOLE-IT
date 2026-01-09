import { Router } from "express";
import { getProduitsPresqueExpirer } from "../controllers/produit.controller.js";

const router = Router();

/**
 * @swagger
 * /api/produits/alerte:
 *   get:
 *     summary: Récupérer les produits presque expirés ou bientôt expirés
 *     description: |
 *       Retourne la liste des produits dont le statut est :
 *       - expire_bientot
 *       - presque_expirer
 *
 *       Ces produits bénéficient automatiquement d’un prix réduit.
 *     tags:
 *       - Produits
 *     responses:
 *       200:
 *         description: Liste des produits en alerte
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Produit'
 *       404:
 *         description: Aucun produit en alerte trouvé
 *       500:
 *         description: Erreur serveur
 */

// GET /api/produits/alerte
router.get("/alerte", getProduitsPresqueExpirer);

export default router;
