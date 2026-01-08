import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { User } from "./User.js";
import { Produit } from "./Produit.js";

export const Commande = sequelize.define("Commande", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  prix: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },

  statut: {
    type: DataTypes.ENUM("EN_ATTENTE", "VALIDEE", "ANNULEE"),
    defaultValue: "EN_ATTENTE"
  }
});

// Relations 

// 1 User -> n Commandes
User.hasMany(Commande, { foreignKey: "userId", onDelete: "CASCADE" });
Commande.belongsTo(User, { foreignKey: "userId" });

// 1 Commande -> n Produits
Commande.hasMany(Produit, { foreignKey: "commandeId", onDelete: "CASCADE" });
Produit.belongsTo(Commande, { foreignKey: "commandeId" });
