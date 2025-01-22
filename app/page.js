import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from "./components/Events";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Events />
      </main>
      <Footer />
    </div>
  );
}
