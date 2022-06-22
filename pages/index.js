import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bolbhasha</title>
        <meta name="description" content="Bolbhasha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="m-5 text-xl flex justify-between">
        <div className="">BolBhasha</div>

        <ul className="flex">
          <li className="mx-5">Blog</li>
          <li>About</li>
        </ul>
      </nav>
      <main>
        <h1 className="">Hello world!</h1>
      </main>

      {/* <footer className={styles.footer}>Something</footer> */}
    </div>
  );
}
