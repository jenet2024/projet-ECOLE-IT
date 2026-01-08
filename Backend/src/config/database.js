import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "food_deal_db", // nom de la base
  "root",         // utilisateur MySQL
  "",             
  {
    host: "localhost",
    dialect: "mysql",
    logging: false
  }
);


export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connecté avec Sequelize");
  } catch (err) {
    console.error(" Erreur connexion DB:", err.message);
    process.exit(1);
  }
};
