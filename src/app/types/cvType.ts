export type cvType = {
  header: {
    fullname: string;
    phoneNumber: string;
    email: string;
    url?: string; // LinkedIn / GitHub / Portfolio URL
    location?: string; // city + country
  };
  summary?: string; // Professional summary / objective

  workExperience?: {
    title: string;           // Job title
    company: string;         // Company name
    location?: string;       // Optional location
    startDate: string;       // Month/Year
    endDate?: string;        // Month/Year or 'Present'
    bullets?: string[];      // Achievements / responsibilities
  }[];

  education?: {
    degree: string;          // e.g., BSc Computer Science
    school: string;          // School / University
    location?: string;
    graduationYear?: string;
    gpa?: string;            // Optional
  }[];

  skills?: string[];         // Technical & soft skills

  projects?: {
    name: string;
    description?: string;
    link?: string;           // GitHub / website
    bullets?: string[];
  }[];

  certifications?: {
    name: string;
    issuer?: string;
    year?: string;
  }[];

  languages?: {
    name: string;
    proficiency?: string;    // e.g., Native / Fluent / Intermediate
  }[];

  interests?: string[];       // Optional personal interests
};
