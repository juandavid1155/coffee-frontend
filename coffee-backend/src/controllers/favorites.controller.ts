import { Request, Response } from "express"
import { prisma } from "../prisma"
import { logInfo, logError } from "../utils/logger"

export const getFavorites = async (req: Request, res: Response) => {
    const userId = (req as any).userId

    try {
        const favorites = await prisma.favorite.findMany({
            where: { userId },
            include: { product: true }
        })
        res.json(favorites)
    } catch (error) {
        logError("Error getFavorites", error)
        res.status(500).json({ message: "Error en el servidor" })
    }
}

export const toggleFavorite = async (req: Request, res: Response) => {

    const userId = (req as any).userId

    const { productId, size, grind } = req.body

    try {

        const exists = await prisma.favorite.findFirst({
            where: {
                userId,
                productId,
                size,
                grind
            }
        })

        if (exists) {

            await prisma.favorite.deleteMany({
                where: {
                    id: exists.id
                }
            })

            res.json({ action: "removed" })

        } else {

            const favorite = await prisma.favorite.create({
                data: {
                    userId,
                    productId,
                    size,
                    grind
                },
                include: {
                    product: true
                }
            })

            res.json({
                action: "added",
                favorite
            })
        }

    } catch (error) {

        logError("Error toggleFavorite", error)

        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}