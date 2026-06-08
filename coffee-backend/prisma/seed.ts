import "dotenv/config"
import { prisma } from "../src/prisma"

const grindOptions = [
    "En grano",
    "Molienda gruesa",
    "Molienda media",
    "Molienda media fina",
    "Molienda fina",
]

function createVariants(
    p250: number,
    p500: number,
    p1000: number,
    p2500: number
) {
    return {
        create: [
            { size: "250g", price: p250 },
            { size: "500g", price: p500 },
            { size: "1000g", price: p1000 },
            { size: "2500g", price: p2500 },
        ]
    }
}

async function main() {

    await prisma.productVariant.deleteMany()
    await prisma.product.deleteMany()

    const products = [

        {
            slug: "geisha",
            name: "Geisha",
            description: "Café de especialidad con notas florales, cítricas y una acidez elegante.",
            image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
            origin: "Huila, Colombia",
            process: "Lavado",

            notes: [
                "Floral",
                "Cítricos",
                "Miel"
            ],

            grindOptions,

            variants: createVariants(
                28000,
                52000,
                98000,
                220000
            )
        },

        {
            slug: "borbon-rosado",
            name: "Borbón Rosado",
            description: "Dulzura compleja y acidez brillante.",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
            origin: "Huila, Colombia",
            process: "Natural",

            notes: [
                "Frutos rojos",
                "Panela",
                "Caramelo"
            ],

            grindOptions,

            variants: createVariants(
                30000,
                55000,
                102000,
                235000
            )
        },

        {
            slug: "castillo",
            name: "Castillo",
            description: "Balance perfecto para el día a día.",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
            origin: "Huila, Colombia",
            process: "Honey",

            notes: [
                "Chocolate",
                "Nuez",
                "Panela"
            ],

            grindOptions,

            variants: createVariants(
                26000,
                49000,
                92000,
                205000
            )
        },

        {
            slug: "caturro",
            name: "Caturro",
            description: "Tradición colombiana en cada taza.",
            image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
            origin: "Huila, Colombia",
            process: "Lavado",

            notes: [
                "Chocolate",
                "Caramelo",
                "Cacao"
            ],

            grindOptions,

            variants: createVariants(
                25000,
                47000,
                89000,
                198000
            )
        }
    ]

    for (const product of products) {

        await prisma.product.create({
            data: product
        })
    }

    console.log("Productos creados ✅")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())