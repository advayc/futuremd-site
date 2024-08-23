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
          <meta name="author" content="FutureMD Inc." />
          <meta name="robots" content="index, follow" />
          <meta name="revisit-after" content="7 days" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="FutureMD" />
          <meta
            property="og:description"
            content="A youth-led nonprofit organization with the goal to educate teens about life during and after medical school!"
          />
          <meta property="og:url" content="https://yourwebsite.com" />
          <meta property="og:image" content="/meta.png" />
          <meta property="og:site_name" content="FutureMD" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FutureMD" />
          <meta
            name="twitter:description"
            content="A youth-led nonprofit organization with the goal to educate teens about life during and after medical school!"
          />
          <meta name="twitter:image" content="/meta.png" />
          <meta name="twitter:site" content="@your_twitter_handle" />
          <meta name="twitter:creator" content="@your_twitter_handle" />

          {/* Favicon and Theme */}
          <link rel="shortcut icon" href="/logo.png" />
          <meta name="theme-color" content="#5C9CFF" />
          
          {/* Additional Meta Tags */}
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="FutureMD" />
          <meta name="application-name" content="FutureMD" />
          <meta name="format-detection" content="telephone=no" />
          
          {/* Preconnect for Performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          
          {/* Custom Theme Script */}
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
