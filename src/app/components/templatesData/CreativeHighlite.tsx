import { cvType } from "@/app/types/cvType";

type CreativeHighlightProps = {
  cv: cvType;
};

export default function CreativeHighlight({ cv }: CreativeHighlightProps) {
  return (
    <div
      id="cv-preview"
      className="max-w-3xl mx-auto p-8 bg-white text-gray-900 font-sans shadow-lg"
      style={{ lineHeight: 1.6 }}
    >
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-indigo-600">{cv.header.fullname}</h1>
        <p className="text-sm text-gray-700 mt-2">
          {cv.header.email} | {cv.header.phoneNumber}{" "}
          {cv.header.location && `| ${cv.header.location}`}
        </p>
        {cv.header.url && (
          <p className="text-sm text-indigo-500 underline">{cv.header.url}</p>
        )}
      </header>

      {/* Summary */}
      {cv.summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Profile</h2>
          <p>{cv.summary}</p>
        </section>
      )}

      {/* Work Experience */}
      {cv.workExperience && cv.workExperience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Experience</h2>
          <div className="space-y-6">
            {cv.workExperience.map((we, idx) => (
              <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-bold">
                  {we.title} — {we.company}
                </h3>
                <p className="text-sm text-gray-600">
                  {we.startDate} – {we.endDate || "Present"} {we.location && `| ${we.location}`}
                </p>
                {we.bullets && (
                  <ul className="list-disc list-inside mt-1">
                    {we.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {cv.projects && cv.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Projects</h2>
          {cv.projects.map((p, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-semibold">{p.name}</h3>
              {p.description && <p>{p.description}</p>}
              {p.link && <p className="text-sm text-indigo-500 underline">{p.link}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {cv.education && cv.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Education</h2>
          {cv.education.map((ed, idx) => (
            <div key={idx} className="mb-2">
              <h3 className="font-semibold">{ed.degree} — {ed.school}</h3>
              <p className="text-sm text-gray-600">
                {ed.graduationYear} {ed.location && `| ${ed.location}`} {ed.gpa && `| GPA: ${ed.gpa}`}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
