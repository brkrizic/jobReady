export default function TemplatesPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">CV Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded">Template 1</div>
        <div className="border p-4 rounded">Template 2</div>
      </div>
    </section>
  );
}