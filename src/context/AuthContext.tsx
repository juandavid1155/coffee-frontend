import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"

type User = {

    name: string

    email: string
}

type AuthContextType = {

    user: User | null

    login: (
        email: string,
        password: string
    ) => void

    logout: () => void

    isAuthOpen: boolean

    setIsAuthOpen:
    React.Dispatch<
        React.SetStateAction<boolean>
    >
    authMode: "login" | "register"

    setAuthMode:
    React.Dispatch<
        React.SetStateAction<
            "login" | "register"
        >
    >
}

const AuthContext =
    createContext<AuthContextType | null>(null)

export function AuthProvider({
    children,
}: {
    children: React.ReactNode
}) {

    const [user, setUser] =
        useState<User | null>(null)

    const [
        isAuthOpen,
        setIsAuthOpen,
    ] = useState(false)

    const [
        authMode,
        setAuthMode,
    ] = useState<"login" | "register">(
        "login"
    )

    useEffect(() => {

        const storedUser =
            localStorage.getItem("user")

        if (storedUser) {

            setUser(JSON.parse(storedUser))
        }

    }, [])

    function login(
        email: string,
        _password: string
    ) {

        const fakeUser = {

            name: "Juan",

            email,
        }

        setUser(fakeUser)

        localStorage.setItem(
            "user",
            JSON.stringify(fakeUser)
        )
    }

    function logout() {

        setUser(null)

        localStorage.removeItem("user")

    }

    const value = useMemo(() => ({

        user,

        login,

        logout,

        isAuthOpen,

        setIsAuthOpen,

        authMode,

        setAuthMode,

    }), [

        user,

        isAuthOpen,

        authMode,
    ])

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>
    )
}

export function useAuth() {

    const context =
        useContext(AuthContext)

    if (!context) {

        throw new Error(
            "useAuth must be used inside AuthProvider"
        )
    }

    return context
}

