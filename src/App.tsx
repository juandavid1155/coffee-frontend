import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import SocialSidebar from "./components/SocialSidebar"

import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <SocialSidebar />

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

    </div>
  )
}

export default App