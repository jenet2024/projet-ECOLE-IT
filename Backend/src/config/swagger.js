import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Food Deal",
      version: "1.0.0",
      description: "API de gestion des produits avec dates d’expiration",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Serveur local",
      },
    ],
  },
  apis: ["./src/routes/*.js"], 
};

export const swaggerSpec = swaggerJSDoc(options);
