import Landing from "../components/Landing";
import Head from "next/head"
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
      <link rel="shortcut icon" href="/favicon.svg" />
      <title>Sumit Kumar</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Sumit's personal portfolio" />
      </Head>
      <Landing/>
      <About/>
    </div>
  )
}
