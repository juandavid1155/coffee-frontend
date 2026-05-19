import { products } from "../data/products"
import { Link } from "react-router-dom"

function FeaturedProducts() {
    return (
        <section
            id="products"
            className="bg-black text-white py-28"
        >
            <div className="max-w-7xl mx-auto px-8">

                <div className="mb-20 text-center">
                    <p className="text-[#C8A46B] uppercase tracking-[0.3em] mb-4">
                        Nuestras variedades
                    </p>

                    <h2 className="text-5xl font-bold">
                        Café de origen premium
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#C8A46B] transition-all duration-500"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8">
                                <h3 className="text-3xl font-bold mb-4">
                                    {product.name}
                                </h3>

                                <p className="text-zinc-400 mb-6">
                                    {product.description}
                                </p>

                                <Link
                                    to={`/products/${product.slug}`}
                                    className="text-[#C8A46B] font-semibold"
                                >
                                    Explorar variedad →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts