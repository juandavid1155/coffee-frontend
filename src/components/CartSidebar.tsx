import { useCart } from "../context/CartContext"

import { Link } from "react-router-dom"

import Button from "./UI/button"

import ConfirmModal from "./UI/confirmmodal"
import { useState, useEffect } from "react"

function CartSidebar() {

    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart()

    const [itemToRemove, setItemToRemove] =
        useState<null | {
            slug: string
            size: string
            grind: string
        }>(null)

    const subtotal = cart.reduce(

        (acc, item) =>

            acc + item.price * item.quantity,

        0
    )

    useEffect(() => {

        if (isCartOpen) {

            document.body.classList.add("cart-open")

        } else {

            document.body.classList.remove("cart-open")
        }

        return () => {

            document.body.classList.remove("cart-open")
        }

    }, [isCartOpen])

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
                overflow-y-auto
                className={`

                    fixed top-0 right-0

                    h-screen
                    w-full sm:w-[460px] lg:w-[500px]

                    max-w-full
                    overflow-hidden

                    bg-zinc-950

                    border-l border-zinc-800

                    z-50

                    flex flex-col overflow-y-auto

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
                        className="text-zinc-200 hover:text-white text-3xl leading-none transition"
                    >

                        ×

                    </button>

                </div>

                {/* CONTENT */}

                <div className="cart-scroll flex-1 overflow-y-auto overflow-x-hidden">

                    {cart.length === 0 ? (

                        <div className="min-h-full flex flex-col items-center justify-center text-center px-6 py-10">

                            <h3 className="text-3xl font-bold mb-5 text-white">

                                Tu carrito está vacío

                            </h3>

                            <p className="text-zinc-200 leading-relaxed mb-10 max-w-sm text-lg">

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

                                    <div className="flex-1 flex flex-col lg:flex-row lg:justify-between gap-4">

                                        {/* INFO */}

                                        <div>

                                            <h3 className="font-semibold text-xl text-white">

                                                {item.name}

                                            </h3>

                                            <p className="text-zinc-400 text-base mt-2">

                                                {item.size}

                                            </p>

                                            <p className="text-zinc-400 text-base">

                                                {item.grind}

                                            </p>

                                            <div className="flex items-center gap-3 mt-5">

                                                <button
                                                    onClick={() =>
                                                        decreaseQuantity(
                                                            item.slug,
                                                            item.size,
                                                            item.grind
                                                        )
                                                    }
                                                    className="w-10 h-10 border border-zinc-700 rounded-xl hover:border-[#C8A46B] transition"
                                                >
                                                    -
                                                </button>

                                                <span className="text-[#C8A46B] text-lg font-medium">

                                                    {item.quantity}

                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increaseQuantity(
                                                            item.slug,
                                                            item.size,
                                                            item.grind
                                                        )
                                                    }
                                                    className="w-10 h-10 border border-zinc-700 rounded-xl hover:border-[#C8A46B] transition"
                                                >
                                                    +
                                                </button>

                                                <button
                                                    onClick={() => {

                                                        setItemToRemove({

                                                            slug: item.slug,

                                                            size: item.size,

                                                            grind: item.grind,
                                                        })
                                                    }}
                                                    className="text-red-400 text-base ml-4 hover:text-red-300 transition"
                                                >
                                                    Eliminar
                                                </button>

                                            </div>

                                        </div>

                                        {/* PRICE */}

                                        <div className="lg:flex flex-col items-end shrink-0 mt-3 lg:mt-0">

                                            <p className="text-gold text-xl lg:text-2xl font-bold leading-none">

                                                ${(item.price * item.quantity)
                                                    .toLocaleString("es-CO")}

                                            </p>

                                            <span className="text-gold text-sm mt-1">

                                                COP

                                            </span>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

                {/* FOOTER */}

                <div className="flex items-center justify-between gap-6 mb-5 px-2">

                    <span className="text-zinc-400 text-xl">

                        Subtotal

                    </span>

                    <span className="text-2xl font-bold text-gold">

                        ${subtotal.toLocaleString("es-CO")} COP

                    </span>

                </div>

                <div className="p-6 border-t border-zinc-800 bg-zinc-950 shrink-0">

                    <button className="w-full bg-gold text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition">

                        Finalizar compra

                    </button>

                </div>

            </aside>

            <ConfirmModal

                isOpen={!!itemToRemove}

                title="Eliminar producto"

                description="¿Seguro que deseas eliminar este café del carrito?"

                onCancel={() => setItemToRemove(null)}

                onConfirm={() => {

                    if (!itemToRemove) return

                    removeFromCart(

                        itemToRemove.slug,

                        itemToRemove.size,

                        itemToRemove.grind
                    )

                    setItemToRemove(null)
                }}
            />

        </>

    )
}

export default CartSidebar