import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import SocialSidebar from "./components/SocialSidebar"
import LoginPage from "./pages/LoginPage"

import ProductPage from "./pages/ProductPage"

import CartSidebar from "./components/CartSidebar"
import ScrollToHash from "./components/ScrollToHash"

import AuthModal from "./components/UI/AuthModal"

import RegisterPage from "./pages/RegisterPage"

import { useAuth } from "./context/AuthContext"


function App() {

  const { authMode } = useAuth()

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

      <AuthModal>

        {authMode === "login"

          ? <LoginPage />

          : <RegisterPage />
        }

      </AuthModal>

    </div>
  )
}

export default App