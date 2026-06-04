
import { Link } from "react-router-dom"

import { X } from "lucide-react"


import "../../styles/components/quick-view-modal.css"

import AddToCartActions from "./AddToCartActions"

type QuickViewModalProps = {

    isOpen: boolean

    onClose: () => void

    product: any
}

function QuickViewModal({

    isOpen,

    onClose,

    product,

}: QuickViewModalProps) {

    if (!isOpen || !product) return null

    return (

        <div className="quick-view-overlay">

            {/* BACKDROP */}

            <div
                onClick={onClose}
                className="quick-view-backdrop"
            />

            {/* MODAL */}

            <div className="quick-view-modal">

                {/* IMAGE */}

                <div className="quick-view-image-wrapper">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="quick-view-image"
                    />

                </div>

                {/* CONTENT */}

                <div className="quick-view-content">

                    {/* CLOSE */}

                    <button
                        onClick={onClose}
                        className="quick-view-close"
                    >

                        <X size={28} />

                    </button>

                    <h2 className="quick-view-title">

                        {product.name}

                    </h2>

                    <AddToCartActions
                        product={product}
                        compact
                    />

                    <Link
                        to={`/products/${product.slug}`}
                        onClick={onClose}
                        className="quick-view-link"
                    >
                        Ver más detalles →

                    </Link>
                </div>

            </div>

        </div>
    )
}

export default QuickViewModal