import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import prisma from "../prisma"

const JWT_SECRET = process.env.JWT_SECRET || "secret"

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    try {
        const exists = await prisma.user.findUnique({ where: { email } })

        if (exists) {
            res.status(400).json({ message: "El correo ya está registrado" })
            return
        }

        const hashed = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: { name, email, password: hashed }
        })

        res.status(201).json({ message: "Usuario creado", userId: user.id })

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" })
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const user = await prisma.user.findUnique({ where: { email } })

        if (!user) {
            res.status(404).json({ message: "Usuario no encontrado" })
            return
        }

        const valid = await bcrypt.compare(password, user.password)

        if (!valid) {
            res.status(401).json({ message: "Contraseña incorrecta" })
            return
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" })

        res.json({ token, user: { id: user.id, name: user.name, email: user.email } })

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" })
    }
}