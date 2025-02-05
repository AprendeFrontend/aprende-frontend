import { LEVELS } from '../levels';
import { TECHNOLOGIES } from '../technologies';

const BLACK_PLATE = {
  id: '96882f60-4145-4f81-901a-e6ad8d108f44',
  name: 'Black Plate',
  headerDescription:
    'Diseño elegante: interfaz oscura con detalles dorados, ideal para restaurantes gourmet. Dos secciones principales para navegación intuitiva.',
  pageDescription:
    'En este primer desafío tendrás que maquetar una pequeña tarjeta con un código QR donde podrás practicar, entre otras propiedades:',
  skills: ['Margin', 'Padding', 'Border radius', 'Imágenes', 'Fuentes', 'Background-color'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/black-plate.jpg',
  requirements: 'Hazlo Bien',
  level: LEVELS.MIDDLE,
  technology: TECHNOLOGIES.JAVASCRIPT,
  color: '--middle'
};

const SIMPLE_PASSWORD_GENERATOR = {
  id: '123abc45-def6-7890-gh12-ijklmnop3456',
  name: 'Simple Password Generator',
  headerDescription:
    'Interfaz moderna para generar contraseñas: tonos oscuros con degradados morados, diseño funcional, profesional y visualmente atractivo.',
  pageDescription:
    'En este primer desafío tendrás que maquetar una pequeña tarjeta con un código QR donde podrás practicar, entre otras propiedades:',
  skills: ['Margin', 'Padding', 'Border radius', 'Imágenes', 'Fuentes', 'Background-color'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/simple-password-generator.jpg',
  requirements: 'Interfaz responsiva y generación de contraseñas seguras',
  level: LEVELS.TRAINEE,
  technology: TECHNOLOGIES.JAVASCRIPT,
  color: '--trainee'
};

const ADVANCED_PASSWORD_GENERATOR = {
  id: 'c8b9e234-77b4-4981-a63f-5b9f6d237fe8',
  name: 'Advanced Password Generator',
  headerDescription:
    'Generador de contraseñas avanzado con un control deslizante y opciones para incluir mayúsculas, minúsculas, números y símbolos.',
  pageDescription:
    'En este primer desafío tendrás que maquetar una pequeña tarjeta con un código QR donde podrás practicar, entre otras propiedades:',
  skills: ['Margin', 'Padding', 'Border radius', 'Imágenes', 'Fuentes', 'Background-color'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/advanced-password-generator.jpg',
  requirements: 'Interactividad avanzada y diseño adaptable',
  level: LEVELS.JUNIOR,
  technology: TECHNOLOGIES.JAVASCRIPT,
  color: '--junior'
};

const GUESS_THE_NUMBER = {
  id: '6a7bcf01-d912-482f-8d35-b2e915c78902',
  name: 'Guess the Number',
  headerDescription:
    'Interfaz de juego interactivo: fondo geométrico claro, tarjeta central oscura, título "GUESS THE NUMBER" y números interactivos destacados.',
  pageDescription:
    'En este primer desafío tendrás que maquetar una pequeña tarjeta con un código QR donde podrás practicar, entre otras propiedades:',
  skills: ['Margin', 'Padding', 'Border radius', 'Imágenes', 'Fuentes', 'Background-color'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/guess-the-number.jpg',
  requirements: 'Interfaz responsiva y lógica básica de interacción',
  level: LEVELS.TRAINEE,
  technology: TECHNOLOGIES.JAVASCRIPT,
  color: '--trainee'
};

export { ADVANCED_PASSWORD_GENERATOR, BLACK_PLATE, GUESS_THE_NUMBER, SIMPLE_PASSWORD_GENERATOR };
