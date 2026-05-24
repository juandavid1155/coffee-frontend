import { useState } from "react"

import { useAuth }
from "../context/AuthContext"

import Button
from "../components/UI/button"

function RegisterPage() {

    const {

        login,

        setIsAuthOpen,

        setAuthMode,

    } = useAuth()

    const [name, setName] =
        useState("")

    const [email, setEmail] =
        useState("")

    const [password, setPassword] =
        useState("")

    function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault()

        login(email, password)

        setIsAuthOpen(false)
    }

    return (

        <div className="text-white">

            <div className="w-full">

                <h1 className="text-4xl font-bold mb-3">

                    Crear cuenta

                </h1>

                <p className="text-zinc-400 mb-10">

                    Crea tu cuenta y guarda
                    tus cafés favoritos.

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div>

                        <label className="block text-sm text-zinc-400 mb-2">

                            Nombre

                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            required
                            className="auth-input"
                        />

                    </div>

                    <div>

                        <label className="block text-sm text-zinc-400 mb-2">

                            Correo electrónico

                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                            className="auth-input"
                        />

                    </div>

                    <div>

                        <label className="block text-sm text-zinc-400 mb-2">

                            Contraseña

                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                            className="auth-input"
                        />

                    </div>

                    <Button
                        variant="primary"
                        type="submit"
                        className="w-full"
                    >

                        Crear cuenta

                    </Button>

                </form>

                <p className="auth-switch-text">

                    ¿Ya tienes cuenta?

                    <button
                        type="button"
                        onClick={() =>
                            setAuthMode("login")
                        }
                        className="auth-switch-button"
                    >

                        Iniciar sesión

                    </button>

                </p>

            </div>

        </div>
    )
}

export default RegisterPage