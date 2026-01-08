import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { seedProduits } from "./seeders/produits.seed.js";

import authRoutes from "./routes/auth.routes.js";
import produitRoutes from "./routes/produit.routes.js";

import { connectDB, sequelize } from "./config/database.js";
import "./models/User.js";
import "./models/Produit.js";
import "./models/Commande.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/produits", produitRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Food Deal :)" });
});

const start = async () => {
  await connectDB();

  // pur créer les tables si elles n'existent pas et seeder les produits
  await sequelize.sync({ alter: true });
  await seedProduits();

  app.listen(4000, () =>
    console.log("le serveur tourne sur le http://localhost:4000")
  );
};

start();
