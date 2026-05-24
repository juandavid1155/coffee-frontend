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

            <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

                <h1 className="text-4xl font-bold mb-3">

                    Bienvenido

                </h1>

                <p className="text-zinc-400 mb-10">

                    Ingresa para continuar tu experiencia cafetera.

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

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
                            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-[#C8A46B] transition"
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
                            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-[#C8A46B] transition"
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