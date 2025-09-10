"use client";

import Form from "../components/Form";
import Preview from "../components/Preview";

export default function Builder() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">CV Builder</h1>
      <Form />
      <Preview />
    </section>
  );
}