import { LEVELS } from '../levels';
import { TECHNOLOGIES } from '../technologies';

const QR_CODE_COMPONENT = {
  id: 'cc0721b5-4130-4324-851c-b3af98a37963',
  name: 'QR code component',
  headerDescription:
    'Tarjeta minimalista: fondo oscuro, QR centrado, título llamativo, breve descripción sobre cursos frontend. Detalles claros y directos.',
  pageDescription:
    'En este primer desafío tendrás que maquetar una pequeña tarjeta con un código QR donde podrás practicar, entre otras propiedades:',
  skills: ['Margin', 'Padding', 'Border radius', 'Imágenes', 'Fuentes', 'Background-color'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/qr-code.jpg',
  link: 'https://github.com/AprendeFrontend/qr-code-component/archive/refs/heads/main.zip',
  level: LEVELS.TRAINEE,
  technology: TECHNOLOGIES.HTML_CSS,
  color: '--trainee'
};

const CREDIT_CARDS = {
  id: '9c7e8f34-2bdf-49e9-b2d6-6e48fc72db73',
  name: 'Credit Cards Display',
  headerDescription:
    'Diseño de tres tarjetas de crédito estilizadas: degradados vivos, disposición horizontal, fondo claro, logotipo, titular y número destacados.',
  pageDescription:
    'En este desafío tendrás que maquetar 3 tarjetas de crédito donde sólo tienes disponible el logo de cada tarjeta, entre otras propiedades:',
  skills: ['Position', 'Degradados', 'Imágenes', 'Fuentes'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/cards.jpg',
  link: 'https://github.com/AprendeFrontend/credit-cards-display/archive/refs/heads/main.zip',
  level: LEVELS.TRAINEE,
  technology: TECHNOLOGIES.HTML_CSS,
  color: '--trainee'
};

const PROFILE_CARD = {
  id: '29091f8a-012d-4a69-a4b7-fc4762bce0f5',
  name: 'Profile Card',
  headerDescription:
    'Tarjeta de perfil moderna y minimalista, diseñada para resaltar información clave del usuario como nombre, profesión y estadísticas.',
  pageDescription: 'En este desafío tendrás que maquetar una tarjeta de usuario donde podrás practicar, entre otras propiedades:',
  skills: ['Margin', 'Padding', 'Border radius', 'Imágenes', 'Fuentes', 'Degradados'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso position.'],
  image: '/assets/images/challenges/profile-card.jpg',
  link: 'https://github.com/AprendeFrontend/profile-card/archive/refs/heads/main.zip',
  level: LEVELS.TRAINEE,
  technology: TECHNOLOGIES.HTML_CSS,
  color: '--trainee'
};

const PRODUCT_CARD = {
  id: '321b2fbb-aec8-43d5-9526-5ae14072a312',
  name: 'Product card',
  headerDescription:
    'Diseño profesional de tarjetas de producto: claro, atractivo y optimizado para móvil y escritorio, garantizando consistencia visual.',
  pageDescription: 'En este desafío tendrás que maquetar una tarjeta de producto donde podrás practicar, entre otras cosas:',
  skills: ['Picture', 'Border radius', 'Imágenes', 'Fuentes'],
  suggestions: [
    'Usar picture en lugar de background-image para la imagen del producto',
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso position.'],
  image: '/assets/images/challenges/product-card.jpg',
  link: 'https://github.com/AprendeFrontend/product-card/archive/refs/heads/main.zip',
  level: LEVELS.JUNIOR,
  technology: TECHNOLOGIES.HTML_CSS,
  color: '--junior'
};

const PRICE_TABLES = {
  id: '4b7a9699-1d7f-484e-9eb7-7bddd6018496',
  name: 'Price Tables',
  headerDescription:
    'Diseño moderno de tablas de precios: limpio, claro y comparativo. Elementos visuales guían al usuario a elegir la mejor opción.',
  pageDescription: 'En este desafío tendrás que maquetar unas tablas de precios donde podrás practicar, entre otras cosas:',
  skills: ['Position', 'Border radius', 'Imágenes', 'Fuentes', 'Flex', 'Reutilización de código'],
  suggestions: ['Variables CSS para guardar datos que repitas.', 'Importar las fuentes en el HTML y no en el CSS'],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.'],
  image: '/assets/images/challenges/price-tables.jpg',
  link: 'https://github.com/AprendeFrontend/price-tables/archive/refs/heads/main.zip',
  level: LEVELS.JUNIOR,
  technology: TECHNOLOGIES.HTML_CSS,
  color: '--junior'
};

const RESPONSIVE_HERO = {
  id: '034fe4ee-8f51-4e3b-a0fa-03408bc8046f',
  name: 'Responsive hero',
  headerDescription:
    'Sección web moderna y profesional: fondo de bosque oscuro para tranquilidad, esfera de vidrio central para un toque futurista y llamativo.',
  pageDescription: 'En este desafío tendrás que maquetar un hero responsive donde podrás practicar, entre otras cosas:',
  skills: ['Position', 'Flex', 'Background-image', 'Pseudoelementos', 'Diseño responsive'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.'],
  image: '/assets/images/challenges/responsive-hero.jpg',
  link: 'https://github.com/AprendeFrontend/responsive-hero/archive/refs/heads/main.zip',
  level: LEVELS.JUNIOR,
  technology: TECHNOLOGIES.HTML_CSS,
  color: '--junior'
};

const SMARTWATCH_INTERFACE = {
  id: 'd7f9c8ab-1f5b-45da-9ae3-f8b2e3286b7c',
  name: 'Smartwatch Interface',
  headerDescription:
    'Interfaz minimalista para smartwatch: cuadrícula con íconos de deportes, oxígeno, llamadas, caídas y carga. Pantalla central clara y funcional.',
  pageDescription:
    'En este primer desafío tendrás que maquetar una pequeña tarjeta con un código QR donde podrás practicar, entre otras propiedades:',
  skills: ['Margin', 'Padding', 'Border radius', 'Imágenes', 'Fuentes', 'Background-color'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/bento-grid.jpg',
  link: 'https://github.com/AprendeFrontend/smartwatch-interface/archive/refs/heads/main.zip',
  level: LEVELS.MIDDLE,
  technology: TECHNOLOGIES.HTML_CSS,
  color: '--middle'
};

export { CREDIT_CARDS, PRICE_TABLES, PRODUCT_CARD, PROFILE_CARD, QR_CODE_COMPONENT, RESPONSIVE_HERO, SMARTWATCH_INTERFACE };
