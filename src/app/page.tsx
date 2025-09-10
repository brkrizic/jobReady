
export default function Home() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to JobReady</h1>
      <p className="text-gray-700 mb-6">
        Build your professional CV in minutes. No signup required.
      </p>
      <a
        href="/builder"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Start Building
      </a>
    </section>
  );
}
