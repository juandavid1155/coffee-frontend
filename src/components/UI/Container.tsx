// src/components/UI/Container.tsx
interface ContainerProps {
    children: React.ReactNode
    className?: string
}

function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`w-full max-w-[100%] mx-auto px-5 sm:px-6 lg:px-8 2xl:px-16 ${className}`}>
            {children}
        </div>
    )
}

export default Container