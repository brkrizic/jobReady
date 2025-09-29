import { cvType } from "@/app/types/cvType";


type MinimalistProps = {
  cv: cvType;
};

export default function Minimalist({ cv }: MinimalistProps) {
  return (
    <div
      id="cv-preview"
      className="max-w-3xl mx-auto p-6 bg-white text-gray-900 font-sans"
      style={{ lineHeight: 1.5 }}
    >
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{cv.header.fullname}</h1>
        <p className="text-sm text-gray-600">
          {cv.header.email} | {cv.header.phoneNumber} {cv.header.location && `| ${cv.header.location}`}
        </p>
        {cv.header.url && (
          <p className="text-sm text-blue-600 underline">{cv.header.url}</p>
        )}
      </header>

      {/* Summary */}
      {cv.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Summary</h2>
          <p>{cv.summary}</p>
        </section>
      )}

      {/* Work Experience */}
      {cv.workExperience && cv.workExperience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Work Experience</h2>
          {cv.workExperience.map((we, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold">
                {we.title} — {we.company}
              </h3>
              <p className="text-sm text-gray-600">
                {we.startDate} – {we.endDate || "Present"} {we.location && `| ${we.location}`}
              </p>
              {we.bullets && we.bullets.length > 0 && (
                <ul className="list-disc list-inside mt-1">
                  {we.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {cv.education && cv.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
          {cv.education.map((ed, idx) => (
            <div key={idx} className="mb-2">
              <h3 className="font-bold">{ed.degree} — {ed.school}</h3>
              <p className="text-sm text-gray-600">
                {ed.graduationYear} {ed.location && `| ${ed.location}`} {ed.gpa && `| GPA: ${ed.gpa}`}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {cv.skills && cv.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
          <p>{cv.skills.join(", ")}</p>
        </section>
      )}

      {/* Projects */}
      {cv.projects && cv.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Projects</h2>
          {cv.projects.map((p, idx) => (
            <div key={idx} className="mb-2">
              <h3 className="font-bold">{p.name}</h3>
              {p.description && <p>{p.description}</p>}
              {p.link && (
                <p className="text-sm text-blue-600 underline">{p.link}</p>
              )}
              {p.bullets && (
                <ul className="list-disc list-inside mt-1">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {cv.certifications && cv.certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Certifications</h2>
          {cv.certifications.map((c, idx) => (
            <p key={idx}>
              {c.name} {c.issuer && `| ${c.issuer}`} {c.year && `| ${c.year}`}
            </p>
          ))}
        </section>
      )}

      {/* Languages */}
      {cv.languages && cv.languages.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Languages</h2>
          <p>{cv.languages.map(l => `${l.name}${l.proficiency ? ` (${l.proficiency})` : ""}`).join(", ")}</p>
        </section>
      )}

      {/* Interests */}
      {cv.interests && cv.interests.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Interests</h2>
          <p>{cv.interests.join(", ")}</p>
        </section>
      )}
    </div>
  );
}
