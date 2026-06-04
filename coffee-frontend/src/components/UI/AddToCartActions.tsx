import { useState } from "react"

import { useCart } from "../../context/CartContext"

import Button from "./button"

import { Heart, } from "lucide-react"

import { useFavorites } from "../../context/FavoritesContext"


type AddToCartActionsProps = {

    product: any
    compact?: boolean

}

function AddToCartActions({

    product,
    compact = false,

}: AddToCartActionsProps) {

    const {
        addToCart,
        setIsCartOpen,
    } = useCart()

    const {
        toggleFavorite,
        isFavorite,
    } = useFavorites()

    const [shakeButton, setShakeButton] =
        useState(false)

    const [selectedSize, setSelectedSize] =
        useState(product.sizes[1])

    const [selectedGrind, setSelectedGrind] =
        useState(product.grindOptions[0])

    const [quantity, setQuantity] = useState(1)

    const [addedToCart, setAddedToCart] =
        useState(false)

    function handleAddToCart() {

        addToCart({

            slug: product.slug,

            name: product.name,

            image: product.image,

            size: selectedSize,

            grind: selectedGrind,

            quantity,

            price:
                product.price[
                selectedSize as keyof typeof product.price
                ],
        })

        setAddedToCart(true)

        setQuantity(1)

        setTimeout(() => {

            setAddedToCart(false)

        }, 2000)
    }


    function handleBuyNow() {

        setIsCartOpen(true)

        setShakeButton(true)

        setTimeout(() => {

            setShakeButton(false)

        }, 500)
    }
    return (

        <>

            {/* SIZE */}

            <div className={compact ? "mb-6" : "mb-10"}>

                <p className="text-zinc-500 mb-4 2xl:text-lg">

                    Presentación

                </p>

                <div className="flex gap-4 flex-wrap">

                    {product.sizes.map((size: string) => (

                        <Button
                            key={size}
                            variant="selector"
                            active={selectedSize === size}
                            onClick={() =>
                                setSelectedSize(size)
                            }
                        >

                            {size}

                        </Button>

                    ))}

                </div>

            </div>

            {/* PRICE */}

            <p className="text-zinc-500 mb-4 2xl:text-lg">

                Precio

            </p>

            <p
                className={`
                    font-bold
                    text-gold

                     ${compact
                        ? "text-2xl mb-6"
                        : "text-3xl lg:text-4xl 2xl:text-5xl mb-10"
                    }
                     `}
            >

                $
                {product.price[
                    selectedSize as keyof typeof product.price
                ].toLocaleString("es-CO")} COP

            </p>

            {/* GRIND */}

            <div className="mb-10">

                <p className="text-zinc-500 mb-4 2xl:text-lg">

                    Tipo de molienda

                </p>

                <div className="grid grid-cols-2 gap-3">

                    {product.grindOptions.map((grind: string) => (

                        <Button
                            key={grind}
                            variant="selector"
                            active={selectedGrind === grind}
                            onClick={() =>
                                setSelectedGrind(grind)
                            }
                        >

                            {grind}

                        </Button>

                    ))}

                </div>

            </div>

            {/* QUANTITY */}

            <div className="mb-10">

                <p className="text-zinc-500 mb-4 2xl:text-lg">

                    Cantidad

                </p>

                <div className="flex items-center gap-4">

                    <Button
                        variant="icon"
                        onClick={() =>
                            setQuantity((prev) =>
                                Math.max(1, prev - 1)
                            )
                        }
                    >

                        -

                    </Button>

                    <span className="text-xl lg:text-2xl 2xl:text-3xl font-semibold">

                        {quantity}

                    </span>

                    <Button
                        variant="icon"
                        onClick={() =>
                            setQuantity((prev) => prev + 1)
                        }
                    >

                        +

                    </Button>

                </div>

            </div>
            <div className={compact ? "mb-6" : "mb-10"}>

                <button
                    onClick={() => {

                        toggleFavorite({

                            slug: product.slug,

                            size: selectedSize,

                            grind: selectedGrind,
                        })
                    }}

                    className="favorite-button"
                >

                    <Heart
                        size={22}
                        className={
                            isFavorite({

                                slug: product.slug,

                                size: selectedSize,

                                grind: selectedGrind,
                            })

                                ? "favorite-icon-active"

                                : ""
                        }
                    />

                    <span>

                        {isFavorite({

                            slug: product.slug,

                            size: selectedSize,

                            grind: selectedGrind,
                        })

                            ? "Guardado en favoritos"

                            : "Agregar a favoritos"}

                    </span>

                </button>

            </div >
            {/* CTA */}

            < div className="flex flex-wrap gap-4" >

                <Button
                    variant="outline"
                    added={addedToCart}
                    shake={addedToCart}
                    onClick={handleAddToCart}
                >

                    {addedToCart
                        ? "Agregado ✓"
                        : "Agregar al carrito"}

                </Button>

                {
                    !compact && (

                        <Button
                            variant="primary"
                            shake={shakeButton}
                            onClick={handleBuyNow}
                        >

                            Comprar ahora

                        </Button>

                    )
                }
            </div >
        </>
    )
}

export default AddToCartActions