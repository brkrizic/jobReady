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
      <h1 className="text-3xl font-bold mb-6">CV Builder</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form on the left */}
        <div className="flex-1">
          <Form setCv={setCv} initialCv={initialCVState} />
        </div>

        {/* Preview on the right */}
        <div className="flex-1">
          <Preview cv={cv} />
        </div>
      </div>
    </section>
  );
}