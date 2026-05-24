import {
    createContext,
    useContext,
    useState,
} from "react"

import { useAuth } from "./AuthContext"

type FavoriteItem = {

    slug: string

    size: string

    grind: string
}

type FavoritesContextType = {

    favorites: FavoriteItem[]

    toggleFavorite: (
        item: FavoriteItem
    ) => void

    isFavorite: (
        item: FavoriteItem
    ) => boolean

    isFavoritesOpen: boolean

    setIsFavoritesOpen:
    React.Dispatch<
        React.SetStateAction<boolean>
    >
}

const FavoritesContext =
    createContext<FavoritesContextType | null>(null)

export function FavoritesProvider({

    children,

}: {
    children: React.ReactNode
}) {

    const [favorites, setFavorites] =
        useState<FavoriteItem[]>([])

    const [
        isFavoritesOpen,
        setIsFavoritesOpen,
    ] = useState(false)

    const {

        user,

        setIsAuthOpen,

    } = useAuth()

    
    function toggleFavorite(
        item: FavoriteItem
    ) {

        if (!user) {

            setIsAuthOpen(true)

            return
        }

        setFavorites((prev) => {

            const exists = prev.some(

                (fav) =>

                    fav.slug === item.slug &&
                    fav.size === item.size &&
                    fav.grind === item.grind
            )

            if (exists) {

                return prev.filter(

                    (fav) =>

                        !(

                            fav.slug === item.slug &&
                            fav.size === item.size &&
                            fav.grind === item.grind
                        )
                )
            }

            return [...prev, item]
        })
    }

    function isFavorite(
        item: FavoriteItem
    ) {

        return favorites.some(

            (fav) =>

                fav.slug === item.slug &&
                fav.size === item.size &&
                fav.grind === item.grind
        )
    }

    return (

        <FavoritesContext.Provider
            value={{

                favorites,

                toggleFavorite,

                isFavorite,

                isFavoritesOpen,

                setIsFavoritesOpen,

            }}
        >

            {children}

        </FavoritesContext.Provider>
    )
}

export function useFavorites() {

    const context =
        useContext(FavoritesContext)

    if (!context) {

        throw new Error(
            "useFavorites must be used inside FavoritesProvider"
        )
    }

    return context
}