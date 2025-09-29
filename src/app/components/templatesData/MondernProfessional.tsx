import { cvType } from "@/app/types/cvType";

type ModernProfessionalProps = {
  cv: cvType;
};

export default function ModernProfessional({ cv }: ModernProfessionalProps) {
  return (
    <div
      id="cv-preview"
      className="max-w-4xl mx-auto bg-white text-gray-900 font-sans shadow-md grid grid-cols-3"
      style={{ lineHeight: 1.6 }}
    >
      {/* Sidebar */}
      <aside className="col-span-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-2">{cv.header.fullname}</h1>
        <p className="text-sm text-gray-700 mb-4">
          {cv.header.email} <br />
          {cv.header.phoneNumber} <br />
          {cv.header.location} <br />
          {cv.header.url}
        </p>

        {cv.skills && cv.skills.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-b mb-2">Skills</h2>
            <ul className="list-disc list-inside text-sm">
              {cv.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>
        )}

        {cv.languages && cv.languages.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-b mb-2">Languages</h2>
            <ul className="list-disc list-inside text-sm">
              {cv.languages.map((l, i) => (
                <li key={i}>
                  {l.name} {l.proficiency && `(${l.proficiency})`}
                </li>
              ))}
            </ul>
          </section>
        )}
                {/* Interests */}
        {cv.interests && cv.interests.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-b mb-2">Interests</h2>
            <ul className="list-disc list-inside text-sm">
              {cv.interests.map((interest, i) => (
                <li key={i}>{interest}</li>
              ))}
            </ul>
          </section>
        )}
      </aside>

      {/* Main content */}
      <main className="col-span-2 p-6">
        {cv.summary && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b mb-2">Summary</h2>
            <p>{cv.summary}</p>
          </section>
        )}

        {cv.workExperience && cv.workExperience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b mb-2">Work Experience</h2>
            {cv.workExperience.map((we, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-lg">
                  {we.title} — {we.company}
                </h3>
                <p className="text-sm text-gray-600">
                  {we.startDate} – {we.endDate || "Present"} {we.location && `| ${we.location}`}
                </p>
                <ul className="list-disc list-inside text-sm mt-1">
                  {we.bullets?.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {cv.education && cv.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b mb-2">Education</h2>
            {cv.education.map((ed, idx) => (
              <div key={idx} className="mb-2">
                <h3 className="font-semibold">
                  {ed.degree} — {ed.school}
                </h3>
                <p className="text-sm text-gray-600">
                  {ed.graduationYear} {ed.location && `| ${ed.location}`} {ed.gpa && `| GPA: ${ed.gpa}`}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {cv.projects && cv.projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b mb-2">Projects</h2>
            {cv.projects.map((proj, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-lg">
                  {proj.name} {proj.link && <a href={proj.link} className="text-blue-600 underline ml-2" target="_blank" rel="noreferrer">(Link)</a>}
                </h3>
                {proj.description && <p className="text-sm text-gray-600 mt-1">{proj.description}</p>}
                {proj.bullets && proj.bullets.length > 0 && (
                  <ul className="list-disc list-inside text-sm mt-1">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
