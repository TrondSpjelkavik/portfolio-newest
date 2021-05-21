import GlobalLayout from "../components/Global/GlobalLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;
