import { Produit } from "../models/Produit.js";

export const seedProduits = async () => {
  const produits = [
    {
      nom: "Pomme",
      description: "Pomme bio du verger",
      prix: 0.5,
      quantite: 10,
      dateExpiration: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000), // demain
      photo: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
    },
    {
      nom: "Banane",
      description: "Banane fraîche",
      prix: 0.3,
      quantite: 15,
      dateExpiration: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000), // 5 jours
      photo: "https://images.unsplash.com/photo-1574226516831-e1dff420e37b"
    },
    {
      nom: "Yaourt",
      description: "Yaourt nature",
      prix: 1.2,
      quantite: 20,
      dateExpiration: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000), // 10 jours
      photo: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
    },
  ];

  for (let p of produits) {
    await Produit.create(p);
  }

  console.log("Produits seedés");
};
