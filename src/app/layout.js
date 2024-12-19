// src/app/layout.js
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="beforeInteractive" />
      </head>
      <body>
        {children}
        <Script>
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}