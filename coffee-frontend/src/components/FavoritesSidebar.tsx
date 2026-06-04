import { X, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"
import { products } from "../data/products"
import "../styles/components/sidebar.css"

function FavoritesSidebar() {

    const {

        favorites,

        isFavoritesOpen,

        setIsFavoritesOpen,

        toggleFavorite,

    } = useFavorites()

    return (

        <>

            {/* BACKDROP */}

            <div
                onClick={() =>
                    setIsFavoritesOpen(false)
                }
                className={`sidebar-backdrop ${
                    isFavoritesOpen
                        ? "active"
                        : ""
                }`}
            />

            {/* SIDEBAR */}

            <aside
                className={`sidebar ${
                    isFavoritesOpen
                        ? "open"
                        : ""
                }`}
            >

                {/* HEADER */}

                <div className="sidebar-header">

                    <div>

                        <p className="sidebar-subtitle">

                            Tus favoritos

                        </p>

                        <h2 className="sidebar-title">

                            Café guardado

                        </h2>

                    </div>

                    <button
                        onClick={() =>
                            setIsFavoritesOpen(false)
                        }
                        className="sidebar-close"
                    >

                        <X size={24} />

                    </button>

                </div>

                {/* ITEMS */}

                <div className="sidebar-content">

                    {favorites.length === 0 ? (

                        <div className="sidebar-empty">

                            <Heart
                                size={48}
                                strokeWidth={1.5}
                            />

                            <p>

                                No tienes favoritos guardados

                            </p>

                        </div>

                    ) : (

                        favorites.map((item) => {

                            const product =
                                products.find(

                                    (p) =>
                                        p.slug === item.slug
                                )

                            if (!product)
                                return null

                            return (

                                <div
                                    key={`${item.slug}-${item.size}-${item.grind}`}
                                    className="favorite-card"
                                >

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="favorite-image"
                                    />

                                    <div className="favorite-content">

                                        <h3 className="favorite-name">

                                            {product.name}

                                        </h3>

                                        <p className="favorite-meta">

                                            {item.size}

                                        </p>

                                        <p className="favorite-meta">

                                            {item.grind}

                                        </p>

                                        <Link
                                            to={`/products/${product.slug}`}
                                            onClick={() =>
                                                setIsFavoritesOpen(false)
                                            }
                                            className="favorite-link"
                                        >

                                            Ver producto →

                                        </Link>

                                    </div>

                                    <button
                                        onClick={() =>
                                            toggleFavorite(item) 
                                        }
                                        className="favorite-remove"
                                    >

                                        <X size={18} />

                                    </button>

                                </div>
                            )
                        })
                    )}

                </div>

            </aside>

        </>
    )
}

export default FavoritesSidebar