import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/api"

export type ProductVariant = {
    id: number
    size: string
    price: number
}

export type Product = {
    id: number
    slug: string
    name: string
    description: string
    image: string
    origin: string
    process: string

    notes: string[]
    grindOptions: string[]

    variants: ProductVariant[]
}

type ProductsContextType = {
    products: Product[]
    loading: boolean
}

const ProductsContext = createContext<ProductsContextType | null>(null)

export function ProductsProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get("/products").then(res => {
            setProducts(res.data)
            setLoading(false)
        })
    }, [])

    return (
        <ProductsContext.Provider value={{ products, loading }}>
            {children}
        </ProductsContext.Provider>
    )
}

export function useProducts() {
    const context = useContext(ProductsContext)
    if (!context) throw new Error("useProducts must be used inside ProductsProvider")
    return context
}