"use client";

import { useContext, useState } from "react";
import { cvType } from "@/app/types/cvType";
import Minimalist from "../components/templatesData/Minimalist";
import ModernProfessional from "../components/templatesData/MondernProfessional";
import CreativeHighlight from "../components/templatesData/CreativeHighlite";
import { TemplateContext } from "../context/TemplateContext";



// Example CV data (you will pass real one from props or state)
const exampleCV: cvType = {
  header: {
    fullname: "John Doe",
    email: "john@example.com",
    phoneNumber: "+123 456 789",
    location: "New York, USA",
    url: "https://johndoe.dev",
  },
  summary: "Passionate frontend developer with 3+ years experience in React and TypeScript.",
  workExperience: [
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      startDate: "2022",
      endDate: "Present",
      location: "Remote",
      bullets: ["Built scalable React apps", "Worked with Tailwind and Next.js"],
    },
  ],
  education: [
    { degree: "BSc Computer Science", school: "NYU", graduationYear: "2021", location: "New York", gpa: "3.8" },
  ],
  skills: ["React", "TypeScript", "Tailwind", "Node.js"],
  projects: [
    { name: "Portfolio Website", description: "Personal site built with Next.js", link: "https://johndoe.dev" },
  ],
  certifications: [{ name: "AWS Developer Associate", issuer: "Amazon", year: "2023" }],
  languages: [{ name: "English", proficiency: "Native" }, { name: "Spanish", proficiency: "Intermediate" }],
  interests: ["Basketball", "Coding", "Traveling"],
};

export default function TemplatesTest() {
  const {template, setTemplate} = useContext(TemplateContext);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Choose Your CV Template</h1>

      {/* Template Switcher */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setTemplate("Minimalist")}
          className={`px-4 py-2 rounded-lg ${
            template === "Minimalist" ? "bg-blue-600 text-white" : "bg-gray-700"
          }`}
        >
          Minimalist
        </button>
        <button
          onClick={() => setTemplate("ModernProfessional")}
          className={`px-4 py-2 rounded-lg ${
            template === "ModernProfessional" ? "bg-blue-600 text-white" : "bg-gray-700"
          }`}
        >
          Modern Professional
        </button>
        <button
          onClick={() => setTemplate("CreativeHighlight")}
          className={`px-4 py-2 rounded-lg ${
            template === "CreativeHighlight" ? "bg-blue-600 text-white" : "bg-gray-700"
          }`}
        >
          Creative Highlight
        </button>
      </div>

      {/* Preview Area */}
      <div className=" p-6 shadow-lg rounded-lg">
        {template === "Minimalist" && <Minimalist cv={exampleCV} />}
        {template === "ModernProfessional" && <ModernProfessional cv={exampleCV} />}
        {template === "CreativeHighlight" && <CreativeHighlight cv={exampleCV} />}
      </div>
    </div>
  );
}
