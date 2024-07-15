import Document, { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="FutureMD: A student-led nonprofit organization with the goal to educate teens about life during and after medical school!"
          />
          <meta
            name="keywords"
            content="FutureMD, doctor, medicine, MD, nonprofit, medical education"
          />
          <meta name="og:title" content="FutureMD" />
          <meta
            name="og:description"
            content="FutureMD: A student-led nonprofit organization with the goal to educate teens about life during and after medical school!"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FutureMD" />
          <meta
            name="twitter:description"
            content="FutureMD: A student-led nonprofit organization with the goal to educate teens about life during and after medical school!"
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
          <Analytics />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
