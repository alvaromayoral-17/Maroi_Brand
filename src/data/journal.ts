export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  heroLabel: string;
  tone: "sand" | "sky" | "olive" | "terracotta" | "stone" | "navy";
  body: string[];
  pullQuote: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "cinco-vidas-de-una-chaqueta",
    title: "Cinco vidas de una chaqueta",
    excerpt:
      "La safari mediterránea reinterpretada desde la sastrería: una sola prenda que resuelve la mañana, el trabajo, el viaje y la noche.",
    category: "Prendas",
    readingTime: "4 min",
    date: "2026-05-14",
    heroLabel: "Chaqueta safari de lino sobre camiseta blanca, luz de tarde",
    tone: "sand",
    body: [
      "Hay prendas que resuelven una ocasión y prendas que resuelven un verano entero. La Chaqueta MAROI pertenece al segundo grupo. Nace de la safari de siempre, esa que asociamos al viaje y a la luz fuerte, pero llega hasta aquí por el camino de la sastrería: cuatro bolsillos, estructura ligera, hombros que no imponen nada.",
      "La diferencia no está en el dibujo, está en la construcción. Una safari cualquiera es una prenda de utilidad. Esta se corta pensando en la caída, en cómo se comporta la tela cuando te sientas, cuando conduces, cuando acabas llevándola colgada del brazo porque la tarde ha refrescado menos de lo que esperabas.",
      "Su primera vida empieza temprano. Sobre camiseta blanca y pantalón claro, con una zapatilla limpia, no estás vestido para nada en concreto y sin embargo estás vestido. Es el uso más honesto de la prenda y probablemente el que más veces vas a repetir sin darte cuenta.",
      "La segunda vida es la de la semana. La chaqueta ocupa el sitio del blazer sin heredar su rigidez. Con un pantalón de sastrería en piedra o en oliva sostiene una reunión, una comida larga, una presentación. Nadie piensa que vas informal. Nadie piensa que vas disfrazado de traje.",
      "La tercera vida es la del viaje. Se dobla mal y aun así vuelve a su sitio. Aguanta el avión, el coche, la maleta hecha con prisa. Los cuatro bolsillos dejan de ser un detalle de diseño y pasan a ser exactamente lo que necesitas cuando no quieres cargar nada más que lo puesto.",
      "La cuarta vida llega de noche. Cambia la camiseta por una camisa de lino, cambia la zapatilla por un mocasín, y la misma prenda que a las once de la mañana era relajada a las once de la noche es sobria. No has cambiado de registro. Has cambiado de compañía.",
      "La quinta vida es la más lenta y la más interesante: la que le da el tiempo. El lino se ablanda, el color se asienta, la tela empieza a moverse contigo en lugar de moverse a pesar de ti. A los dos veranos la chaqueta ya no parece nueva, parece tuya, que es un sitio mucho mejor al que llegar.",
      "Por eso hablamos de vidas y no de usos. Un uso se agota. Una vida se acumula. Y una prenda que puede durar más que una temporada obliga a comprar de otra manera: menos veces, mejor, con la tranquilidad de saber que ya está resuelto.",
      "Esa es la idea que sostiene toda la casa. No vestir bien para aparentar, sino para sentirse bien vestido. Y comprobar, verano tras verano, que la elegancia también se mide en cuántas veces vuelves a la misma percha.",
    ],
    pullQuote:
      "A los dos veranos la chaqueta ya no parece nueva, parece tuya.",
  },
  {
    slug: "menos-prendas-mas-posibilidades",
    title: "Menos prendas, más posibilidades",
    excerpt:
      "Un armario no es una colección de piezas sueltas, es un sistema. Cuatro parejas de color y todo empieza a encajar solo.",
    category: "Estilo",
    readingTime: "4 min",
    date: "2026-06-09",
    heroLabel: "Camisa de lino crudo y pantalón oliva sobre pared encalada",
    tone: "stone",
    body: [
      "El armario lleno del que no sale nada es un clásico. Ocurre casi siempre por la misma razón: se han comprado prendas, no se ha construido un sistema. Cada pieza funciona sola y ninguna funciona con la de al lado.",
      "La alternativa no es comprar más. Es comprar de manera que todo combine con todo. Si cada prenda que entra puede convivir con las que ya están dentro, el número de opciones no crece sumando, crece multiplicando.",
      "La paleta hace ese trabajo silencioso. Ivory, sand, stone, white, azul mediterráneo, navy, oliva y terracota vienen de la arena, de la piedra, del mar, de la vegetación y de la tierra. No se pelean entre ellos porque en el paisaje del que salen tampoco se pelean.",
      "De ahí nacen cuatro parejas que resuelven casi cualquier día. El blanco con el azul es la más evidente y la más difícil de estropear: luz, limpieza, un punto marinero que nunca se pasa de rosca. Es la pareja del mediodía y de la primera cena del viaje.",
      "La arena con la terracota es la más cálida. Tiene tierra dentro, y por eso funciona cuando el blanco se queda corto de carácter. Aporta color sin levantar la voz, que es exactamente lo que se le pide a un color en una prenda que vas a llevar mucho.",
      "El oliva con el crudo es la pareja de la vegetación. Baja el tono, ensucia el conjunto en el buen sentido y le da esa cosa vivida que hace que no parezca recién estrenado. Es la combinación que mejor envejece a lo largo del día.",
      "El navy con el blanco es la pareja de la noche. Es la más cerca de la sastrería clásica y la más fácil de llevar cuando quieres estar arreglado sin dar explicaciones. Un pantalón navy, una camisa blanca, y ya está.",
      "Con estas cuatro claves, una chaqueta, un blazer, dos camisas, dos pantalones y un short bastan para no repetir conjunto en toda una semana. No porque haya mucho, sino porque nada estorba. Un cargo con la caída de una pieza de sastrería sirve para la playa y para la mesa. Una camisa de lino va del día a la noche sin cambiarse.",
      "Esa es la parte práctica de la elegancia y la que menos se cuenta. Vestir bien sin pensar demasiado en vestir bien exige haber pensado antes, una sola vez, y bien. Después es solo abrir el armario y coger lo primero.",
    ],
    pullQuote:
      "El número de opciones no crece sumando, crece multiplicando.",
  },
  {
    slug: "la-elegancia-se-hereda-y-se-reinventa",
    title: "La elegancia se hereda y se reinventa",
    excerpt:
      "El padre reconoce el gesto, el hijo le encuentra otra manera. A³ nace justo en ese punto de encuentro.",
    category: "Generaciones",
    readingTime: "4 min",
    date: "2026-07-21",
    heroLabel: "Blazer desestructurado con denim y camisa de lino, terraza al atardecer",
    tone: "olive",
    body: [
      "Hay una escena que se repite en muchas casas. Un chico de veintipocos abre el armario de su padre, saca una chaqueta y se la prueba delante del espejo. Le queda rara y le queda bien a la vez. Eso que no sabe nombrar es una herencia empezando a funcionar.",
      "El error habitual sería decirle lo que suele decirse: que a cierta edad hay que vestir de cierta manera. Nadie ha mejorado nunca su forma de vestir por obligación. Se mejora por curiosidad, y la curiosidad no aparece cuando te dicen cómo tienes que ser.",
      "Por eso el mensaje de A³ no es vestir como un hombre mayor. Es empezar a vestir mejor sin dejar de ser tú. La frase parece pequeña y cambia toda la conversación, porque deja intacta la identidad y solo mueve el nivel de exigencia.",
      "En la práctica se ve enseguida. Una camisa de lino con zapatillas. Un blazer con denim. La safari con una camiseta debajo. Un cargo con mocasines. No hay nada disfrazado ahí: hay piezas buenas puestas con la naturalidad de quien no está pidiendo permiso.",
      "Lo interesante es que el padre entiende todas esas combinaciones. Reconoce la calidad de la tela, el cuello bien hecho, el hombro natural, la caída del pantalón. Está viendo sus propios códigos, solo que colocados de otra manera y en otro orden.",
      "Y el hijo, por su parte, descubre algo que no esperaba: que arreglarse un poco no le quita libertad. Que una prenda bien cortada le hace parecer más él, no menos. Que la comodidad y la elegancia dejaron de ser bandos enfrentados hace ya bastante tiempo.",
      "En casa esto se nota antes que en ninguna otra parte. Se empieza por una camisa prestada que ya no vuelve, sigue por un consejo que se acepta sin discutir demasiado y acaba en dos personas que compran igual aunque se vistan distinto. Nadie ha dado una lección y sin embargo algo se ha transmitido.",
      "Ahí es donde las dos generaciones se cruzan de verdad. No en la ropa idéntica, sino en el criterio compartido. Mismo horizonte, viajes distintos. Uno llega desde la sastrería y baja el nivel de formalidad. El otro llega desde el casual y sube el nivel de intención. Se encuentran a mitad de camino.",
      "Ese punto intermedio es exactamente el terreno de la casa: vestir elegante sin vestir formal. Un espacio que la sastrería tradicional dejó vacío y que el casual nunca supo ocupar del todo.",
      "La elegancia se hereda, pero también se reinventa. Y quizá la mejor herencia no sea la chaqueta que pasa de un armario a otro, sino la costumbre de fijarse en cómo están hechas las cosas.",
    ],
    pullQuote:
      "Mismo horizonte, viajes distintos: uno baja la formalidad, el otro sube la intención.",
  },
  {
    slug: "la-sobremesa-como-forma-de-lujo",
    title: "La sobremesa como forma de lujo",
    excerpt:
      "Marbella, Ibiza, Capri, Mallorca. No es moda mediterránea: es una manera mediterránea de entender la elegancia y el tiempo.",
    category: "Lugares",
    readingTime: "5 min",
    date: "2026-08-18",
    heroLabel: "Mesa puesta en terraza frente al mar, últimas horas de luz",
    tone: "sky",
    body: [
      "El Mediterráneo no es un estampado ni una paleta de colores bonita. Es, sobre todo, una manera de administrar el tiempo. Aquí nadie corre a los postres. La comida termina cuando termina la conversación, y esa costumbre explica más cosas sobre cómo se viste la gente de lo que parece.",
      "Si vas a estar cuatro horas sentado a la misma mesa, la ropa tiene que aguantar cuatro horas. Nada que te obligue a estar pendiente. Nada que se arrugue mal, apriete o pida ser vigilado. La elegancia mediterránea es exigente precisamente porque tiene que soportar la duración.",
      "La luz también manda. En Marbella cae plana y dorada al final de la tarde y hace que el blanco parezca todavía más blanco. En Capri el azul es tan literal que cualquier color que le pongas al lado tiene que estar bien elegido. En Mallorca todo baja un tono y se vuelve calmado.",
      "La arquitectura hace el resto. La cal de Ibiza, la piedra, la madera desgastada, las persianas cerradas a mediodía. De ahí salen el ivory, la arena, el stone y el terracota. No se han inventado: se han copiado del sitio donde uno querría estar.",
      "Saint-Tropez aporta sofisticación y Porto Cervo energía, pero ninguna de las dos cosas se traduce en exceso. Y Madrid funciona como contrapunto urbano: la misma actitud dentro de una ciudad sin costa, que es la mejor prueba de que esto no depende de la geografía.",
      "Porque el glamour no está donde solemos buscarlo. No está en la prenda cara ni en el logo grande. Está en la escena. Una terraza al atardecer, una mesa bien puesta, una camisa blanca, una copa, música de fondo, amigos que no tienen prisa, una casa que se va llenando de gente, un viaje que empieza mañana.",
      "La prenda es solo una parte de esa escena, y su mérito consiste en no interrumpirla. Cuando funciona de verdad nadie dice qué bien te queda esa chaqueta. Lo que la gente piensa, sin llegar a formularlo, es que quiere estar ahí. Que quiere vivir así.",
      "Ese es el matiz que separa una marca de ropa de una manera de vivir. Fotografiar prendas es fácil. Fotografiar momentos obliga a tener algo que contar: lugares, mesas, viajes, personas, sobremesas que se alargan.",
      "El lujo, aquí, casi nunca se ve. Se nota en la tela cuando la tocas, en la comodidad que no comentas y en el hecho de no mirar el reloj. A veces el lujo no es una prenda: es que nadie se levante de la mesa.",
    ],
    pullQuote:
      "A veces el lujo no es una prenda: es que nadie se levante de la mesa.",
  },
];

/** Hero photography per article. Falls back to the tonal placeholder if absent. */
export const JOURNAL_IMAGES: Record<string, string> = {
  "cinco-vidas-de-una-chaqueta": "/images/chaqueta-safari-detalle.jpg",
  "menos-prendas-mas-posibilidades": "/images/look-blazer-crudo.jpg",
  "la-elegancia-se-hereda-y-se-reinventa": "/images/blazer.jpg",
  "la-sobremesa-como-forma-de-lujo": "/images/terraza-olivo.jpg",
};
