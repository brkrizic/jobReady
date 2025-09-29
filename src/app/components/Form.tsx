import { Dispatch, SetStateAction, useState } from "react";
import { cvType } from "../types/cvType";

type FormProps = {
  setCv: Dispatch<SetStateAction<cvType>>;
  initialCv: cvType;
};

export default function Form({ setCv, initialCv }: FormProps) {
  const [cv, setLocalCv] = useState<cvType>(initialCv);

  const updateCv = (updated: cvType) => {
    setLocalCv(updated);
    setCv(updated);
  };

  // Generic header handler
  const handleHeaderChange = (field: keyof cvType["header"], value: string) => {
    updateCv({ ...cv, header: { ...cv.header, [field]: value } });
  };

  // Generic handler for summary
  const handleSummaryChange = (value: string) =>
    updateCv({ ...cv, summary: value });

  return (
    <div className="max-w-4xl mx-auto p-6 rounded shadow space-y-6">
      {/* Header Section */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Header / Contact Info</h2>
        {Object.entries(cv.header).map(([key, value]) => (
          <input
            key={key}
            type="text"
            placeholder={key.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase())}
            value={value ?? ""}
            onChange={(e) =>
              handleHeaderChange(key as keyof cvType["header"], e.target.value)
            }
            className="border p-2 mb-2 w-full rounded"
          />
        ))}
      </section>

      {/* Summary Section */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Professional Summary</h2>
        <textarea
          placeholder="Write a short summary about yourself"
          value={cv.summary ?? ""}
          onChange={(e) => handleSummaryChange(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
          rows={4}
        />
      </section>

      {/* Work Experience */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
        {cv.workExperience?.map((we, idx) => (
          <div key={idx} className="border p-4 mb-4 rounded space-y-2">
            <input
              type="text"
              placeholder="Job Title"
              value={we.title}
              onChange={(e) => {
                const updated = [...(cv.workExperience ?? [])];
                updated[idx].title = e.target.value;
                updateCv({ ...cv, workExperience: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Company"
              value={we.company}
              onChange={(e) => {
                const updated = [...(cv.workExperience ?? [])];
                updated[idx].company = e.target.value;
                updateCv({ ...cv, workExperience: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={we.location ?? ""}
              onChange={(e) => {
                const updated = [...(cv.workExperience ?? [])];
                updated[idx].location = e.target.value;
                updateCv({ ...cv, workExperience: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Start Date"
                value={we.startDate ?? ""}
                onChange={(e) => {
                  const updated = [...(cv.workExperience ?? [])];
                  updated[idx].startDate = e.target.value;
                  updateCv({ ...cv, workExperience: updated });
                }}
                className="border p-2 w-1/2 rounded"
              />
              <input
                type="text"
                placeholder="End Date"
                value={we.endDate ?? ""}
                onChange={(e) => {
                  const updated = [...(cv.workExperience ?? [])];
                  updated[idx].endDate = e.target.value;
                  updateCv({ ...cv, workExperience: updated });
                }}
                className="border p-2 w-1/2 rounded"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const updated = (cv.workExperience ?? []).filter((_, i) => i !== idx);
                updateCv({
                  ...cv,
                  workExperience: updated.length ? updated : undefined,
                });
              }}
              className="px-2 py-1 text-sm rounded bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const updated = [...(cv.workExperience ?? [])];
            updated.push({
              title: "",
              company: "",
              location: "",
              startDate: "",
              endDate: "",
              bullets: [""],
            });
            updateCv({ ...cv, workExperience: updated });
          }}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          + Add Work Experience
        </button>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        {cv.education?.map((ed, idx) => (
          <div key={idx} className="border p-4 mb-4 rounded space-y-2">
            <input
              type="text"
              placeholder="Degree"
              value={ed.degree}
              onChange={(e) => {
                const updated = [...(cv.education ?? [])];
                updated[idx].degree = e.target.value;
                updateCv({ ...cv, education: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="School / University"
              value={ed.school}
              onChange={(e) => {
                const updated = [...(cv.education ?? [])];
                updated[idx].school = e.target.value;
                updateCv({ ...cv, education: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={ed.location ?? ""}
              onChange={(e) => {
                const updated = [...(cv.education ?? [])];
                updated[idx].location = e.target.value;
                updateCv({ ...cv, education: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Graduation Year"
              value={ed.graduationYear ?? ""}
              onChange={(e) => {
                const updated = [...(cv.education ?? [])];
                updated[idx].graduationYear = e.target.value;
                updateCv({ ...cv, education: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <button
              type="button"
              onClick={() => {
                const updated = (cv.education ?? []).filter((_, i) => i !== idx);
                updateCv({ ...cv, education: updated.length ? updated : undefined });
              }}
              className="px-2 py-1 text-sm rounded bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const updated = [...(cv.education ?? [])];
            updated.push({
              degree: "",
              school: "",
              location: "",
              graduationYear: "",
              gpa: "",
            });
            updateCv({ ...cv, education: updated });
          }}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          + Add Education
        </button>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        {cv.skills?.map((skill, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder={`Skill ${idx + 1}`}
              value={skill}
              onChange={(e) => {
                const updated = [...(cv.skills ?? [])];
                updated[idx] = e.target.value;
                updateCv({ ...cv, skills: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <button
              type="button"
              onClick={() => {
                const updated = (cv.skills ?? []).filter((_, i) => i !== idx);
                updateCv({ ...cv, skills: updated.length ? updated : undefined });
              }}
              className="px-2 py-1 text-sm rounded bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const updated = [...(cv.skills ?? []), ""];
            updateCv({ ...cv, skills: updated });
          }}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          + Add Skill
        </button>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        {cv.projects?.map((proj, idx) => (
          <div key={idx} className="border p-4 mb-4 rounded space-y-2">
            <input
              type="text"
              placeholder="Project Name"
              value={proj.name}
              onChange={(e) => {
                const updated = [...(cv.projects ?? [])];
                updated[idx].name = e.target.value;
                updateCv({ ...cv, projects: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <textarea
              placeholder="Project Description"
              value={proj.description ?? ""}
              onChange={(e) => {
                const updated = [...(cv.projects ?? [])];
                updated[idx].description = e.target.value;
                updateCv({ ...cv, projects: updated });
              }}
              className="border p-2 w-full rounded"
              rows={3}
            />
            <input
              type="text"
              placeholder="Project Link"
              value={proj.link ?? ""}
              onChange={(e) => {
                const updated = [...(cv.projects ?? [])];
                updated[idx].link = e.target.value;
                updateCv({ ...cv, projects: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <button
              type="button"
              onClick={() => {
                const updated = (cv.projects ?? []).filter((_, i) => i !== idx);
                updateCv({ ...cv, projects: updated.length ? updated : undefined });
              }}
              className="px-2 py-1 text-sm rounded bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const updated = [...(cv.projects ?? [])];
            updated.push({ name: "", description: "", link: "", bullets: [""] });
            updateCv({ ...cv, projects: updated });
          }}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          + Add Project
        </button>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Certifications</h2>
        {cv.certifications?.map((cert, idx) => (
          <div key={idx} className="space-y-2">
            <input
              type="text"
              placeholder="Certification Name"
              value={cert.name}
              onChange={(e) => {
                const updated = [...(cv.certifications ?? [])];
                updated[idx].name = e.target.value;
                updateCv({ ...cv, certifications: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Issuer"
              value={cert.issuer ?? ""}
              onChange={(e) => {
                const updated = [...(cv.certifications ?? [])];
                updated[idx].issuer = e.target.value;
                updateCv({ ...cv, certifications: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Year"
              value={cert.year ?? ""}
              onChange={(e) => {
                const updated = [...(cv.certifications ?? [])];
                updated[idx].year = e.target.value;
                updateCv({ ...cv, certifications: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <button
              type="button"
              onClick={() => {
                const updated = (cv.certifications ?? []).filter((_, i) => i !== idx);
                updateCv({
                  ...cv,
                  certifications: updated.length ? updated : undefined,
                });
              }}
              className="px-2 py-1 text-sm rounded bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const updated = [...(cv.certifications ?? [])];
            updated.push({ name: "", issuer: "", year: "" });
            updateCv({ ...cv, certifications: updated });
          }}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          + Add Certification
        </button>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Languages</h2>
        {cv.languages?.map((lang, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Language"
              value={lang.name}
              onChange={(e) => {
                const updated = [...(cv.languages ?? [])];
                updated[idx].name = e.target.value;
                updateCv({ ...cv, languages: updated });
              }}
              className="border p-2 w-1/2 rounded"
            />
            <input
              type="text"
              placeholder="Proficiency"
              value={lang.proficiency ?? ""}
              onChange={(e) => {
                const updated = [...(cv.languages ?? [])];
                updated[idx].proficiency = e.target.value;
                updateCv({ ...cv, languages: updated });
              }}
              className="border p-2 w-1/2 rounded"
            />
            <button
              type="button"
              onClick={() => {
                const updated = (cv.languages ?? []).filter((_, i) => i !== idx);
                updateCv({ ...cv, languages: updated.length ? updated : undefined });
              }}
              className="px-2 py-1 text-sm rounded bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const updated = [...(cv.languages ?? [])];
            updated.push({ name: "", proficiency: "" });
            updateCv({ ...cv, languages: updated });
          }}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          + Add Language
        </button>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Interests</h2>
        {cv.interests?.map((interest, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder={`Interest ${idx + 1}`}
              value={interest}
              onChange={(e) => {
                const updated = [...(cv.interests ?? [])];
                updated[idx] = e.target.value;
                updateCv({ ...cv, interests: updated });
              }}
              className="border p-2 w-full rounded"
            />
            <button
              type="button"
              onClick={() => {
                const updated = (cv.interests ?? []).filter((_, i) => i !== idx);
                updateCv({ ...cv, interests: updated.length ? updated : undefined });
              }}
              className="px-2 py-1 text-sm rounded bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const updated = [...(cv.interests ?? []), ""];
            updateCv({ ...cv, interests: updated });
          }}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          + Add Interest
        </button>
      </section>
    </div>
  );
}
