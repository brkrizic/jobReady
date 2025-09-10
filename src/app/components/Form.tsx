

export default function Form(){
    return (
        <div className="max-w-4xl mx-auto p-6 rounded shadow">
            {/* Header Section */}
            <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Header / Contact Info</h2>
            <input type="text" placeholder="Full Name" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="Email" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="Phone Number" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="LinkedIn / GitHub / Portfolio" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="Location" className="border p-2 mb-2 w-full rounded" />
            </section>

            {/* Summary Section */}
            <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Professional Summary</h2>
            <textarea placeholder="Write a short summary about yourself" className="border p-2 mb-2 w-full rounded" rows={4} />
            </section>

            {/* Work Experience Section */}
            <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Work Experience</h2>

            {/* Example Work Experience Item */}
            <div className="border p-4 mb-4 rounded">
                <input type="text" placeholder="Job Title" className="border p-2 mb-2 w-full rounded" />
                <input type="text" placeholder="Company" className="border p-2 mb-2 w-full rounded" />
                <input type="text" placeholder="Location" className="border p-2 mb-2 w-full rounded" />
                <div className="flex gap-2 mb-2">
                <input type="text" placeholder="Start Date" className="border p-2 w-1/2 rounded" />
                <input type="text" placeholder="End Date" className="border p-2 w-1/2 rounded" />
                </div>
            </div>

            {/* You can copy this block for more work experiences */}
            </section>

            {/* Education Section */}
            <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            <div className="border p-4 mb-4 rounded">
                <input type="text" placeholder="Degree" className="border p-2 mb-2 w-full rounded" />
                <input type="text" placeholder="School / University" className="border p-2 mb-2 w-full rounded" />
                <input type="text" placeholder="Location" className="border p-2 mb-2 w-full rounded" />
                <input type="text" placeholder="Graduation Year" className="border p-2 mb-2 w-full rounded" />
            </div>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            <input type="text" placeholder="Skill 1" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="Skill 2" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="Skill 3" className="border p-2 mb-2 w-full rounded" />
            </section>

            {/* Projects Section */}
            <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <div className="border p-4 mb-4 rounded">
                <input type="text" placeholder="Project Name" className="border p-2 mb-2 w-full rounded" />
                <textarea placeholder="Project Description" className="border p-2 mb-2 w-full rounded" rows={3} />
                <input type="text" placeholder="Project Link" className="border p-2 mb-2 w-full rounded" />
            </div>
            </section>

            {/* Certifications Section */}
            <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Certifications</h2>
            <input type="text" placeholder="Certification Name" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="Issuer" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="Year" className="border p-2 mb-2 w-full rounded" />
            </section>

            {/* Languages Section */}
            <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Languages</h2>
            <input type="text" placeholder="Language" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="Proficiency" className="border p-2 mb-2 w-full rounded" />
            </section>

            {/* Interests Section */}
            <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Interests</h2>
            <input type="text" placeholder="Interest 1" className="border p-2 mb-2 w-full rounded" />
            <input type="text" placeholder="Interest 2" className="border p-2 mb-2 w-full rounded" />
            </section>
        </div>
    );

}