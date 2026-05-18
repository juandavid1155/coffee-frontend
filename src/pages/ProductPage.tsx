import { useState } from "react"

import { useParams } from "react-router-dom"

import { products } from "../data/products"


import { useCart } from "../context/CartContext"
function ProductPage() {

    const { slug } = useParams()

    const product = products.find(
        (p) => p.slug === slug
    )

    const { addToCart } = useCart()

    if (!product) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">
                    Producto no encontrado
                </h1>
            </div>
        )
    }

    const [selectedSize, setSelectedSize] = useState(
        product.sizes[1]
    )

    const [selectedGrind, setSelectedGrind] = useState(
        product.grindOptions[0]
    )

    const [quantity, setQuantity] = useState(1)

    return (
        <section className="bg-black text-white min-h-screen py-32">

            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

                {/* IMAGE */}

                <div className="relative">

                    <div className="absolute inset-0 bg-[#C8A46B]/10 blur-3xl rounded-full" />

                    <img
                        src={product.image}
                        alt={product.name}
                        className="relative rounded-3xl w-full object-cover"
                    />
                </div>

                {/* INFO */}

                <div>

                    <p className="uppercase tracking-[0.3em] text-[#C8A46B] mb-4">
                        Café de especialidad
                    </p>

                    <h1 className="text-6xl font-bold mb-6">
                        {product.name}
                    </h1>

                    <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        {product.description}
                    </p>

                    {/* DETAILS */}

                    <div className="grid grid-cols-2 gap-6 mb-10">

                        <div>
                            <p className="text-zinc-500 mb-2">
                                Origen
                            </p>

                            <p className="text-xl">
                                {product.origin}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500 mb-2">
                                Proceso
                            </p>

                            <p className="text-xl">
                                {product.process}
                            </p>
                        </div>

                    </div>

                    {/* NOTES */}

                    <div className="mb-10">

                        <p className="text-zinc-500 mb-4">
                            Perfil sensorial
                        </p>

                        <div className="flex gap-3 flex-wrap">

                            {product.notes.map((note) => (
                                <span
                                    key={note}
                                    className="border border-[#C8A46B] text-[#C8A46B] px-4 py-2 rounded-full text-sm"
                                >
                                    {note}
                                </span>
                            ))}

                        </div>
                    </div>

                    {/* SIZE */}

                    <div className="mb-10">

                        <p className="text-zinc-500 mb-4">
                            Presentación
                        </p>

                        <div className="flex gap-4 flex-wrap">

                            {product.sizes.map((size) => (

                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-6 py-3 rounded-xl border transition ${selectedSize === size
                                            ? "bg-[#C8A46B] text-black border-[#C8A46B]"
                                            : "border-zinc-700 hover:border-[#C8A46B]"
                                        }`}
                                >
                                    {size}
                                </button>

                            ))}

                        </div>
                    </div>

                    {/* GRIND */}

                    <div className="mb-10">

                        <p className="text-zinc-500 mb-4">
                            Tipo de molienda
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">

                            {product.grindOptions.map((grind) => (

                                <button
                                    key={grind}
                                    onClick={() => setSelectedGrind(grind)}
                                    className={`p-4 rounded-xl border text-left transition ${selectedGrind === grind
                                            ? "bg-[#C8A46B] text-black border-[#C8A46B]"
                                            : "border-zinc-700 hover:border-[#C8A46B]"
                                        }`}
                                >
                                    {grind}
                                </button>

                            ))}

                        </div>
                    </div>

                    {/* QUANTITY */}

                    <div className="mb-10">

                        <p className="text-zinc-500 mb-4">
                            Cantidad
                        </p>

                        <div className="flex items-center gap-4">

                            <button
                                onClick={() =>
                                    setQuantity((prev) => Math.max(1, prev - 1))
                                }
                                className="w-12 h-12 border border-zinc-700 rounded-xl text-xl"
                            >
                                -
                            </button>

                            <span className="text-2xl font-semibold">
                                {quantity}
                            </span>

                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="w-12 h-12 border border-zinc-700 rounded-xl text-xl"
                            >
                                +
                            </button>

                        </div>
                    </div>

                    {/* CTA */}

                    <div className="flex gap-4">

                        <button className="bg-[#C8A46B] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition">
                            Comprar ahora
                        </button>

                        <button
                            onClick={() =>
                                addToCart({
                                    slug: product.slug,
                                    name: product.name,
                                    image: product.image,

                                    size: selectedSize,
                                    grind: selectedGrind,

                                    quantity,
                                })
                            }
                            className="border border-[#C8A46B] text-[#C8A46B] px-8 py-4 rounded-xl hover:bg-[#C8A46B] hover:text-black transition"
                        >
                            Agregar al carrito
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default ProductPage