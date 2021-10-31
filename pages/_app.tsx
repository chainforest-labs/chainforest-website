import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "../layouts/GlobalLayout";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;
