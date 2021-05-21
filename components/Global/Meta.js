import Head from "next/head";
import { useEffect } from "react";

function Meta({ title, keywords, description, icon, icon_apple }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-C1CR903WT0");
  });

  return (
    <Head>
      <meta charSet="utf-8" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-C1CR903WT0"
      ></script>
      <link rel="icon" href={icon}></link>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Rambla:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="apple-touch-icon" href={icon_apple}></link>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Trond Fuglseth Spjelkavik",
  keywords:
    "responsive web design, react, front end developer, portfolio, trond spjelkavik, javascript, golang, projects, trond fuglseth spjelkavik, IT, web developer, nextjs, next.js, next js",
  description:
    "Front-End developer portfolio for Trond Fuglseth Spjelkavik. Join my journey to become a fullstack developer. Portfolio includes projects with following languages: golang, javascript and nextjs and much more",
  icon: "/favicon.ico",
  icon_apple: "/favicon-apple.png",
};
export default Meta;
