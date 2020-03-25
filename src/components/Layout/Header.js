import Link from 'next/link';

export default ({ user = {} }) => (
    <header className="Header">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <Link href="/contact">
          <a>Contact us</a>
        </Link>
        <Link href="/session">
          <a>Stores</a>
        </Link>
      </nav>
    </header>
  );
  