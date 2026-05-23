import Button from "./button"

type ConfirmModalProps = {

    isOpen: boolean

    title: string

    description: string

    onConfirm: () => void

    onCancel: () => void
}

function ConfirmModal({

    isOpen,

    title,

    description,

    onConfirm,

    onCancel,

}: ConfirmModalProps) {

    if (!isOpen) return null

    return (

        <div className="fixed inset-0 z-[100] flex items-center justify-center">

            {/* OVERLAY */}

            <div
                onClick={onCancel}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* MODAL */}

            <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-8 w-[90%] max-w-md shadow-2xl animate-fadeIn">

                <h2 className="text-2xl font-bold text-white mb-4">

                    {title}

                </h2>

                <p className="text-zinc-400 leading-relaxed mb-8">

                    {description}

                </p>

                <div className="flex justify-end gap-4">

                    <Button
                        variant="outline"
                        onClick={onCancel}
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="primary"
                        onClick={onConfirm}
                    >
                        Eliminar
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default ConfirmModal