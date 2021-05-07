import Head from "next/head";
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wallora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        This is header.
      </header>
      <main className={styles.main}>
        <h1 className="title">
          Welcome to <a href="https://wallora.com">Wallora.com!</a>
        </h1>
      </main>
      <footer className={styles.footer}>
        This is footer
      </footer>
    </div>
  );
}
