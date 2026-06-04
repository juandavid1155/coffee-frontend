import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes"
import favoritesRoutes from "./routes/favorites.routes"
import productsRoutes from "./routes/products.routes"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use("/api/products", productsRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/favorites", favoritesRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Coffee Backend funcionando 🚀" })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

