import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Mash Room</title>
        <meta name="title" content="Mash Room" />
        <meta
          name="description"
          content="Zanurz sie w Mash Room - Odjazdowe Nocne Mashynowanie!"
        />

        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
