import Navbar from "./components/Navbar";
import Footer  from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <h1 className="text-center">iPlaNow</h1>
      </main>
      <Footer/>
    </div>
  );
}
