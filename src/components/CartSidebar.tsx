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
                    className="fixed inset-0 bg-black/60 z-40"
                />

            )}

            {/* SIDEBAR */}

            <div
                className={`fixed top-0 right-0 h-full w-[420px] bg-zinc-950 border-l border-zinc-800 z-50 transition-transform duration-500 ${isCartOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >

                {/* HEADER */}

                <div className="flex items-center justify-between p-6 border-b border-zinc-800">

                    <h2 className="text-2xl font-bold text-white">
                        Carrito
                    </h2>

                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-zinc-400 hover:text-white text-2xl"
                    >
                        ×
                    </button>

                </div>

                {/* ITEMS */}

                <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-160px)]">

                    {cart.length === 0 ? (

                        <div className="flex flex-col items-center justify-center h-full text-center px-6">

                            <h3 className="text-2xl font-semibold mb-4">
                                Tu carrito está vacío
                            </h3>

                            <p className="text-zinc-500 leading-relaxed mb-8">
                                Ve a la sección de productos y descubre tu próximo café favorito.
                            </p>

                            <Link to="/#products" onClick={() => setIsCartOpen(false)}>
                                <Button
                                    variant="primary"
                                    onClick={() => {

                                        setIsCartOpen(false)

                                        const section = document.getElementById(
                                            "products"
                                        )

                                        if (section) {

                                            section.scrollIntoView({
                                                behavior: "smooth",
                                            })
                                        }
                                    }}
                                >
                                    Explorar cafés
                                </Button>

                            </Link>

                        </div>

                    ) : (

                        cart.map((item, index) => (

                            <div
                                key={index}
                                className="flex gap-4 border-b border-zinc-800 pb-6"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 rounded-xl object-cover"
                                />

                                <div className="flex-1">

                                    <h3 className="font-semibold text-lg">
                                        {item.name}
                                    </h3>

                                    <p className="text-zinc-400 text-sm mt-1">
                                        {item.size}
                                    </p>

                                    <p className="text-zinc-400 text-sm">
                                        {item.grind}
                                    </p>

                                    <p className="text-[#C8A46B] mt-2">
                                        Cantidad: {item.quantity}
                                    </p>

                                </div>

                            </div>

                        ))

                    )}

                </div>

                {/* FOOTER */}

                <div className="absolute bottom-0 left-0 w-full p-6 border-t border-zinc-800 bg-zinc-950">

                    <button className="w-full bg-[#C8A46B] text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition">
                        Finalizar compra
                    </button>

                </div>

            </div>
        </>
    )
}

export default CartSidebar