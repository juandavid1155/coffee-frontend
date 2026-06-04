import { Router } from "express"
import { getFavorites, toggleFavorite } from "../controllers/favorites.controller"
import { authMiddleware } from "../middlewares/auth.middleware"

const router = Router()

router.get("/", authMiddleware, getFavorites)
router.post("/toggle", authMiddleware, toggleFavorite)

export default router