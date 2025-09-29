export type cvType = {
  header: {
    fullname: string;
    phoneNumber?: string;
    email: string;
    url?: string;       // optional
    location?: string;  // optional
  };
  summary?: string;

  workExperience?: {
    title: string;
    company: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    bullets?: string[];
  }[];

  education?: {
    degree: string;
    school: string;
    location?: string;
    graduationYear?: string;
    gpa?: string;
  }[];

  skills?: string[];

  projects?: {
    name: string;
    description?: string;
    link?: string;
    bullets?: string[];
  }[];

  certifications?: {
    name: string;
    issuer?: string;
    year?: string;
  }[];

  languages?: {
    name: string;
    proficiency?: string;
  }[];

  interests?: string[];
};
