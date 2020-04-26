import Link from 'next/link';

import styles from "./Header.scss";

export default ({ user = {} }) => (
    <header className={styles.header}>
      <div className="container">
 
        <nav>
          <ul>
            <li>
              <a href="/"><img className={styles.imglogo} src="/static/logo.svg" alt="logo" /> Shopper</a>
            </li>
            <li>
              <a href="/?missing=bread">
                Find
              </a>
            </li>
            <li>
              <Link href="/addstore">
                <a>Alert</a>
              </Link>
            </li>
            <li>
              <Link href="/missing">
                <a>Need an Item?</a>
              </Link>
            </li>
          </ul>
          <p className={styles.message}>Lets beat Covid-19</p>
        </nav>
      </div>
    </header>
  );
  