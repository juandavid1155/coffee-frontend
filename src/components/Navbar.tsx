import { useState } from "react"

import logo from "../assets/logo.png"
import Arbol from "../assets/arbol.png"

import { Link } from "react-router-dom"

import { products } from "../data/products"

import { useCart } from "../context/CartContext"

import { ShoppingBag, Menu, X, ChevronDown, User, } from "lucide-react"

import ConfirmModal from "./UI/ConfirmModal"

import Container from "./UI/Container"

import IconButton from "./UI/IconButton"
import { useAuth } from "../context/AuthContext"

import { Heart } from "lucide-react"

import { useFavorites } from "../context/FavoritesContext"


function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileProducts, setMobileProducts] = useState(false)
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    const [
        isProfileOpen,
        setIsProfileOpen,
    ] = useState(false)


    const { cart, setIsCartOpen } = useCart()

    const {

        favorites,

        setIsFavoritesOpen,

    } = useFavorites()

    const {

        user,

        logout,

        setIsAuthOpen,

    } = useAuth()

    return (
        <nav className="bg-black text-white border-b border-zinc-800 relative z-50">
            {/* NAVBAR */}
            <Container className="py-4 2xl:py-6">
                <div className="flex items-center justify-between gap-4">
                    {/* LOGO */}
                    <Link
                        to="/"
                        className="flex items-center shrink-0"
                        onClick={() => {
                            setShowMenu(false)
                            setMobileMenu(false)
                        }}
                    >
                        <img
                            src={logo}
                            alt="Elcira Logo"
                            className="h-10 sm:h-11 lg:h-12 2xl:h-16 w-auto object-contain"
                        />
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden lg:flex items-center gap-8 xl:gap-12 2xl:gap-16 text-sm 2xl:text-base uppercase tracking-[0.2em]">
                        <li>
                            <Link
                                to="/"
                                onClick={() => setShowMenu(false)}
                                className="hover:text-[#C8A46B] transition-colors duration-300"
                            >
                                Inicio
                            </Link>
                        </li>

                        <li
                            className="cursor-pointer hover:text-[#C8A46B] transition-colors duration-300"
                            onMouseEnter={() => setShowMenu(true)}
                        >
                            Productos
                        </li>

                        <li className="cursor-pointer hover:text-[#C8A46B] transition-colors duration-300">
                            Nosotros
                        </li>

                        <li className="cursor-pointer hover:text-[#C8A46B] transition-colors duration-300">
                            Contacto
                        </li>
                    </ul>

                    {/* ICONOS */}

                    <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 shrink-0">

                        <IconButton

                            icon={

                                <div className="relative">

                                    <Heart size={20} />

                                    {favorites.length > 0 && (

                                        <span className="favorite-counter">

                                            {favorites.length}

                                        </span>

                                    )}

                                </div>
                            }

                            label="Favoritos"

                            onClick={() =>
                                setIsFavoritesOpen(true)
                            }
                        />
                        <IconButton

                            icon={
                                <div className="flex items-center gap-2">

                                    <ShoppingBag size={18} />

                                    <span className="text-sm 2xl:text-base">

                                        {cart.length}

                                    </span>

                                </div>
                            }

                            label="Carrito"

                            onClick={() => setIsCartOpen(true)}
                        />

                        {user ? (

                            <div className="relative">

                                <IconButton

                                    icon={<User size={20} />}

                                    label="Perfil"

                                    onClick={() =>
                                        setIsProfileOpen(
                                            (prev) => !prev
                                        )
                                    }
                                />

                                {isProfileOpen && (

                                    <div className="profile-dropdown">

                                        <div className="profile-dropdown-info">

                                            <p className="profile-dropdown-name">

                                                {user.name}

                                            </p>

                                            <p className="profile-dropdown-email">

                                                {user.email}

                                            </p>

                                        </div>

                                        <button
                                            onClick={() => {

                                                setShowLogoutModal(true)

                                                setIsProfileOpen(false)
                                            }}
                                            className="profile-dropdown-logout"
                                        >

                                            Cerrar sesión

                                        </button>

                                    </div>
                                )}

                            </div>

                        ) : (

                            <div className="relative">

                                <IconButton

                                    icon={<User size={20} />}

                                    label="Perfil"

                                    onClick={() =>
                                        setIsAuthOpen(true)
                                    }
                                />

                            </div>

                        )}

                        <img
                            src={Arbol}
                            alt="Árbol Logo"
                            className="hidden sm:block h-9 lg:h-10 2xl:h-14 w-auto object-contain"
                        />

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setMobileMenu((prev) => !prev)}
                            className="lg:hidden text-white hover:text-[#C8A46B] transition-colors"
                            aria-label="Abrir menú"
                        >
                            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* MOBILE MENU */}
            {mobileMenu && (
                <div className="lg:hidden border-t border-zinc-800 bg-black/95 backdrop-blur-md">
                    <ul className="flex flex-col px-5 sm:px-6 py-6 uppercase tracking-[0.18em] text-sm">
                        <li className="py-4 border-b border-zinc-800">
                            <Link
                                to="/"
                                onClick={() => setMobileMenu(false)}
                                className="hover:text-gold transition-colors"
                            >
                                Inicio
                            </Link>
                        </li>

                        {/* PRODUCTOS CON ACORDEÓN */}
                        <li className="border-b border-zinc-800">
                            <button
                                onClick={() => setMobileProducts((prev) => !prev)}
                                className="w-full flex items-center justify-between py-4 hover:text-gold transition-colors"
                            >
                                Productos
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${mobileProducts ? "rotate-180" : ""}`}
                                />
                            </button>

                            {mobileProducts && (
                                <ul className="pb-4 pl-4 flex flex-col gap-3">
                                    {products.map((product) => (
                                        <li key={product.slug}>
                                            <Link
                                                to={`/products/${product.slug}`}
                                                onClick={() => {
                                                    setMobileMenu(false)
                                                    setMobileProducts(false)
                                                }}
                                                className="text-zinc-400 hover:text-gold transition-colors normal-case tracking-normal text-base font-semibold"
                                            >
                                                {product.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li className="py-4 border-b border-zinc-800">
                            <span className="cursor-pointer hover:text-gold transition-colors">
                                Nosotros
                            </span>
                        </li>

                        <li className="py-4">
                            <span className="cursor-pointer hover:text-gold transition-colors">
                                Contacto
                            </span>
                        </li>
                    </ul>
                </div>
            )}

            {/* MEGA MENU */}
            {showMenu && (
                <div
                    className="absolute left-0 top-full w-full bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 z-50 hidden lg:block"
                    onMouseEnter={() => setShowMenu(true)}
                    onMouseLeave={() => setShowMenu(false)}
                >
                    <Container className="py-12">
                        <div className="grid grid-cols-3 gap-12 2xl:gap-16 items-start">
                            {/* VARIEDADES */}
                            <div>
                                <h3 className="text-[#C8A46B] mb-6 uppercase text-sm 2xl:text-base tracking-[0.2em]">
                                    Variedades
                                </h3>
                                <ul className="space-y-4">
                                    {products.map((product) => (
                                        <li key={product.slug}>
                                            <Link
                                                to={`/products/${product.slug}`}
                                                className="block text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-tight hover:text-[#C8A46B] transition-colors duration-300"
                                                onClick={() => setShowMenu(false)}
                                            >
                                                {product.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* PRESENTACIONES */}
                            <div>
                                <h3 className="text-[#C8A46B] mb-6 uppercase text-sm 2xl:text-base tracking-[0.2em]">
                                    Presentaciones
                                </h3>
                                <ul className="space-y-4 text-zinc-300 text-lg 2xl:text-xl">
                                    <li>Verde</li>
                                    <li>Pergamino</li>
                                    <li>Tostado</li>
                                    <li>Molido</li>
                                    <li>En grano</li>
                                </ul>
                            </div>

                            {/* IMAGEN */}
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                                    alt="Coffee"
                                    className="rounded-3xl w-full h-[320px] xl:h-[380px] 2xl:h-[440px] object-cover"
                                />
                            </div>
                        </div>
                    </Container>
                </div>
            )}

            <ConfirmModal

                isOpen={showLogoutModal}

                title="Cerrar sesión"

                description="¿Seguro que deseas cerrar sesión?"

                confirmText="Cerrar sesión"

                onCancel={() =>
                    setShowLogoutModal(false)
                }

                onConfirm={() => {

                    logout()

                    setShowLogoutModal(false)
                }}
            />
        </nav>
    )
}

export default Navbar