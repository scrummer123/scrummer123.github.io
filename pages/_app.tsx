import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { FrontEndDataProvider } from "../providers/FrontEndDataProvider";

// custom styles needed for every page
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const CombinedProviders: React.FC<{ children: JSX.Element }> = ({
    children,
  }) => (
    <FrontEndDataProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </FrontEndDataProvider>
  );

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
      <CombinedProviders>
        <Component {...pageProps} />
      </CombinedProviders>
    </div>
  );
}

export default MyApp;
