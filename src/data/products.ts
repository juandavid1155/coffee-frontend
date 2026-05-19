const origin = "Huila, Colombia"

const sizes = [
  "250g",
  "500g",
  "1000g",
]

const grindOptions = [
  "En grano",
  "Molienda gruesa",
  "Molienda media",
  "Molienda media fina",
  "Molienda fina",
]

export const products = [

  {
    slug: "geisha",

    name: "Geisha",

    description:
      "Café de especialidad con notas florales, cítricas y una acidez elegante.",

    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348",

    origin,

    process: "Lavado",

    notes: [
      "Floral",
      "Miel",
      "Cítrico",
    ],

    sizes,

    grindOptions,
  },

  {
    slug: "borbon-rosado",

    name: "Borbón Rosado",

    description:
      "Dulzura compleja y acidez brillante.",

    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",

    origin,

    process: "Natural",

    notes: [
      "Panela",
      "Frutos rojos",
      "Chocolate",
    ],

    sizes,

    grindOptions,
  },

  {
    slug: "castillo",

    name: "Castillo",

    description:
      "Balance perfecto para el día a día.",

    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93",

    origin,

    process: "Honey",

    notes: [
      "Caramelo",
      "Nuez",
      "Cacao",
    ],

    sizes,

    grindOptions,
  },

  {
    slug: "caturro",

    name: "Caturro",

    description:
      "Tradición colombiana en cada taza.",

    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e",

    origin,

    process: "Lavado",

    notes: [
      "Chocolate",
      "Panela",
      "Cítrico",
    ],

    sizes,

    grindOptions,
  },

]