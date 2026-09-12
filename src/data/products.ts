import type { MediaTone } from "@/components/media-placeholder";

export interface ProductColor {
  name: string;
  hex: string;
  tone: MediaTone;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  shortDescription: string;
  description: string[];
  detail: string;
  fabric: string;
  composition: string;
  care: string;
  colors: ProductColor[];
  sizes: string[];
  styleWith: string[];
  icon?: boolean;
  imageLabels: string[];
}

export type CategorySlug =
  | "chaquetas"
  | "camisas"
  | "pantalones"
  | "polos-knits"
  | "shorts";

export const CATEGORIES: {
  slug: CategorySlug;
  name: string;
  tagline: string;
  image: string;
}[] = [
  {
    slug: "chaquetas",
    name: "Chaquetas",
    tagline: "La safari y el blazer desestructurado",
    image: "/images/cat-chaquetas.jpg",
  },
  {
    slug: "camisas",
    name: "Camisas",
    tagline: "Lino, algodón y volúmenes relajados",
    image: "/images/cat-camisas.jpg",
  },
  {
    slug: "pantalones",
    name: "Pantalones",
    tagline: "Sastrería con comodidad contemporánea",
    image: "/images/cat-pantalones.jpg",
  },
  {
    slug: "polos-knits",
    name: "Polos & Knits",
    tagline: "Punto ligero para el día y la noche",
    image: "/images/cat-polos-knits.jpg",
  },
  {
    slug: "shorts",
    name: "Shorts",
    tagline: "Con alma de sastrería",
    image: "/images/cat-shorts.jpg",
  },
];

const IVORY: ProductColor = { name: "Ivory", hex: "#F5F1EA", tone: "sand" };
const BLANCO: ProductColor = { name: "Blanco", hex: "#FFFFFF", tone: "sand" };
const ARENA: ProductColor = { name: "Arena", hex: "#D8C9AE", tone: "sand" };
const PIEDRA: ProductColor = { name: "Piedra", hex: "#A99A85", tone: "stone" };
const AZUL: ProductColor = { name: "Azul Mediterráneo", hex: "#8FB8D9", tone: "sky" };
const NAVY: ProductColor = { name: "Navy", hex: "#16243F", tone: "navy" };
const OLIVA: ProductColor = { name: "Oliva", hex: "#5C6B41", tone: "olive" };
const TERRACOTA: ProductColor = { name: "Terracota", hex: "#BE6A45", tone: "terracotta" };

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const SIZES_PANTS = ["44", "46", "48", "50", "52", "54"];

export const PRODUCTS: Product[] = [
  {
    slug: "chaqueta-safari-maroi",
    name: "Chaqueta Safari MAROI",
    category: "chaquetas",
    price: 420,
    icon: true,
    shortDescription: "La pieza fundacional. Safari mediterránea reinterpretada desde la sastrería.",
    description: [
      "La chaqueta con la que empieza todo. Nace de la safari mediterránea y se reinterpreta desde la sastrería: cuatro bolsillos, estructura ligera y un cuello con personalidad suficiente para sostener el look por sí solo.",
      "Su construcción es lo bastante relajada para llevarla abierta sobre una camiseta y lo bastante precisa para cerrarla sobre una camisa de lino y salir a cenar. Es el icono de la casa y la prenda que mejor explica lo que MAROI entiende por elegancia.",
    ],
    detail: "Cuatro bolsillos de fuelle y hombro natural sin hombrera.",
    fabric: "Lino irlandés de peso medio, lavado en prenda.",
    composition: "100% lino",
    care: "Lavado en seco. Plancha templada del revés.",
    colors: [ARENA, OLIVA, IVORY, TERRACOTA],
    sizes: SIZES,
    styleWith: [
      "Con camiseta y pantalón de sastrería para el día",
      "Cerrada sobre camisa de lino blanca al atardecer",
      "Con cargo arena y mocasines para viajar",
    ],
    imageLabels: [
      "Chaqueta safari de lino, plano completo sobre acantilado",
      "Detalle de bolsillos y cuello",
      "Chaqueta abierta sobre camiseta, luz de tarde",
    ],
  },
  {
    slug: "blazer-desestructurado-maroi",
    name: "Blazer Desestructurado MAROI",
    category: "chaquetas",
    price: 465,
    shortDescription: "La sastrería pierde rigidez. Hombros naturales y tejidos ligeros.",
    description: [
      "Un blazer que no obliga a cambiar de vida para llevarlo. Sin entretela rígida, con hombro natural y forro parcial, cae sobre el cuerpo en lugar de imponerse sobre él.",
      "Funciona para viajar, para comer frente al mar, para una tarde larga de verano y para una cena. La misma prenda, cuatro escenas distintas.",
    ],
    detail: "Construcción desestructurada con forro parcial y dos botones.",
    fabric: "Mezcla de lino y lana fría con caída fluida.",
    composition: "70% lino, 30% lana",
    care: "Lavado en seco.",
    colors: [NAVY, IVORY, PIEDRA],
    sizes: SIZES,
    styleWith: [
      "Con pantalón relajado blanco y camisa abierta",
      "Con denim y camiseta de punto",
      "Sobre polo de punto navy para una cena",
    ],
    imageLabels: [
      "Blazer navy desestructurado, plano medio",
      "Detalle de solapa y caída del tejido",
      "Blazer con pantalón blanco frente al mar",
    ],
  },
  {
    slug: "sobrecamisa-field",
    name: "Sobrecamisa Field",
    category: "chaquetas",
    price: 245,
    shortDescription: "La capa intermedia. Entre la camisa y la chaqueta.",
    description: [
      "Una sobrecamisa pensada para las horas en las que sobra la chaqueta pero falta algo. Algodón denso, dos bolsillos de parche y un corte recto que funciona por encima de una camiseta o de una camisa fina.",
      "Es la pieza más discreta del armario y probablemente la que más se use.",
    ],
    detail: "Bolsillos de parche y botonadura de corozo.",
    fabric: "Sarga de algodón lavada.",
    composition: "100% algodón",
    care: "Lavado a máquina en frío. No usar secadora.",
    colors: [OLIVA, ARENA],
    sizes: SIZES,
    styleWith: [
      "Sobre camiseta blanca con cargo oliva",
      "Bajo la chaqueta safari en las noches de septiembre",
    ],
    imageLabels: [
      "Sobrecamisa oliva, plano completo",
      "Detalle de bolsillos de parche",
    ],
  },
  {
    slug: "camisa-de-lino-maroi",
    name: "Camisa de Lino MAROI",
    category: "camisas",
    price: 155,
    icon: true,
    shortDescription: "El punto de entrada a MAROI. Del mediodía a la sobremesa larga.",
    description: [
      "Lino lavado, cuello cuidado y un volumen relajado que no se arruga con la vida. Funciona sola, debajo de un blazer o abierta sobre una camiseta.",
      "Si hay una prenda por la que empezar a entender la marca, es esta.",
    ],
    detail: "Cuello italiano de caída suave, sin bolsillo.",
    fabric: "Lino lavado en prenda para un tacto ya vivido.",
    composition: "100% lino",
    care: "Lavado a máquina en frío. Plancha con el tejido húmedo.",
    colors: [BLANCO, AZUL, OLIVA, TERRACOTA],
    sizes: SIZES,
    styleWith: [
      "Blanca con pantalón navy, la combinación de la casa",
      "Terracota con pantalón arena",
      "Abierta sobre camiseta con unas zapatillas",
    ],
    imageLabels: [
      "Camisa de lino blanca, plano medio a contraluz",
      "Detalle de cuello y costura",
      "Camisa abierta sobre camiseta, terraza al atardecer",
    ],
  },
  {
    slug: "camisa-resort-cuello-abierto",
    name: "Camisa Resort Cuello Abierto",
    category: "camisas",
    price: 165,
    shortDescription: "Cuello camp y caída amplia. La camisa de las noches de agosto.",
    description: [
      "Cuello abierto de una pieza, manga corta y un cuerpo generoso que se mueve con el aire. Pensada para llevarla por fuera, siempre.",
      "El tejido tiene el peso justo para caer sin pegarse al cuerpo cuando el día no baja de treinta grados.",
    ],
    detail: "Cuello camp de una pieza y bajo recto.",
    fabric: "Mezcla de lino y algodón con textura visible.",
    composition: "55% lino, 45% algodón",
    care: "Lavado a máquina en frío.",
    colors: [IVORY, AZUL],
    sizes: SIZES,
    styleWith: [
      "Con short de sastrería arena",
      "Con pantalón de lino blanco y alpargatas",
    ],
    imageLabels: [
      "Camisa resort azul mediterráneo, plano completo",
      "Detalle de cuello camp",
    ],
  },
  {
    slug: "camisa-oxford-maroi",
    name: "Camisa Oxford MAROI",
    category: "camisas",
    price: 135,
    shortDescription: "El clásico urbano. Madrid como contrapunto al Mediterráneo.",
    description: [
      "Un oxford de algodón con cuello button down suave y un corte limpio, sin excesos. La prenda que resuelve los días en los que la ciudad pide algo más estructurado.",
      "Es el contrapunto urbano dentro de un armario nacido frente al mar.",
    ],
    detail: "Cuello button down con caída redondeada.",
    fabric: "Oxford de algodón peinado.",
    composition: "100% algodón",
    care: "Lavado a máquina en frío. Plancha media.",
    colors: [BLANCO, AZUL],
    sizes: SIZES,
    styleWith: [
      "Bajo el blazer navy con pantalón piedra",
      "Con cargo arena y mocasines",
    ],
    imageLabels: [
      "Camisa oxford blanca, plano medio",
      "Detalle de cuello button down",
    ],
  },
  {
    slug: "pantalon-de-sastreria-maroi",
    name: "Pantalón de Sastrería MAROI",
    category: "pantalones",
    price: 175,
    icon: true,
    shortDescription: "La construcción de la sastrería con la comodidad de un pantalón de verano.",
    description: [
      "Pinza suave, cintura media y una caída limpia hasta el tobillo. Tiene la construcción de una pieza de sastrería y la comodidad de algo que te pondrías un domingo.",
      "Disponible en los cinco colores que sostienen el armario: blanco, piedra, arena, navy y oliva.",
    ],
    detail: "Una pinza por delante y cintura con ajuste lateral.",
    fabric: "Mezcla de lino y algodón con cuerpo.",
    composition: "60% lino, 40% algodón",
    care: "Lavado en seco recomendado.",
    colors: [BLANCO, PIEDRA, ARENA, NAVY, OLIVA],
    sizes: SIZES_PANTS,
    styleWith: [
      "Blanco con camisa de lino azul mediterráneo",
      "Navy con camisa blanca, sin más",
      "Oliva con camiseta de punto crudo",
    ],
    imageLabels: [
      "Pantalón de sastrería blanco, plano completo",
      "Detalle de pinza y cintura",
      "Pantalón navy con camisa blanca",
    ],
  },
  {
    slug: "pantalon-cargo-maroi",
    name: "Pantalón Cargo MAROI",
    category: "pantalones",
    price: 195,
    shortDescription: "Utility, pero con elegancia. El cargo reinterpretado desde la sastrería.",
    description: [
      "El cargo deja de ser una prenda de trabajo y pasa a tener la construcción y la caída de una pieza de sastrería. Bolsillos laterales planos, integrados en la línea del pantalón en lugar de colgados sobre ella.",
      "Es la prenda que mejor traduce la idea de vestir elegante sin vestir formal.",
    ],
    detail: "Bolsillos laterales de fuelle plano, sin volumen añadido.",
    fabric: "Algodón técnico de tacto seco.",
    composition: "97% algodón, 3% elastano",
    care: "Lavado a máquina en frío.",
    colors: [ARENA, OLIVA, NAVY],
    sizes: SIZES_PANTS,
    styleWith: [
      "Con mocasines y camisa de lino, la combinación de la casa",
      "Con la chaqueta safari y una camiseta blanca",
    ],
    imageLabels: [
      "Pantalón cargo arena, plano completo",
      "Detalle de bolsillo lateral",
      "Cargo con mocasines, plano de pierna",
    ],
  },
  {
    slug: "pantalon-de-lino-relajado",
    name: "Pantalón de Lino Relajado",
    category: "pantalones",
    price: 155,
    shortDescription: "Cintura elástica interior y caída ancha. El pantalón de las horas lentas.",
    description: [
      "Lino puro, cintura con ajuste interior y una pierna ancha que se mueve sola. La prenda para las horas que no tienen plan.",
      "Se arruga, y esa es exactamente la idea.",
    ],
    detail: "Cintura interior elástica con cordón de algodón.",
    fabric: "Lino ligero sin tratar.",
    composition: "100% lino",
    care: "Lavado a máquina en frío. Secado al aire.",
    colors: [IVORY, ARENA],
    sizes: SIZES_PANTS,
    styleWith: [
      "Con camisa resort abierta",
      "Con camiseta de punto y sandalias",
    ],
    imageLabels: [
      "Pantalón de lino ivory, plano completo",
      "Detalle de cintura y caída",
    ],
  },
  {
    slug: "polo-de-punto-maroi",
    name: "Polo de Punto MAROI",
    category: "polos-knits",
    price: 140,
    shortDescription: "Punto fino de algodón. El polo que funciona bajo un blazer.",
    description: [
      "Un polo tejido en punto fino, con cuello blando y tres botones. Nada de piqué deportivo: esto es una prenda de punto pensada para convivir con la sastrería.",
      "Bajo el blazer sustituye a la camisa sin bajar el registro.",
    ],
    detail: "Cuello de punto blando con botonadura de tres.",
    fabric: "Punto fino de algodón mercerizado.",
    composition: "100% algodón",
    care: "Lavado a mano o programa delicado. Secar en plano.",
    colors: [NAVY, OLIVA, PIEDRA],
    sizes: SIZES,
    styleWith: [
      "Bajo el blazer con pantalón de sastrería",
      "Con cargo arena para el día",
    ],
    imageLabels: [
      "Polo de punto navy, plano medio",
      "Detalle de cuello de punto",
    ],
  },
  {
    slug: "jersey-lino-y-seda",
    name: "Jersey de Lino y Seda",
    category: "polos-knits",
    price: 185,
    shortDescription: "Para cuando cae el sol y la terraza se queda fresca.",
    description: [
      "Punto ligero de lino y seda, con cuello redondo y un brillo muy contenido. La prenda que se echa sobre los hombros a las once de la noche y acaba puesta.",
      "Ligero de verdad: ocupa nada en una maleta.",
    ],
    detail: "Cuello redondo con remate en canalé estrecho.",
    fabric: "Punto de lino y seda de galga fina.",
    composition: "70% lino, 30% seda",
    care: "Lavado a mano en frío. Secar en plano.",
    colors: [IVORY, NAVY, TERRACOTA],
    sizes: SIZES,
    styleWith: [
      "Sobre los hombros con camisa blanca",
      "Con pantalón de sastrería oliva",
    ],
    imageLabels: [
      "Jersey ivory de lino y seda, plano medio",
      "Detalle de punto y remate",
    ],
  },
  {
    slug: "camiseta-de-punto-maroi",
    name: "Camiseta de Punto MAROI",
    category: "polos-knits",
    price: 95,
    shortDescription: "La base del armario. Punto de algodón con cuerpo.",
    description: [
      "Una camiseta con suficiente cuerpo para llevarse bajo una chaqueta sin desaparecer. Cuello redondo firme y un largo pensado para ir por dentro o por fuera.",
      "Es la prenda que hace que la safari funcione con camiseta.",
    ],
    detail: "Cuello redondo reforzado y costura lateral continua.",
    fabric: "Punto de algodón de gramaje medio.",
    composition: "100% algodón",
    care: "Lavado a máquina en frío.",
    colors: [BLANCO, NAVY, ARENA],
    sizes: SIZES,
    styleWith: [
      "Bajo la chaqueta safari",
      "Con pantalón de lino relajado",
    ],
    imageLabels: [
      "Camiseta blanca de punto, plano medio",
      "Detalle de cuello",
    ],
  },
  {
    slug: "short-de-sastreria-maroi",
    name: "Short de Sastrería MAROI",
    category: "shorts",
    price: 135,
    shortDescription: "Ni deportivo ni bañador. Un short con alma de sastrería.",
    description: [
      "Largo por encima de la rodilla, pinza suave y la misma construcción que un pantalón de vestir. Pensado para el Mediterráneo pero lo bastante sofisticado para formar parte de un look completo.",
      "Es la prenda que más cuesta encontrar bien resuelta y por eso está aquí.",
    ],
    detail: "Pinza frontal y bajo con vuelta cosida.",
    fabric: "Mezcla de lino y algodón con cuerpo.",
    composition: "60% lino, 40% algodón",
    care: "Lavado a máquina en frío.",
    colors: [ARENA, BLANCO, NAVY],
    sizes: SIZES_PANTS,
    styleWith: [
      "Con camisa resort y mocasines",
      "Con camiseta de punto blanca",
    ],
    imageLabels: [
      "Short de sastrería arena, plano completo",
      "Detalle de bajo con vuelta",
    ],
  },
  {
    slug: "short-cargo-resort",
    name: "Short Cargo Resort",
    category: "shorts",
    price: 145,
    shortDescription: "El cargo, en versión corta y en clave de resort.",
    description: [
      "Misma lógica que el pantalón cargo, cortado por encima de la rodilla. Bolsillos planos que no rompen la línea y un tejido que se seca en nada.",
      "Para los días que empiezan en el barco y acaban en una mesa larga.",
    ],
    detail: "Bolsillos laterales planos y cintura con ajuste interior.",
    fabric: "Algodón técnico de secado rápido.",
    composition: "97% algodón, 3% elastano",
    care: "Lavado a máquina en frío.",
    colors: [OLIVA, ARENA],
    sizes: SIZES_PANTS,
    styleWith: [
      "Con camisa de lino abierta sobre camiseta",
      "Con sobrecamisa field al caer la tarde",
    ],
    imageLabels: [
      "Short cargo oliva, plano completo",
      "Detalle de bolsillo lateral",
    ],
  },
];


/**
 * Real photography by product. Slots without an entry fall back to the tonal
 * placeholder, whose label states which shot is still missing.
 */
export const PRODUCT_IMAGES: Record<string, string[]> = {
  "chaqueta-safari-maroi": [
    "/images/chaqueta-safari.jpg",
    "/images/chaqueta-safari-detalle.jpg",
    "/images/look-terracota.jpg",
  ],
  "blazer-desestructurado-maroi": ["/images/blazer.jpg", "/images/look-blazer-crudo.jpg"],
  "sobrecamisa-field": ["/images/cat-chaquetas.jpg"],
  "camisa-de-lino-maroi": ["/images/cat-camisas.jpg"],
  "pantalon-de-sastreria-maroi": ["/images/cat-pantalones.jpg"],
  "pantalon-cargo-maroi": ["/images/look-cargo-oliva.jpg"],
  "polo-de-punto-maroi": ["/images/cat-polos-knits.jpg"],
  "short-de-sastreria-maroi": ["/images/cat-shorts.jpg"],
};

export function productImage(slug: string, index = 0): string | undefined {
  return PRODUCT_IMAGES[slug]?.[index];
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return `${price} €`;
}
