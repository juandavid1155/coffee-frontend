import Button from "../components/UI/button"
import Container from "../components/UI/Container"

function Hero() {
    return (
        <section className="bg-black text-white min-h-[85vh] flex items-center py-12 sm:py-16 lg:py-20 overflow-hidden">
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-24 items-center">
                
                <div className="max-w-xl 2xl:max-w-2xl">
                    <p className="text-gold uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm 2xl:text-base">
                        Café de especialidad
                    </p>

                    <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[0.95] mb-6 max-w-[12ch]">
                        Café colombiano
                        <span className="text-gold"> premium</span>
                    </h1>

                    <p className="text-zinc-400 text-base sm:text-lg 2xl:text-xl mb-8 leading-relaxed max-w-xl 2xl:max-w-2xl">
                        Experiencia en cada taza. Café cuidadosamente seleccionado
                        desde las montañas huilenses. ¿Tomarías café conmigo toda la vida?
                    </p>

                    <div className="flex flex-wrap gap-4">
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

                <div className="flex justify-center lg:justify-end">
                    <img
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                        alt="Coffee"
                        className="
                            w-full
                            max-w-md sm:max-w-lg xl:max-w-xl 2xl:max-w-2xl
                            aspect-[4/3]
                            rounded-3xl
                            object-cover
                            shadow-2xl
                        "
                    />
                </div>
            </Container>
        </section>
    )
}

export default Hero