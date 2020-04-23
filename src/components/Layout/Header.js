import Link from 'next/link';

import styles from "./Header.scss";

export default ({ user = {} }) => (
    <header className={styles.header}>
      <div className="container">
        <nav>
          <a href="/?missing=bread">
            <a>All Stores</a>
          </a>
          <Link href="/addstore">
            <a>Add your finding</a>
          </Link>

          <p className={styles.message}>Lets beat Covid-19</p>
        </nav>
      </div>
    </header>
  );
  