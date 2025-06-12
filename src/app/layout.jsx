import Navbar from "@/sections/navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.png"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Upward Marketing</title>
      </head>
      <body>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
