type ButtonProps = {

    children: React.ReactNode

    onClick?: () => void

    type?: "button" | "submit" | "reset"

    className?: string

    variant?:
    | "primary"
    | "outline"
    | "selector"
    | "icon"

    active?: boolean

    shake?: boolean

    added?: boolean
}
function Button({

    children,

    onClick,

    type = "button",

    className = "",

    variant = "primary",

    active = false,

    shake = false,

    added = false,

}: ButtonProps) {

    const baseStyles = `

        flex items-center justify-center

        rounded-xl

        transition-all duration-300 ease-out

        active:scale-[0.98]

        whitespace-nowrap
    `

    const variants = {

        primary:
            `
            bg-gold text-black

            px-[clamp(1.3rem,2vw,2rem)]
            py-[clamp(0.8rem,1vw,1.1rem)]

            text-[clamp(0.95rem,1vw,1.1rem)]

            font-semibold

            hover:scale-[1.03]
            hover:brightness-105
            `,

        outline: added

            ? `
            bg-gold
            text-black

            border border-gold

            shadow-gold

            scale-[1.03]

            px-[clamp(1.3rem,2vw,2rem)]
            py-[clamp(0.8rem,1vw,1.1rem)]

            text-[clamp(0.95rem,1vw,1.1rem)]
            `

            : `
            border border-gold
            text-gold

            px-[clamp(1.3rem,2vw,2rem)]
            py-[clamp(0.8rem,1vw,1.1rem)]

            text-[clamp(0.95rem,1vw,1.1rem)]

            hover:bg-gold
            hover:text-black

            hover:scale-[1.03]
            `,

        selector: active

            ? `
            bg-gold
            text-black

            border border-gold

            px-[clamp(1rem,1.4vw,1.4rem)]
            py-[clamp(0.7rem,1vw,1rem)]

            text-[clamp(0.85rem,1vw,1rem)]
            `

            : `
            border border-zinc-700

            hover:border-gold

            px-[clamp(1rem,1.4vw,1.4rem)]
            py-[clamp(0.7rem,1vw,1rem)]

            text-[clamp(0.85rem,1vw,1rem)]
            `,

        icon:
            `
            w-[clamp(2.5rem,3vw,3rem)]
            h-[clamp(2.5rem,3vw,3rem)]

            border border-zinc-700

            rounded-xl

            text-[clamp(1rem,1.2vw,1.2rem)]

            hover:border-gold
            hover:scale-[1.03]
            `,
    }

    return (

        <button

            type={type}

            onClick={onClick}

            className={`

        ${baseStyles}

        ${variants[variant]}

        ${shake
                    ? "animate-shake scale-[1.03]"
                    : ""
                }

        ${className}

    `}

    
        >
        {children}

        </button>

    )
}

export default Button