const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='/css/Layout.css' />
        <link rel='stylesheet' href='/css/RoundStat.css' />
        <link rel='stylesheet' href='/css/Profile.css' />
        <link rel='stylesheet' href='/css/style.css' />
        <script defer src='/js/script.js' />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};
