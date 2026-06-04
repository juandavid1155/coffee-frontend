import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"
import api from "../services/api"

type User = {
    id: number
    name: string
    email: string
}

type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => Promise<boolean>
    register: (name: string, email: string, password: string) => Promise<boolean>
    logout: () => void
    isAuthOpen: boolean
    setIsAuthOpen: React.Dispatch<React.SetStateAction<boolean>>
    authMode: "login" | "register"
    setAuthMode: React.Dispatch<React.SetStateAction<"login" | "register">>
    error: string | null
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isAuthOpen, setIsAuthOpen] = useState(false)
    const [authMode, setAuthMode] = useState<"login" | "register">("login")
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    async function login(email: string, password: string): Promise<boolean> {
    try {
        setError(null)
        const res = await api.post("/auth/login", { email, password })
        const { token, user } = res.data
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
        setIsAuthOpen(false)
        return true
    } catch (err: any) {
        setError(err.response?.data?.message || "Error al iniciar sesión")
        return false
    }
}

    async function register(name: string, email: string, password: string): Promise<boolean> {
    try {
        setError(null)
        await api.post("/auth/register", { name, email, password })
        await login(email, password)
        return true
    } catch (err: any) {
        setError(err.response?.data?.message || "Error al registrarse")
        return false
    }
}

    function logout() {
        setUser(null)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    const value = useMemo(() => ({
        user,
        login,
        register,
        logout,
        isAuthOpen,
        setIsAuthOpen,
        authMode,
        setAuthMode,
        error,
    }), [user, isAuthOpen, authMode, error])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider")
    }
    return context
}