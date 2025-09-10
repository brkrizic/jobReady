"use client";

import { useState } from "react";
import Form from "../components/Form";
import Preview from "../components/Preview";
import { cvType } from "../types/cvType";
import { initialCVState } from "../data/initialCVState";

export default function Builder() {
  const [cv, setCv] = useState<cvType>(initialCVState);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">CV Builder</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form on the left */}
        <div className="flex-1">
          <Form setCv={setCv} initialCv={initialCVState} />
        </div>

        {/* Preview on the right */}
        <div className="flex-1">
          <div className="hidden lg:block bg-blue-900 fixed top-24 right-8 w-[500px] max-h-[80vh] overflow-y-auto border p-4 rounded shadow-lg z-50">
            <Preview cv={cv} />
          </div>
        </div>
      </div>
    </section>
  );
}
