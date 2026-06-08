import { Link } from "react-router-dom"
import Container from "./UI/Container"
import { Plus, Heart } from "lucide-react"
import { useState } from "react"
import QuickViewModal from "./UI/QuickViewModal"
import { useFavorites } from "../context/FavoritesContext"
import { useProducts } from "../context/ProductsContext"
import "../styles/components/featured-products.css"

function FeaturedProducts() {
    const { products, loading } = useProducts()
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
    const { toggleFavorite, isFavorite } = useFavorites()

    if (loading) return <div className="featured-loading">Cargando...</div>

    return (
        <section id="products" className="featured-section">
            <Container>
                <div className="featured-header">
                    <p className="featured-subtitle">Nuestras variedades</p>
                    <h2 className="featured-title">Café de origen premium</h2>
                </div>

                <div className="featured-grid">
                    {products.map((product) => (
                        <div key={product.slug} className="product-card group">
                            <div className="product-card-image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-card-image"
                                />
                                <button
                                    className="product-hover-button"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <span className="product-hover-icon">
                                        <Plus size={28} strokeWidth={1.8} />
                                    </span>
                                </button>
                                <button
                                    onClick={() => toggleFavorite({
                                        slug: product.slug,
                                        productId: product.id,
                                        size: "500g",
                                        grind: "En grano"
                                    })}
                                    className="product-favorite-button"
                                >
                                    <Heart
                                        size={22}
                                        className={
                                            isFavorite(
                                                product.slug,
                                                "500g",
                                                "En grano"
                                            )
                                                ? "product-favorite-active"
                                                : ""
                                        }
                                    />
                                    <span className="product-favorite-label">Favorito</span>
                                </button>
                            </div>

                            <div className="product-card-content">
                                <h3 className="product-card-title">{product.name}</h3>
                                <p className="product-card-description">{product.description}</p>
                                <Link to={`/products/${product.slug}`} className="product-card-link">
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
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    )
}

export default FeaturedProducts