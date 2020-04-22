import Link from 'next/link';

import styles from "./Header.scss";

export default ({ user = {} }) => (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a>All Stores</a>
        </Link>
        <Link href="/addstore">
          <a>Add your finding</a>
        </Link>

        <p className={styles.message}>Lets beat Covid-19</p>
      </nav>
    </header>
  );
  