import { products } from "../data/products"
import { Link } from "react-router-dom"
import Container from "./UI/Container"

function FeaturedProducts() {
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
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="
                                    w-full
                                    h-[clamp(260px,34vw,520px)]
                                    object-cover
                                    group-hover:scale-105
                                    transition-transform duration-700
                                    "
                                />
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
        </section>
    )
}

export default FeaturedProducts