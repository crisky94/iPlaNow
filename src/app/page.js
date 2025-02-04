import Events from "./components/Events";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <Events />
      </main>

    </div>
  );
}
