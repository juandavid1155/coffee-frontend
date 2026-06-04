import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/components/auth.css"
import { BrowserRouter } from "react-router-dom"

import { AuthProvider } from "./context/AuthContext"

import { FavoritesProvider } from "./context/FavoritesContext"

import App from './App.tsx'
import './index.css'
import { CartProvider } from "./context/CartContext"
import { ProductsProvider } from "./context/ProductsContext"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)