import { useState } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { products } from "../data/products"

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="bg-black text-white border-b border-zinc-800 relative">

            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

                <Link to="/">
                    <img
                        src={logo}
                        alt="Elcira Logo"
                        className="h-12 object-contain"
                    />
                </Link>

                <ul className="flex gap-10 text-sm uppercase tracking-wider">

                    <li>

                        <Link
                            to="/"
                            onClick={() => setShowMenu(false)}
                            className="hover:text-[#C8A46B] transition"
                        >
                            Inicio
                        </Link>

                    </li>

                    <li
                        className="cursor-pointer hover:text-[#C8A46B] transition"
                        onMouseEnter={() => setShowMenu(true)}
                    >
                        Productos
                    </li>

                    <li className="cursor-pointer hover:text-[#C8A46B] transition">
                        Nosotros
                    </li>

                    <li className="cursor-pointer hover:text-[#C8A46B] transition">
                        Contacto
                    </li>

                </ul>
            </div>

            {showMenu && (
                <div
                    className="absolute left-0 top-full w-full bg-zinc-950 border-t border-zinc-800 py-14 z-50"
                    onMouseEnter={() => setShowMenu(true)}
                    onMouseLeave={() => setShowMenu(false)}
                >
                    <div className="max-w-7xl mx-auto px-8 grid grid-cols-3 gap-16">

                        <div>
                            <h3 className="text-[#C8A46B] mb-6 uppercase text-sm tracking-[0.2em]">
                                Variedades
                            </h3>

                            <ul className="space-y-5 text-4xl font-bold">

                                {products.map((product) => (

                                    <li key={product.slug}>

                                        <Link
                                            to={`/products/${product.slug}`}
                                            className="hover:text-[#C8A46B] transition"
                                            onClick={() => setShowMenu(false)}
                                        >
                                            {product.name}
                                        </Link>

                                    </li>

                                ))}

                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#C8A46B] mb-6 uppercase text-sm tracking-[0.2em]">
                                Presentaciones
                            </h3>

                            <ul className="space-y-4 text-zinc-300 text-lg">
                                <li>Verde</li>
                                <li>Pergamino</li>
                                <li>Tostado</li>
                                <li>Molido</li>
                                <li>En grano</li>
                            </ul>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                                alt="Coffee"
                                className="rounded-3xl h-80 w-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar