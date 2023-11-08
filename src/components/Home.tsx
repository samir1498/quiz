import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="w-full flex-1 flex-col h-screen flex justify-center items-center p-2">
          <a
            tabIndex={0}
            href="/register"
            className="p-2 px-3 hover:shadow-xl bg-gray-900 text-white rounded-lg text-2xl"
          >
            Get Started
          </a>
        </main>
      </div>
    </>
  );
}
