import Button from "../components/UI/button"

function Hero() {
    return (
        <section className="min-h-screen bg-black text-white flex items-center">
            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <p className="text-[#C8A46B] uppercase tracking-[0.3em] mb-4">
                        Café de especialidad
                    </p>

                    <h1 className="text-6xl font-bold leading-tight mb-6">
                        Café colombiano
                        <span className="text-[#C8A46B]"> premium</span>
                    </h1>

                    <p className="text-zinc-400 text-lg mb-8">
                        Experiencia en cada taza.
                        Café cuidadosamente seleccionado
                        desde las montañas huilenses.

                        ¿Tomarías café conmigo toda la vida?
                    </p>

                    <div className="flex gap-4">
                        <Button
                            variant="primary"
                            onClick={() => {
                                const section = document.getElementById("products")

                                section?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }}
                        >
                            Comprar ahora
                        </Button>

                        <Button variant="outline">
                            Conocer más
                        </Button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                        alt="Coffee"
                        className="rounded-2xl w-full max-w-md object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero