import { Link } from "react-router-dom"

import Button from "./button"

import { X } from "lucide-react"

type AuthRequiredModalProps = {

    isOpen: boolean

    onClose: () => void
}

function AuthRequiredModal({

    isOpen,

    onClose,

}: AuthRequiredModalProps) {

    if (!isOpen) return null

    return (

        <div className="auth-required-overlay">

            {/* BACKDROP */}

            <div
                onClick={onClose}
                className="auth-required-backdrop"
            />

            {/* MODAL */}

            <div className="auth-required-modal">

                <button
                    onClick={onClose}
                    className="auth-required-close"
                >

                    <X size={24} />

                </button>
                
                <h2 className="auth-required-title">

                    Guarda tus cafés favoritos

                </h2>

                <p className="auth-required-description">

                    Inicia sesión o crea una cuenta
                    para guardar tus productos favoritos
                    y acceder a ellos fácilmente.

                </p>

                <div className="auth-required-actions">

                    <Link
                        to="/login"
                        onClick={onClose}
                    >

                        <Button variant="primary">

                            Iniciar sesión

                        </Button>

                    </Link>

                    <Link
                        to="/register"
                        onClick={onClose}
                    >

                        <Button variant="outline">

                            Crear cuenta

                        </Button>

                    </Link>

                </div>

            </div>

        </div>
    )
}

export default AuthRequiredModal