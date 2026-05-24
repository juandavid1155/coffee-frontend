import { X } from "lucide-react"

import { useAuth } from "../../context/AuthContext"

type AuthModalProps = {

    children: React.ReactNode
}

function AuthModal({

    children,

}: AuthModalProps) {

    const {

        isAuthOpen,

        setIsAuthOpen,

    } = useAuth()

    if (!isAuthOpen) return null

    return (

        <div className="auth-modal-overlay">

            {/* BACKDROP */}

            <div
                onClick={() =>
                    setIsAuthOpen(false)
                }
                className="auth-modal-backdrop"
            />

            {/* MODAL */}

            <div className="auth-modal">

                <button
                    onClick={() =>
                        setIsAuthOpen(false)
                    }
                    className="auth-modal-close"
                >

                    <X size={24} />

                </button>

                <div className="auth-modal-content cart-scroll">

                    {children}

                </div>
            </div>

        </div>
    )
}

export default AuthModal