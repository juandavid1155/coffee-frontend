import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import SocialSidebar from "./components/SocialSidebar"

import ProductPage from "./pages/ProductPage"

import CartSidebar from "./components/CartSidebar"
import ScrollToHash from "./components/ScrollToHash"

function App() {

    return (

        <div className="min-h-screen bg-black text-white overflow-x-hidden">

            <Navbar />

            <SocialSidebar />

            <CartSidebar />

            <ScrollToHash />

            <main className="overflow-x-hidden">

                <Routes>

                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <FeaturedProducts />
                            </>
                        }
                    />

                    <Route
                        path="/products/:slug"
                        element={<ProductPage />}
                    />

                </Routes>

            </main>

        </div>
    )
}

export default App