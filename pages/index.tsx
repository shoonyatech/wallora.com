import Head from "next/head";

export default function Home() {
  return (
    <div className='container min-w-full grid-cols-1 grid-rows-3 h-screen'>
      <Head>
        <title>Wallora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-green-200 pl-10 pt-5 pb-5">
        This is header.
      </header>
      <main>
        <h1 className="bg-green-700 h-screen pl-10 mt-2 pt-10">
          Welcome to <a href="https://wallora.com">Wallora.com!</a>
        </h1>
      </main>
      <footer className="bg-blue-200 p-5 mt-2 ">
        This is footer
      </footer>
    </div>
  );
}