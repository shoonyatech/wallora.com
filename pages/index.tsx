import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Wallora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-pink-300">
        <h1 className="title">
          Welcome to <a className="text-pink-700" href="https://wallora.com">Wallora.com!</a>
        </h1>
      </main>
    </div>
  );
}
