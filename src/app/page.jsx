import Row from '@/components/row/Row';
import styles from './page.module.css';
import Header from '@/components/header/Header';
import Discord from '@/components/discord/Discord';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header
        title='Aprende Frontend'
        text='Aprender a programar es más efectivo cuando sigues un camino claro y estructurado. Aquí encontrarás retos diseñados para guiarte paso a paso que pondrán a prueba tus habilidades'
        image='/assets/images/hero-home.svg'
      />
      <Row
        image='/assets/images/home-road.svg'
        title='Un Camino Claro hacia el Éxito'
        text='Olvídate del caos de aprender al azar. Aquí te guiamos con retos organizados de forma progresiva, dándote una ruta para que domines cada concepto antes de pasar al siguiente nivel.'
      />
      <Row
        className='row-content-reverse'
        image='/assets/images/home-programming.svg'
        title='Construye Proyectos Reales'
        text='Aprender es importante, pero construir es lo que marca la diferencia. Aquí encontrarás proyectos diseñados para simular situaciones reales'
      />
      <Row
        image='/assets/images/home-work.svg'
        title='Desarrolla Habilidades Técnicas'
        text='Aquí no se trata de hacer ejercicios sin sentido. Cada reto tiene un propósito claro, preparándote para resolver problemas reales y construir proyectos que realmente importen.'
      />
      <Discord />
    </div>
  );
}
