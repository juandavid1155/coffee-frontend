import { prisma } from "../src/prisma"

async function main() {
    const products = [
        {
            slug: "geisha",
            name: "Geisha",
            description: "Café de especialidad con notas florales, cítricas y una acidez elegante.",
            image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
            origin: "Huila, Colombia",
            process: "Lavado",
            price: 52000,
        },
        {
            slug: "borbon-rosado",
            name: "Borbón Rosado",
            description: "Dulzura compleja y acidez brillante.",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
            origin: "Huila, Colombia",
            process: "Natural",
            price: 52000,
        },
        {
            slug: "castillo",
            name: "Castillo",
            description: "Balance perfecto para el día a día.",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
            origin: "Huila, Colombia",
            process: "Honey",
            price: 52000,
        },
        {
            slug: "caturro",
            name: "Caturro",
            description: "Tradición colombiana en cada taza.",
            image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
            origin: "Huila, Colombia",
            process: "Lavado",
            price: 52000,
        },
    ]

    for (const product of products) {
        await prisma.product.upsert({
            where: { slug: product.slug },
            update: {},
            create: product,
        })
    }

    console.log("Productos creados ✅")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())