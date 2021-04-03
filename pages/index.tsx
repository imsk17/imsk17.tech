import Landing from "../components/Landing";
import Head from "next/head";
import About from "../components/About";
import Work from "../components/Work";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Ham from "../components/Hamburger";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Sumit Kumar (imsk17)</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home | Sumit's Personal Portfolio" />
      </Head>
      <Ham />
      <Landing />
      <About />
      <Work />
      <Tools />
      <Contact />
    </div>
  );
}
