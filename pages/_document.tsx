import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>FutureMD</title>
          <meta
            name="description"
            content="A youth-led nonprofit organization with the goal to educate teens about life during and after medical school!"
          />
          <meta
            name="keywords"
            content="FutureMD, futuremd, Futuremd inc, Futuremd, nonprofit, medical education"
          />
          <meta name="og:title" content="FutureMD" />
          <meta
            name="og:description"
            content="A youth-led nonprofit organization with the goal to educate teens about life during and after medical school!"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FutureMD" />
          <meta
            name="twitter:description"
            content="A youth-led nonprofit organization with the goal to educate teens about life during and after medical school!"
          />
          <meta name="twitter:image" content="/meta.png" />
          <meta name="theme-color" content="#5C9CFF" />
          <link rel="shortcut icon" href="/logo.png" />
          <meta name="og:image" content="/meta.png" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.classList.add(theme);
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
