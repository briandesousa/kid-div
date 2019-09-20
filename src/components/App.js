import React, { useState } from 'react';
import styles from './App.css';
import classNames from 'classnames';
import HeaderLogin from './HeaderLogin';

export default function App() {
  const [content] = useState({
    title: 'Kid Div',
    tagline: 'Investment and dividend tracking for kids'
  });

  const [user] = useState({
    loggedIn: true,
    userName: 'Brian'
  });

  return (
    <main>
      <div className={styles.wrapper}>
        <header>
          <h1>{content.title}</h1>
          <div className={styles.buttonBar}>
            <HeaderLogin user={user} />
          </div>
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