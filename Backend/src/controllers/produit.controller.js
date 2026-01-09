import { Produit } from "../models/Produit.js";

// GET produits avec statut 'presque_expirer' et 'expire_bientot'
export const getProduitsPresqueExpirer = async (req, res) => {
  try {
    const produits = await Produit.findAll({
      where: {
        statut: ["presque_expirer", "expire_bientot"]
      }
    });

    res.json(produits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
