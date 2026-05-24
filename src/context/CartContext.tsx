import {
    createContext,
    useContext,
    useState,
    useMemo,
    useEffect,
} from "react"

export type CartItem = {

    slug: string

    name: string

    image: string

    size: string

    grind: string

    quantity: number

    price: number
}

type CartContextType = {

    cart: CartItem[]

    addToCart: (item: CartItem) => void

    removeFromCart: (
        slug: string,
        size: string,
        grind: string
    ) => void

    increaseQuantity: (
        slug: string,
        size: string,
        grind: string
    ) => void

    decreaseQuantity: (
        slug: string,
        size: string,
        grind: string
    ) => void

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

    const [cart, setCart] = useState<CartItem[]>(() => {

        const storedCart =
            localStorage.getItem("cart")

        return storedCart
            ? JSON.parse(storedCart)
            : []
    })

    const [isCartOpen, setIsCartOpen] = useState(false)


    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        )

    }, [cart])

        
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

    function removeFromCart(
        slug: string,
        size: string,
        grind: string
    ) {

        setCart((prev) =>

            prev.filter((item) =>

                !(

                    item.slug === slug &&
                    item.size === size &&
                    item.grind === grind

                )
            )
        )
    }

    function increaseQuantity(
        slug: string,
        size: string,
        grind: string
    ) {

        setCart((prev) =>

            prev.map((item) =>

                item.slug === slug &&
                    item.size === size &&
                    item.grind === grind

                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }

                    : item
            )
        )
    }

    function decreaseQuantity(
        slug: string,
        size: string,
        grind: string
    ) {

        setCart((prev) =>

            prev
                .map((item) =>

                    item.slug === slug &&
                        item.size === size &&
                        item.grind === grind

                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }

                        : item
                )
                .filter((item) => item.quantity > 0)
        )
    }

    const value = useMemo(() => ({

        cart,

        addToCart,

        isCartOpen,
        removeFromCart,

        increaseQuantity,

        decreaseQuantity,
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