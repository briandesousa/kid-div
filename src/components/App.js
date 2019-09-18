import React, { useState } from 'react';
import styles from './App.css';

export default function App() {
  const [title] = useState('Kid Div : Investment and dividend tracking for kids');
  return (
    <main>
      <header className={styles.header}>
        <img src={'https://via.placeholder.com/1000x100/ccc?text=' + title} />
      </header>
      <section className={styles.heroSection}>
        Hero
      </section>
      <section className={styles.contentSection}>
        Content
      </section>
      <aside className={styles.sidebar}>
        Sidebar
      </aside>
      <footer className={styles.footer}>
        Footer
      </footer>
    </main>
  );
}