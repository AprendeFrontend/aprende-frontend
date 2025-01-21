import Link from 'next/link';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/challenges'>Desafíos</Link>
        </li>
        <li>
          <Link href='/roadmap'>Roadmap</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
