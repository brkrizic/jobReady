import { cvType } from "../types/cvType";


export const initialCVState: cvType = {
  header: {
    fullname: "",
    phoneNumber: "",
    email: "",
    url: "",        // LinkedIn / GitHub / Portfolio
    location: "",   // city + country
  },
  summary: "",      // Professional summary

  workExperience: [
    {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      bullets: [""],
    },
  ],

  education: [
    {
      degree: "",
      school: "",
      location: "",
      graduationYear: "",
      gpa: "",
    },
  ],

  skills: [""],    // List of skills

  projects: [
    {
      name: "",
      description: "",
      link: "",
      bullets: [""],
    },
  ],

  certifications: [
    {
      name: "",
      issuer: "",
      year: "",
    },
  ],

  languages: [
    {
      name: "",
      proficiency: "",
    },
  ],

  interests: [""],
};
