export const initialState = {
  name: "",
  role: "",
  location: "",
  workStatus: "",
  emailAddress: "",
  linkedInProfile: "",
  aboutMe: "",
  workExperiences: [
    {
      location: "",
      organisation: "",
      role: "",
      period: "",
      project: [
        {
          projectTitle: "",
          projectDescription: "",
          responsiblites: [],
        },
      ],
    },
  ],
  stack: [],
  certifications: [{ name: "", issuer: "" }],
  footerText: "",
  footerCopyright: "",
};
