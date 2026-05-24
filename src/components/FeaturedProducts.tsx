import { products } from "../data/products"
import { Link } from "react-router-dom"
import Container from "./UI/Container"
import { Plus } from "lucide-react"
import { useState } from "react"
import QuickViewModal from "./UI/QuickViewModal"
import { Heart } from "lucide-react"
import { useFavorites } from "../context/FavoritesContext"

function FeaturedProducts() {

    const [selectedProduct, setSelectedProduct] =
        useState<(typeof products)[0] | null>(null)

    const {
        toggleFavorite,
        isFavorite,
    } = useFavorites()

    return (
        <section
            id="products"
            className="bg-black text-white py-[clamp(4rem,8vw,8rem)]"
        >
            <Container>
                {/* HEADER */}
                <div className="mb-[clamp(3rem,6vw,6rem)] text-center">
                    <p className="text-gold uppercase tracking-[0.3em] mb-4 text-[clamp(0.75rem,1vw,0.95rem)]">
                        Nuestras variedades
                    </p>

                    <h2 className="text-[clamp(2.5rem,5vw,6rem)] font-bold leading-[0.95]">
                        Café de origen premium
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-[clamp(1.5rem,3vw,3rem)]">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="
                            bg-zinc-950
                            rounded-3xl
                            overflow-hidden
                            border border-zinc-800
                            hover:border-gold
                            transition-all duration-500
                            group
                            "
                        >
                            {/* IMAGE */}
                            <div className="overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="
                                    w-full
                                    h-[clamp(260px,34vw,520px)]
                                    object-cover
                                    group-hover:scale-95
                                    transition-transform duration-700
                                    "
                                />
                                <button className="product-hover-button"
                                    onClick={() => setSelectedProduct(product)}>


                                    <span className="product-hover-icon">

                                        <Plus size={28} strokeWidth={1.8} />

                                    </span>

                                </button>
                                <button
                                    onClick={() =>

                                        toggleFavorite({

                                            slug: product.slug,

                                            size: product.sizes[1],

                                            grind: product.grindOptions[0],
                                        })
                                    }
                                    className="product-favorite-button"
                                >

                                    <Heart
                                        size={22}
                                        className={
                                            isFavorite({

                                                slug: product.slug,

                                                size: product.sizes[1],

                                                grind: product.grindOptions[0],
                                            })

                                                ? "product-favorite-active"

                                                : ""
                                        }
                                    />

                                    <span className="product-favorite-label">

                                        Favorito

                                    </span>

                                </button>
                            </div>

                            {/* CONTENT */}
                            <div className="p-[clamp(1.3rem,2vw,2rem)]">
                                <h3 className="text-[clamp(1.6rem,2vw,3rem)] font-bold mb-4 leading-none">
                                    {product.name}
                                </h3>

                                <p className="text-zinc-400 mb-6 leading-relaxed text-[clamp(0.95rem,1.2vw,1.1rem)]">
                                    {product.description}
                                </p>

                                <Link
                                    to={`/products/${product.slug}`}
                                    className="text-gold font-semibold hover:opacity-80 transition"
                                >
                                    Explorar variedad →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <QuickViewModal

                isOpen={!!selectedProduct}

                product={selectedProduct}

                onClose={() =>
                    setSelectedProduct(null)
                }
            />

        </section>
    )
}

export default FeaturedProducts