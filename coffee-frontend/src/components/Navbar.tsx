import { useState } from "react"

import logo from "../assets/logo.png"
import Arbol from "../assets/arbol.png"

import { Link } from "react-router-dom"


import { useCart } from "../context/CartContext"

import { ShoppingBag, Menu, X, ChevronDown, User, } from "lucide-react"

import ConfirmModal from "./UI/ConfirmModal"

import Container from "./UI/Container"

import IconButton from "./UI/IconButton"
import { useAuth } from "../context/AuthContext"

import { Heart } from "lucide-react"

import { useFavorites } from "../context/FavoritesContext"
import "../styles/components/navbar.css"
import { useScrollToSection } from "../hooks/useScrollToSection"

import { useProducts } from "../context/ProductsContext"

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileProducts, setMobileProducts] = useState(false)
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const { scrollToSection } = useScrollToSection()
    const [
        isProfileOpen,
        setIsProfileOpen,
    ] = useState(false)


    const { cart, setIsCartOpen } = useCart()
    const { products } = useProducts()  
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
        <nav className="navbar-root">
            {/* NAVBAR */}
            <Container className="navbar-wrapper">
                <div className="navbar-container">
                    {/* LOGO */}
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={() => {
                            setShowMenu(false)
                            setMobileMenu(false)
                        }}
                    >
                        <img
                            src={logo}
                            alt="Elcira Logo"
                            className="navbar-logo-image"
                        />
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="navbar-desktop-menu">
                        <li>
                            <Link
                                to="/"
                                onClick={() => setShowMenu(false)}
                                className="navbar-link"
                            >
                                Inicio
                            </Link>
                        </li>

                        <li
                            className="navbar-link"
                            onMouseEnter={() => setShowMenu(true)}
                            onClick={() => {
                                setShowMenu(false)
                                scrollToSection("products")
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            Productos
                        </li>

                        <li className="navbar-link">
                            Nosotros
                        </li>

                        <li className="navbar-link">
                            Contacto
                        </li>
                    </ul>

                    {/* ICONOS */}

                    <div className="navbar-actions">

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

                            onClick={() => {

                                if (!user) {

                                    setIsAuthOpen(true)

                                    return
                                }

                                setIsFavoritesOpen(true)
                            }}
                        />
                        <IconButton

                            icon={
                                <div className="navbar-cart-icon">

                                    <ShoppingBag size={18} />

                                    <span className="navbar-cart-count">

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
                            className="navbar-tree"
                        />

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setMobileMenu((prev) => !prev)}
                            className="navbar-mobile-button"
                            aria-label="Abrir menú"
                        >
                            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* MOBILE MENU */}
            {mobileMenu && (
                <div className="navbar-mobile-menu">
                    <ul className="navbar-mobile-menu-list">
                        <li className="navbar-mobile-item">
                            <Link
                                to="/"
                                onClick={() => setMobileMenu(false)}
                                className="navbar-mobile-link"
                            >
                                Inicio
                            </Link>
                        </li>

                        {/* PRODUCTOS CON ACORDEÓN */}
                        <li className="navbar-mobile-products-item">
                            <button
                                onClick={() => setMobileProducts((prev) => !prev)}
                                className="navbar-mobile-products-button"
                            >
                                Productos
                                <ChevronDown
                                    size={16}
                                    className={`navbar-mobile-chevron ${mobileProducts ? "navbar-mobile-chevron-open" : ""}`}
                                />
                            </button>

                            {mobileProducts && (
                                <ul className="navbar-mobile-products-list">
                                    {products.map((product) => (
                                        <li key={product.slug}>
                                            <Link
                                                to={`/products/${product.slug}`}
                                                onClick={() => {
                                                    setMobileMenu(false)
                                                    setMobileProducts(false)
                                                }}
                                                className="navbar-mobile-product-link"
                                            >
                                                {product.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li className="navbar-mobile-item">
                            <span className="navbar-mobile-text-link">
                                Nosotros
                            </span>
                        </li>

                        <li className="py-4">
                            <span className="navbar-mobile-text-link">
                                Contacto
                            </span>
                        </li>
                    </ul>
                </div>
            )}

            {/* MEGA MENU */}
            {showMenu && (
                <div
                    className="navbar-mega-menu"
                    onMouseEnter={() => setShowMenu(true)}
                    onMouseLeave={() => setShowMenu(false)}
                >
                    <Container className="navbar-mega-container">
                        <div className="navbar-mega-grid">
                            {/* VARIEDADES */}
                            <div>
                                <h3 className="navbar-mega-title">
                                    Variedades
                                </h3>
                                <ul className="navbar-mega-products">
                                    {products.map((product) => (
                                        <li key={product.slug}>
                                            <Link
                                                to={`/products/${product.slug}`}
                                                className="navbar-mega-product-link"
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
                                <h3 className="navbar-mega-title">
                                    Presentaciones
                                </h3>
                                <ul className="navbar-mega-presentation-list">
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
                                    className="navbar-mega-image"
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