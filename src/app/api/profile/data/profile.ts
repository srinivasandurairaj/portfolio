import { certifications } from "./certification";
import { workExperiences } from "./work-experiences";
import { stack } from "./stack";

export const profileData = {
  name: "Srinivasan Durairaj",
  role: "Full Stack Developer",
  location: "London, United Kingdom",
  workStatus: "Available for work",
  emailAddress: "mailtosrinivasandurairaj@gmail.com",
  linkedInProfile: "https://www.linkedin.com/in/srinivasan-durairaj-531727198/",
  aboutMe: `Web Developer with over 8+ years of industry experience specializing in building scalable, userfocused web applications. Since 2016, I have been crafting digital experiences across a variety of platforms and frameworks. I am a self-taught, self-motivated professional with a passion for problemsolving, clean code, and intuitive design. Currently working as a Senior Developer at Apexon, I focus on delivering high-performance, maintainable front-end and full-stack solutions. I have a strong eye for usability and user experience, combining design sensibility with technical expertise to create seamless digital products. Core Skills & Technologies. React.js, Next.js, Node.js, Express.js, MongoDB, SQL, JavaScript, HTML5, CSS3, REST APIs, GraphQL, Git, Agile methodologies.`,
  workExperiences,
  stack,
  certifications,
  footerText: `Designed with ❤️ and 🧠.`,
  footerCopyright: `© Copyright ${new Date().getFullYear()}.`,
};
