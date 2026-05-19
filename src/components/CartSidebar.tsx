import { useCart } from "../context/CartContext"

import { Link } from "react-router-dom"

import Button from "./UI/button"

function CartSidebar() {

    const {
        cart,
        isCartOpen,
        setIsCartOpen,
    } = useCart()

    return (

        <>

            {/* OVERLAY */}

            {isCartOpen && (

                <div
                    onClick={() => setIsCartOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                />

            )}

            {/* SIDEBAR */}

            <aside
                className={`

                    fixed top-0 right-0

                    h-screen
                    w-full sm:w-[380px] lg:w-[420px]

                    max-w-full
                    overflow-hidden

                    bg-zinc-950

                    border-l border-zinc-800

                    z-50

                    flex flex-col

                    transition-transform duration-500 ease-out

                    ${isCartOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }

                `}
            >

                {/* HEADER */}

                <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 shrink-0">

                    <h2 className="text-2xl font-bold text-white">

                        Carrito

                    </h2>

                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-zinc-400 hover:text-white text-3xl leading-none transition"
                    >

                        ×

                    </button>

                </div>

                {/* CONTENT */}

                <div className="flex-1 overflow-y-auto overflow-x-hidden">

                    {cart.length === 0 ? (

                        <div className="min-h-full flex flex-col items-center justify-center text-center px-6 py-10">

                            <h3 className="text-3xl font-bold mb-5 text-white">

                                Tu carrito está vacío

                            </h3>

                            <p className="text-zinc-500 leading-relaxed mb-10 max-w-sm text-lg">

                                Ve a la sección de productos y descubre tu próximo café favorito.

                            </p>

                            <Link
                                to="/#products"
                                onClick={() => setIsCartOpen(false)}
                            >

                                <Button
                                    variant="primary"
                                    onClick={() => {

                                        setIsCartOpen(false)

                                        const section =
                                            document.getElementById("products")

                                        section?.scrollIntoView({
                                            behavior: "smooth",
                                        })

                                    }}
                                >

                                    Explorar cafés

                                </Button>

                            </Link>

                        </div>

                    ) : (

                        <div className="px-6 py-6 space-y-5">

                            {cart.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex gap-4 border-b border-zinc-800 pb-5"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover shrink-0"
                                    />

                                    <div className="flex-1 min-w-0">

                                        <h3 className="font-semibold text-lg text-white truncate">

                                            {item.name}

                                        </h3>

                                        <p className="text-zinc-400 text-sm mt-1">

                                            {item.size}

                                        </p>

                                        <p className="text-zinc-400 text-sm">

                                            {item.grind}

                                        </p>

                                        <p className="text-gold mt-2 text-sm">

                                            Cantidad: {item.quantity}

                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

                {/* FOOTER */}

                <div className="p-6 border-t border-zinc-800 bg-zinc-950 shrink-0">

                    <button className="w-full bg-gold text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition">

                        Finalizar compra

                    </button>

                </div>

            </aside>

        </>

    )
}

export default CartSidebar