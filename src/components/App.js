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
      <div className={styles.wrapper}>
        <header>
          <button>Login</button>
          <h1>{content.title}</h1>
          <h2>{content.tagline}</h2>
        </header>
        <div className={classNames(styles.flexContainer)}>
          <aside className={styles.sidebar}>
            Sidebar
          </aside>
          <section className={styles.content}>
            Content
          </section>
        </div>
        <footer>
          <a href="https://github.com/briandesousa/kid-div" target="_blank" rel="noopener noreferrer">see on GitHub</a>
        </footer>
      </div>
    </main>
  );
}