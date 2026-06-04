import { useState } from "react"

import { useAuth } from "../context/AuthContext"

import Button from "../components/UI/button"

function LoginPage() {

    const {

        login,

        setIsAuthOpen,

        setAuthMode,

    } = useAuth()

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault()

        login(email, password)

        setIsAuthOpen(false)

    }

    return (

        <div className="text-white flex items-center justify-center px-6">

            <div className="auth-form-card">

                <h1 className="auth-form-title">

                    Bienvenido

                </h1>

                <p className="auth-form-description">

                    Ingresa para continuar tu experiencia cafetera.

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div>

                        <label className="auth-form-label">

                            Correo electrónico

                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                            className="auth-form-input"
                        />

                    </div>

                    <div>

                        <label className="auth-form-label">

                            Contraseña

                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                            className="auth-form-input"
                        />

                    </div>

                    <Button
                        variant="primary"
                        type="submit"
                        className="w-full"
                    >
                        
                        Ingresar

                    </Button>

                    <p className="auth-switch-text">

                        ¿No tienes cuenta?

                        <button
                            type="button"
                            className="auth-switch-button"

                            onClick={() =>
                                setAuthMode("register")
                            }
                        >

                            Crear cuenta

                        </button>

                    </p>

                </form>

            </div>

        </div>
    )
}

export default LoginPage