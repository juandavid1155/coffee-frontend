import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "secret"

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("auth header:", req.headers.authorization)  // ← agrega aquí
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        res.status(401).json({ message: "No autorizado" })
        return
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number }
            ; (req as any).userId = decoded.userId
        next()
    } catch {
        res.status(401).json({ message: "Token inválido" })
    }

}