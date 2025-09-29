"use client";

import { useContext, useEffect, useState } from "react";
import Form from "../components/Form";
import Preview from "../components/Preview";
import { cvType } from "../types/cvType";
import { initialCVState } from "../data/initialCVState";
import { useScreenSize } from "../hook/useScreenSize";
import { TemplateContext } from "../context/TemplateContext";

export default function Builder() {
  const [cv, setCv] = useState<cvType>(initialCVState);

  const { template } = useContext(TemplateContext);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">CV Builder</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form on the left */}
        <div className="flex-1">
          <Form setCv={setCv} initialCv={initialCVState} />
        </div>

        {/* Preview on the right */}
        <div className="hidden lg:block">
          <div
            className="bg-blue-900 overflow-y-auto border p-3 rounded shadow-lg sticky top-8"
            style={{
              width: 600,                   // comfortable demo width
              height: "80vh",               // almost full height
              minWidth: 500,                // don’t shrink too much
            }}
          >
            <Preview cv={cv} template={template} />
          </div>
        </div>
      </div>
    </section>
  );
}
