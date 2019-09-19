import React, { useState } from 'react';
import styles from './App.css';
import classNames from 'classnames';

export default function App() {
  const [content] = useState({
    title: 'Kid Div',
    tagline: 'Investment and dividend tracking for kids'
  });

  return (
    <main>
      <header>
        <h1>{content.title}</h1>
        <h2>{content.tagline}</h2>
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