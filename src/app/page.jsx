import Button from '@/components/button/Button';
import Discord from '@/components/discord/Discord';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Row from '@/components/row/Row';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Header
          title='Aprende Frontend GRATIS'
          text='Aprender a programar es más efectivo cuando sigues un camino claro y estructurado. Aquí encontrarás retos diseñados para guiarte paso a paso que pondrán a prueba tus habilidades'
          image='/assets/images/hero-home.svg'
        >
          <Link href='/challenges'>
            <Button className='button-primary button-hover'>Ver Desafíos</Button>
          </Link>
        </Header>
        <Row
          image='/assets/images/home-road.svg'
          title='Recibe feedback GRATIS'
          text='Corregiré tus desafíos en vivo y te daré consejos profesionales personalizados.Entrega tus desafíos y los corregiré en vivo, señalando errores, dándote consejos prácticos y explicándote cómo mejorar.'
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
      <Footer />
    </>
  );
}
