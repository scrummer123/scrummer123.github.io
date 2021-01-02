import type { AppProps } from "next/app";
import Head from "next/head";

// My stuff
import { ThemeProvider } from "../providers/ThemeProvider";

// custom styles needed for every page
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Simons public portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link rel="stylesheet" href="css/index.css" />
        <link
          rel="preload"
          href="Fonts/Nunito-Bold.ttf"
          as="font"
          type="font/ttf"
        />
        <link
          rel="preload"
          href="Fonts/DaddyRewind-MVYAP.ttf"
          as="font"
          type="font/ttf"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
