import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { products } from "../data/products"

import Container from "../components/UI/Container"

import AddToCartActions from "../components/UI/AddToCartActions"

function ProductPage() {

    const { slug } = useParams()

    const product = products.find(
        (p) => p.slug === slug
    )

    // TODOS LOS HOOKS ANTES DEL RETURN CONDICIONAL
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [slug])

    if (!product) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold">
                    Producto no encontrado
                </h1>
            </div>
        )
    }

    return (
        <section className="bg-black text-white py-20 lg:py-24 2xl:py-32">
            <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-24 items-center">

                {/* IMAGE */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full" />
                    <img
                        src={product.image}
                        alt={product.name}
                        className="relative rounded-3xl w-full max-w-xl 2xl:max-w-2xl mx-auto object-cover"
                    />
                </div>

                {/* INFO */}
                <div>
                    <p className="uppercase tracking-[0.3em] text-gold mb-4 text-sm 2xl:text-base">
                        Café de especialidad
                    </p>

                    <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-6">
                        {product.name}
                    </h1>

                    <p className="text-zinc-400 text-base lg:text-lg 2xl:text-xl mb-8 leading-relaxed max-w-xl 2xl:max-w-2xl">
                        {product.description}
                    </p>


                    {/* DETAILS */}
                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div>
                            <p className="text-zinc-500 mb-2 text-sm 2xl:text-base uppercase tracking-wider">
                                Origen
                            </p>
                            <p className="text-lg lg:text-xl 2xl:text-2xl">
                                {product.origin}
                            </p>


                        </div>

                        <div>
                            <p className="text-zinc-500 mb-2 text-sm 2xl:text-base uppercase tracking-wider">
                                Proceso
                            </p>
                            <p className="text-lg lg:text-xl 2xl:text-2xl">
                                {product.process}
                            </p>
                        </div>
                    </div>

                    {/* NOTES */}
                    <div className="mb-10">
                        <p className="text-zinc-500 mb-4 2xl:text-lg">
                            Perfil sensorial
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {product.notes.map((note) => (
                                <span
                                    key={note}
                                    className="border border-gold text-gold px-4 py-2 rounded-full text-sm 2xl:text-base"
                                >
                                    {note}
                                </span>
                            ))}
                        </div>
                    </div>

                    <AddToCartActions
                        product={product}
                    />

                </div>

            </Container>
        </section>
    )
}

export default ProductPage