import { useNavigate } from "react-router-dom"

export function useScrollToSection() {
    const navigate = useNavigate()

    const scrollToSection = (sectionId: string) => {
        const isHomePage = window.location.pathname === "/"

        if (isHomePage) {
            setTimeout(() => {
                const section = document.getElementById(sectionId)
                section?.scrollIntoView({ behavior: "smooth" })
            }, 300)
        } else {
            navigate(`/#${sectionId}`)
        }
    }

    return { scrollToSection }
}