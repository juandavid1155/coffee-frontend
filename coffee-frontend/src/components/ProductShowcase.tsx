import { useState } from "react"

function ProductShowcase() {

  const product = {

    name: "Geisha",

    description:
      "Café de especialidad con notas florales, cítricas y una acidez elegante.",

    origin: "Huila, Colombia",

    process: "Lavado",

    notes: [
      "Floral",
      "Miel",
      "Cítrico",
    ],

    sizes: [
      "250g",
      "500g",
      "1000g",
    ],

    grindOptions: [
      "En grano",
      "Molido espresso",
      "Molido filtrado",
      "Prensa francesa",
    ],

    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  }

  const [selectedSize, setSelectedSize] = useState("500g")

  const [selectedGrind, setSelectedGrind] = useState("En grano")

  const [quantity, setQuantity] = useState(1)

  return (

    <section className="bg-black text-white py-[clamp(4rem,8vw,8rem)]">

      <div className="max-w-layout mx-auto px-[clamp(1rem,3vw,2rem)] grid lg:grid-cols-2 gap-[clamp(2rem,5vw,6rem)] items-center">

        {/* IMAGE */}

        <div className="relative flex justify-center">

          <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full" />

          <img
            src={product.image}
            alt={product.name}
            className="
            relative
            rounded-3xl
            w-full
            max-w-[clamp(320px,42vw,700px)]
            aspect-[4/5]
            object-cover
            shadow-2xl
            "
          />

        </div>

        {/* INFO */}

        <div>

          <p className="uppercase tracking-[0.3em] text-gold mb-4 text-[clamp(0.75rem,1vw,0.95rem)]">

            Café de especialidad

          </p>

          <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-bold leading-[0.95] mb-6">

            {product.name}

          </h2>

          <p className="text-zinc-400 text-[clamp(1rem,1.4vw,1.2rem)] mb-8 leading-relaxed max-w-[38rem]">

            {product.description}

          </p>

          {/* DETAILS */}

          <div className="grid grid-cols-2 gap-[clamp(1rem,2vw,2rem)] mb-10">

            <div>

              <p className="text-zinc-500 mb-2 text-sm uppercase tracking-wider">

                Origen

              </p>

              <p className="text-[clamp(1rem,1.4vw,1.3rem)]">

                {product.origin}

              </p>

            </div>

            <div>

              <p className="text-zinc-500 mb-2 text-sm uppercase tracking-wider">

                Proceso

              </p>

              <p className="text-[clamp(1rem,1.4vw,1.3rem)]">

                {product.process}

              </p>

            </div>

          </div>

          {/* NOTES */}

          <div className="mb-10">

            <p className="text-zinc-500 mb-4">

              Perfil sensorial

            </p>

            <div className="flex gap-3 flex-wrap">

              {product.notes.map((note) => (

                <span
                  key={note}
                  className="
                  border border-gold
                  text-gold
                  px-4 py-2
                  rounded-full
                  text-sm
                  "
                >

                  {note}

                </span>

              ))}

            </div>

          </div>

          {/* SIZE */}

          <div className="mb-10">

            <p className="text-zinc-500 mb-4">

              Presentación

            </p>

            <div className="flex gap-4 flex-wrap">

              {product.sizes.map((size) => (

                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`

                    px-[clamp(1rem,1.5vw,1.5rem)]
                    py-[clamp(0.7rem,1vw,1rem)]

                    rounded-xl
                    border
                    transition

                    text-[clamp(0.9rem,1vw,1rem)]

                    ${selectedSize === size
                      ? "bg-gold text-black border-gold"
                      : "border-zinc-700 hover:border-gold"
                    }
                  `}
                >

                  {size}

                </button>

              ))}

            </div>

          </div>

          {/* GRIND */}

          <div className="mb-10">

            <p className="text-zinc-500 mb-4">

              Tipo de molienda

            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {product.grindOptions.map((grind) => (

                <button
                  key={grind}
                  onClick={() => setSelectedGrind(grind)}
                  className={`

                    p-[clamp(1rem,1.5vw,1.3rem)]

                    rounded-xl
                    border
                    text-left
                    transition

                    text-[clamp(0.9rem,1vw,1rem)]

                    ${selectedGrind === grind
                      ? "bg-gold text-black border-gold"
                      : "border-zinc-700 hover:border-gold"
                    }
                  `}
                >

                  {grind}

                </button>

              ))}

            </div>

          </div>

          {/* QUANTITY */}

          <div className="mb-10">

            <p className="text-zinc-500 mb-4">

              Cantidad

            </p>

            <div className="flex items-center gap-4">

              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="
                w-[clamp(2.5rem,3vw,3rem)]
                h-[clamp(2.5rem,3vw,3rem)]

                border border-zinc-700
                rounded-xl

                text-lg

                hover:border-gold
                transition
                "
              >

                -

              </button>

              <span className="text-[clamp(1.2rem,1.8vw,2rem)] font-semibold">

                {quantity}

              </span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="
                w-[clamp(2.5rem,3vw,3rem)]
                h-[clamp(2.5rem,3vw,3rem)]

                border border-zinc-700
                rounded-xl

                text-lg

                hover:border-gold
                transition
                "
              >

                +

              </button>

            </div>

          </div>

          {/* CTA */}

          <div className="flex flex-wrap gap-4">

            <button
              className="
              bg-gold text-black

              px-[clamp(1.4rem,2vw,2rem)]
              py-[clamp(0.9rem,1vw,1.2rem)]

              rounded-xl

              font-semibold

              text-[clamp(0.95rem,1vw,1.1rem)]

              hover:scale-105
              transition
              "
            >

              Comprar ahora

            </button>

            <button
              className="
              border border-gold
              text-gold

              px-[clamp(1.4rem,2vw,2rem)]
              py-[clamp(0.9rem,1vw,1.2rem)]

              rounded-xl

              text-[clamp(0.95rem,1vw,1.1rem)]

              hover:bg-gold
              hover:text-black

              transition
              "
            >

              Agregar al carrito

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ProductShowcase