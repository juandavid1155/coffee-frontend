type IconButtonProps = {

    icon: React.ReactNode

    label: string

    onClick?: () => void

    className?: string
}

function IconButton({

    icon,

    label,

    onClick,

    className = "",

}: IconButtonProps) {

    return (

        <button
            onClick={onClick}
            className={`
                group
                relative
                flex
                items-center
                justify-center
                transition-colors
                duration-300
                hover:text-[#C8A46B]
                ${className}
            `}
        >

            {icon}

            <span
                className="
                    absolute
                    top-8
                    left-1/2
                    -translate-x-1/2
                    whitespace-nowrap
                    text-xs
                    tracking-wide
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                    text-[#C8A46B]
                "
            >
                {label}
            </span>

        </button>
    )
}

export default IconButton