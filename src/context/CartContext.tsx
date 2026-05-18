import {
  createContext,
  useContext,
  useState,
} from "react"

type CartItem = {
  slug: string
  name: string
  image: string

  size: string
  grind: string

  quantity: number
}

type CartContextType = {
  cart: CartItem[]

  addToCart: (item: CartItem) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {

  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item: CartItem) {

    setCart((prev) => [...prev, item])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {

  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    )
  }

  return context
}