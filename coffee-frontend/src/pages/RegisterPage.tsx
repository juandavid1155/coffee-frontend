import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import Button from "../components/UI/button"

function RegisterPage() {
    const { register, setIsAuthOpen, setAuthMode, error } = useAuth()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const success = await register(name, email, password)
    if (success) {
        setIsAuthOpen(false)
    }
}

    return (
        <div className="text-white">
            <div className="w-full">
                <h1 className="auth-form-title">Crear cuenta</h1>
                <p className="auth-form-description">
                    Crea tu cuenta y guarda tus cafés favoritos.
                </p>

                {error && (
                    <p className="text-red-400 text-sm mb-4">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="auth-form-label">Nombre</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="auth-form-input"
                        />
                    </div>

                    <div>
                        <label className="auth-form-label">Correo electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="auth-form-input"
                        />
                    </div>

                    <div>
                        <label className="auth-form-label">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="auth-form-input"
                        />
                    </div>

                    <Button variant="primary" type="submit" className="w-full">
                        Crear cuenta
                    </Button>
                </form>

                <p className="auth-switch-text">
                    ¿Ya tienes cuenta?
                    <button
                        type="button"
                        onClick={() => setAuthMode("login")}
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