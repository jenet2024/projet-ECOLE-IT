import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

function calculerStatut(dateExpiration) {
  if (!dateExpiration) return "valide";

  const now = new Date();
  const diffMs = new Date(dateExpiration) - now;
  const diffJours = diffMs / (1000 * 60 * 60 * 24);

  if (diffJours <= 0) return "expirer";
  if (diffJours <= 2) return "presque_expirer";
  if (diffJours <= 7) return "expire_bientot";

  return "valide";
}

function calculerPrixReduit(prix, statut) {
  if (!prix) return 0.0;

  switch (statut) {
    case "expire_bientot":
      return prix * 0.5;       // 50% de réduction
    case "presque_expirer":
      return prix * 0.25;      // 75% de réduction
    case "expirer":
      return 0.0;              // produit périmé, pas de vente
    default:
      return null;             // produit valide, pas de prix réduit
  }
}

export const Produit = sequelize.define(
  "Produit",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nom: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    prix: { type: DataTypes.FLOAT, allowNull: false },
    quantite: { type: DataTypes.INTEGER, defaultValue: 1 },
    dateExpiration: { type: DataTypes.DATE },

    statut: {
      type: DataTypes.ENUM(
        "valide",
        "expire_bientot",
        "presque_expirer",
        "expirer"
      ),
      defaultValue: "valide",
    },

    prix_reduit: {
      type: DataTypes.FLOAT,
      allowNull: true, // null si produit valide
    },
  },
  {
    hooks: {
      beforeCreate: (produit) => {
        produit.statut = calculerStatut(produit.dateExpiration);
        produit.prix_reduit = calculerPrixReduit(produit.prix, produit.statut);
      },
      beforeUpdate: (produit) => {
        produit.statut = calculerStatut(produit.dateExpiration);
        produit.prix_reduit = calculerPrixReduit(produit.prix, produit.statut);
      },
    },
  }
);
