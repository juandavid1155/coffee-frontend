import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react"
import { useAuth } from "./AuthContext"
import api from "../services/api"

type FavoriteItem = {
    slug: string
    productId: number
    size?: string
    grind?: string
    product?: any
}

type FavoritesContextType = {
    favorites: FavoriteItem[]
    toggleFavorite: (item: FavoriteItem) => void

    isFavorite: (
        slug: string,
        size?: string,
        grind?: string
    ) => boolean

    isFavoritesOpen: boolean
    setIsFavoritesOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const FavoritesContext = createContext<FavoritesContextType | null>(null)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([])
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)
    const { user, setIsAuthOpen } = useAuth()

    useEffect(() => {
        if (!user) {
            setFavorites([])
            return
        }
        const token = localStorage.getItem("token")
        api.get("/favorites", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => {
            setFavorites(
                res.data.map((f: any) => ({
                    slug: f.product.slug,
                    productId: f.productId,
                    size: f.size,
                    grind: f.grind,
                    product: f.product
                }))
            )
        })
    }, [user])

    async function toggleFavorite(item: FavoriteItem) {
        if (!user) {
            setIsAuthOpen(true)
            return
        }

        const token = localStorage.getItem("token")
        const existing = favorites.find(f =>
            f.slug === item.slug &&
            f.size === item.size &&
            f.grind === item.grind
        )

        if (existing) {
            const res = await api.post("/favorites/toggle",
                { productId: existing.productId, size: existing.size, grind: existing.grind },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            if (res.data.action === "removed") {
                setFavorites(prev => prev.filter(f =>
                    !(f.slug === item.slug && f.size === item.size && f.grind === item.grind)
                ))
            }
        } else {
            const res = await api.post("/favorites/toggle",
                { productId: item.productId, size: item.size, grind: item.grind },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            if (res.data.action === "added") {

                const favorite = res.data.favorite

                setFavorites(prev => [
                    ...prev,
                    {
                        slug: favorite.product.slug,
                        productId: favorite.productId,
                        size: favorite.size,
                        grind: favorite.grind,
                        product: favorite.product
                    }
                ])
            }
        }
    }

    function isFavorite(slug: string, size?: string, grind?: string) {
        return favorites.some(f =>
            f.slug === slug && f.size === size && f.grind === grind
        )
    }

    return (
        <FavoritesContext.Provider value={{
            favorites,
            toggleFavorite,
            isFavorite,
            isFavoritesOpen,
            setIsFavoritesOpen,
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    const context = useContext(FavoritesContext)
    if (!context) {
        throw new Error("useFavorites must be used inside FavoritesProvider")
    }
    return context
}