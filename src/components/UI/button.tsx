type ButtonProps = {
    children: React.ReactNode

    onClick?: () => void

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

    variant = "primary",

    active = false,

    shake = false,

    added = false,
}: ButtonProps) {

    const baseStyles =
        "transition-all duration-300"

    const variants = {

        primary:
            "bg-[#C8A46B] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105",

        outline: added
            ? "bg-[#C8A46B] text-black scale-105 shadow-[0_0_30px_rgba(200,164,107,0.5)] border border-[#C8A46B] px-8 py-4 rounded-xl"
            : "border border-[#C8A46B] text-[#C8A46B] hover:bg-[#C8A46B] hover:text-black px-8 py-4 rounded-xl",

        selector: active
            ? "bg-[#C8A46B] text-black border border-[#C8A46B] px-6 py-3 rounded-xl"
            : "border border-zinc-700 hover:border-[#C8A46B] px-6 py-3 rounded-xl",

        icon:
            "w-12 h-12 border border-zinc-700 rounded-xl text-xl hover:border-[#C8A46B]",
    }

    return (

        <button
            onClick={onClick}
            className={`

        ${baseStyles}

        ${variants[variant]}

        ${shake
                    ? "animate-shake scale-105"
                    : ""}
      `}
        >
            {children}
        </button>
    )
}

export default Button