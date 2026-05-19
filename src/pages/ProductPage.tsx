import { useState } from "react"

import { useParams } from "react-router-dom"

import { products } from "../data/products"


import { useCart } from "../context/CartContext"

import Button from "../components/UI/button"
function ProductPage() {

    const { slug } = useParams()

    const product = products.find(
        (p) => p.slug === slug
    )

    const {
        addToCart,
        setIsCartOpen,
    } = useCart()

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


    const [addedToCart, setAddedToCart] = useState(false)

    const [shakeButton, setShakeButton] = useState(false)

    function handleBuyNow() {


        setIsCartOpen(true)

        setShakeButton(true)


        setTimeout(() => {
            setShakeButton(false)
        }, 500)
    }

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

                                <Button
                                    key={size}
                                    variant="selector"
                                    active={selectedSize === size}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </Button>

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

                                <Button
                                    key={grind}
                                    variant="selector"
                                    active={selectedGrind === grind}
                                    onClick={() => setSelectedGrind(grind)}
                                >
                                    {grind}
                                </Button>

                            ))}

                        </div>
                    </div>

                    {/* QUANTITY */}

                    <div className="mb-10">

                        <p className="text-zinc-500 mb-4">
                            Cantidad
                        </p>

                        <div className="flex items-center gap-4">

                            <Button
                                variant="icon"
                                onClick={() =>
                                    setQuantity((prev) => Math.max(1, prev - 1))
                                }
                            >
                                -
                            </Button>

                            <span className="text-2xl font-semibold">
                                {quantity}
                            </span>

                            <Button
                                variant="icon"
                                onClick={() => setQuantity((prev) => prev + 1)}
                            >
                                +
                            </Button>

                        </div>
                    </div>

                    {/* CTA */}

                    <div className="flex gap-4">

                        <Button
                            variant="outline"
                            added={addedToCart}
                            shake={addedToCart}
                            onClick={() => {

                                addToCart({
                                    slug: product.slug,
                                    name: product.name,
                                    image: product.image,

                                    size: selectedSize,
                                    grind: selectedGrind,

                                    quantity,
                                })

                                setAddedToCart(true)

                                setQuantity(1)

                                setTimeout(() => {
                                    setAddedToCart(false)
                                }, 2000)
                            }}
                        >
                            {addedToCart
                                ? "Agregado ✓"
                                : "Agregar al carrito"}
                        </Button>

                        <Button
                            variant="primary"
                            shake={shakeButton}
                            onClick={handleBuyNow}
                        >
                            Comprar ahora
                        </Button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default ProductPage