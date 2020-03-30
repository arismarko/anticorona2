import Link from 'next/link';

export default ({ user = {} }) => (
    <header className="Header">
      <nav>
        <Link href="/">
          <a>Find an Item</a>
        </Link>
        <Link href="/about">
          <a>Add a store</a>
        </Link>
      </nav>
    </header>
  );
  