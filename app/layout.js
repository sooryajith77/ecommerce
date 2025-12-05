"use client";

import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>E-KART</title>
        <meta name="description" content="Base layout for Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
       <link rel="icon" href="/img1.svg" type="image/svg+xml" />

      </head>
      <body>
        <Provider store={store}>
          <Header />
          <main style={{ minHeight: "80vh", padding: "1rem" }}>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
