import { Request, Response } from "express"
import { prisma } from "../prisma"

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                variants: true
            }
        })
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" })
    }
}