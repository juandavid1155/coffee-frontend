import {
    createContext,
    useContext,
    useState,
    useMemo,
} from "react"

export type CartItem = {

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

    isCartOpen: boolean

    setIsCartOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >
}

const CartContext =
    createContext<CartContextType | null>(null)

export function CartProvider({
    children,
}: {
    children: React.ReactNode
}) {

    const [cart, setCart] = useState<CartItem[]>([])

    const [isCartOpen, setIsCartOpen] = useState(false)

    function addToCart(item: CartItem) {

        setCart((prev) => {

            const existingItem = prev.find(
                (cartItem) =>

                    cartItem.slug === item.slug &&
                    cartItem.size === item.size &&
                    cartItem.grind === item.grind
            )

            if (existingItem) {

                return prev.map((cartItem) => {

                    if (

                        cartItem.slug === item.slug &&
                        cartItem.size === item.size &&
                        cartItem.grind === item.grind

                    ) {

                        return {

                            ...cartItem,

                            quantity:
                                cartItem.quantity + item.quantity,
                        }
                    }

                    return cartItem

                })
            }

            return [...prev, item]

        })

    
    }

    const value = useMemo(() => ({

        cart,

        addToCart,

        isCartOpen,

        setIsCartOpen,

    }), [cart, isCartOpen])

    return (

        <CartContext.Provider value={value}>

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