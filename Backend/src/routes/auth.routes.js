import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { requireAuth } from "../middleWare/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

// exemple de route protégée
router.get("/me", requireAuth, (req, res) => {
  res.json({ message: "Utilisateur authentifié", user: req.user });
});

export default router;
