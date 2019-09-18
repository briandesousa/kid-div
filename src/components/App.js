import React, { useState } from 'react';
import styles from './App.css';
import classNames from 'classnames';

export default function App() {
  const [title] = useState('Kid Div : Investment and dividend tracking for kids');
  return (
    <main>
      <header>
        <h1>{title}</h1>
      </header>
      <div className={classNames(styles.flexContainer, styles.wrapper)}>
        <aside className={styles.sidebar}>
          Sidebar
        </aside>
        <section className={styles.content}>
          Content
        </section>
      </div>
      <footer>
        Footer
      </footer>
    </main>
  );
}