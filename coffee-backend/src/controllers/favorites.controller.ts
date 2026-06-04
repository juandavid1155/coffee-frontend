import { Request, Response } from "express"
import { prisma } from "../prisma"

export const getFavorites = async (req: Request, res: Response) => {
    const userId = (req as any).userId

    try {
        const favorites = await prisma.favorite.findMany({
            where: { userId },
            include: { product: true }
        })
        res.json(favorites)
    } catch (error) {
        console.error("Error getFavorites:", error)
        res.status(500).json({ message: "Error en el servidor" })
    }
}

export const toggleFavorite = async (req: Request, res: Response) => {
    const userId = (req as any).userId
    const { productId, size, grind } = req.body

    try {
        const exists = await prisma.favorite.findFirst({
            where: { userId, productId }
        })

        if (exists) {
            await prisma.favorite.delete({ where: { id: exists.id } })
            res.json({ action: "removed" })
        } else {
            await prisma.favorite.create({
                data: { userId, productId, size, grind }
            })
            res.json({ action: "added" })
        }
    } catch (error) {
        console.error("Error toggleFavorite:", error)
        res.status(500).json({ message: "Error en el servidor" })
    }
}