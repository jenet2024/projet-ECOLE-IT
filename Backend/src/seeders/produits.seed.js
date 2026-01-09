import { Produit } from "../models/Produit.js";

export const seedProduits = async () => {
  const now = new Date();

  const produits = [
    {
      nom: "Pomme",
      description: "Pomme bio du verger",
      prix: 0.5,
      quantite: 10,
      dateExpiration: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000),
      photo: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
    },
    
    {
      nom: "Yaourt nature",
      description: "Yaourt nature sans sucre",
      prix: 1.2,
      quantite: 20,
      dateExpiration: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000),
      photo: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
    },
    
    {
      nom: "Pain",
      description: "Pain de campagne",
      prix: 1.1,
      quantite: 12,
      dateExpiration: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000),
      photo: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec"
    },
    
    {
      nom: "Œufs",
      description: "Œufs frais bio",
      prix: 2.8,
      quantite: 6,
      dateExpiration: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
      photo: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc"
    },
    
    {
      nom: "Steak haché",
      description: "Viande de bœuf",
      prix: 4.2,
      quantite: 6,
      dateExpiration: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000),
      photo: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
    },
    
    {
      nom: "Salade verte",
      description: "Salade croquante",
      prix: 1.3,
      quantite: 10,
      dateExpiration: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000),
      photo: "https://images.unsplash.com/photo-1557844352-761f2565b576"
    },
    {
      nom: "Tomates",
      description: "Tomates rouges",
      prix: 2.0,
      quantite: 14,
      dateExpiration: new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000),
      photo: "https://images.unsplash.com/photo-1567306301408-9b74779a11af"
    },
    
  
  
    {
      nom: "Croissant",
      description: "Viennoiserie fraîche",
      prix: 0.9,
      quantite: 18,
      dateExpiration: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000),
      photo: "https://images.unsplash.com/photo-1542831371-d531d36971e6"
    },
    
   
  ];

  for (const produit of produits) {
    await Produit.create(produit);
  }

  console.log("Produits seedés avec succès");
};
