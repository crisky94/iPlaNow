import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=calendar_add_on"
        />
        <link href="/dist/styles.css" rel="stylesheet"></link>
      </head>
      <body
      >
      <Navbar />

        <div className="p-4">{children}</div>
        <Footer />

      </body>
    </html>

  );
}
