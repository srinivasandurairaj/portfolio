import nextConfig from "../../../next.config";

export const initialState = {
  name: "Srinivasan Durairaj",
  role: "Full Stack Developer",
  location: "London, United Kingdom",
  workStatus: "Available for work",
  emailAddress: "mailtosrinivasandurairaj@gmail.com",
  linkedInProfile: "https://www.linkedin.com/in/srinivasan-durairaj-531727198/",
  aboutMe: `Web Developer with 8+ years of industry experience specializing in building scalable, userfocused web applications. Since 2016, I have been crafting digital experiences across a variety of platforms and frameworks. I am a self-taught, self-motivated professional with a passion for problemsolving, clean code, and intuitive design. Currently working as a Senior Developer at Apexon, I focus on delivering high-performance, maintainable front-end and full-stack solutions. I have a strong eye for usability and user experience, combining design sensibility with technical expertise to create seamless digital products. Core Skills & Technologies. React.js, Next.js, Node.js, Express.js, MongoDB, SQL, JavaScript, HTML5, CSS3, REST APIs, GraphQL, Git, Agile methodologies.`,
  workExperiences: [
    {
      location: "London",
      organisation: `Goldman Sachs - Apexon's Client`,
      role: "Senior Developer at Apexon",
      period: "April 2022 - Present",
      project: [
        {
          projectTitle: `Cascade - Revamping classic Goldman Sachs Asset Management Website`,
          projectDescription: `As a Senior Developer, I play a pivotal role in modernizing the legacy Goldman Sachs Asset
Management website, transforming it into a high-performance, responsive, and scalable
platform that aligns with current industry standards. I collaborate closely with cross-functional
teams-including design, product, and backend engineering-to completely redesign and
rebuild the site using modern technologies and best-in-class UI/UX practices.`,
          responsiblites: [
            `Collaborate with UI/UX designers, backend engineers, and product managers to deliver an
intuitive and seamless user experience.`,
            `Develop reusable components and modular architecture using NextJs, ensuring
maintainability and scalability.`,
            `Implement server-side rendering (SSR) and static site generation (SSG) using NextJs to
enhance SEO and page load speeds.`,
            `Migrate legacy codebase to modern JavaScript (ES6+) and introduce best practices such as
code-splitting, lazy loading, and state management.`,
            `Implemented automated testing strategies to ensure code quality and reliability.`,
            `Conduct code reviews, mentor junior developers, and enforce coding standards across the
team.`,
          ],
        },
      ],
    },
    {
      location: "London",
      organisation: "J.P.Morgan Chase",
      role: "Associate Software Engineer",
      period: "October 2021 - April 2022",
      project: [
        {
          projectTitle: "Clearing Data Analytics",
          projectDescription: `Clearing Data Analytics is a project which showcases a portfolio viewer of the client's risk position and
also other trade instrument data. As a front-end engineer, my responsibility was to develop, maintain,
and fix bugs in the application.`,
          location: "London",
          organisation: "J.P.Morgan Chase",
        },
      ],
    },
    {
      location: "London",
      organisation: `Lloyds Bank - Wipro's Client`,
      role: "Senior Software Engineer at Wipro,",
      period: "April 2019 - October 2021",
      project: [
        {
          projectTitle: "Pre-population Loans Journey",
          projectDescription: `Pre-population is an Internet Banking journey and this feature is developed in order to enhance the
user experience for the customers who are trying to apply for a loan online. In the Pre-population
journey, the user's input fields will be pre-populated based on the input given by the user in the thirdparty sites. We collect the data from the third-party sites and we store it in our database and when
the customer enters our loans journey based on a token that we obtain from the third-party sites, we
fetch the details of the customer and pre-populate them.`,
        },
        {
          projectTitle: "Pre-approval Loans Journey",
          projectDescription: `Pre-approval preposition is an enhancement on top of the pre-population journey. In this journey, we
pre-approve the loan for the customer who is trying to apply for a loan online based on his/her credit
score. This feature enhances the user experience where the customer will be sanctioned loan just by
few clicks.`,
        },
        {
          projectTitle: "Strong Customer Authentication",
          projectDescription: `Strong Customer Authentication is a new European regulatory requirement to reduce fraud and make
online and contactless offline payments more secure. In this project, I have built authenticator
templates like SMS OTP, Call challenge, and more, which are used to enable two-factor
authentication for the customers who are using internet banking services. I have also integrated these
templates with the live APIs.`,
        },
      ],
    },
  ],
  stack: [
    {
      name: "NextJs",
      image: `${nextConfig.basePath}/nextjs.jpeg`,
      framework: "Framework for ReactJs",
      alt: "NextJs Logo",
    },
    {
      name: "ReactJs",
      image: `${nextConfig.basePath}/reactjs.png`,
      framework: "Frontend Library",
      alt: "React Logo",
    },
    {
      name: "Redux",
      image: `${nextConfig.basePath}/redux.png`,
      framework: "state management",
      alt: "React Logo",
    },
    {
      name: "Docker",
      image: `${nextConfig.basePath}/docker.svg`,
      framework: "Containerization",
      alt: "React Logo",
    },
    {
      name: "GraphQL",
      image: `${nextConfig.basePath}/grapgql.png`,
      framework: "Data Query Language",
      alt: "React Logo",
    },
    {
      name: "TypeScript",
      image: `${nextConfig.basePath}/javascript.png`,
      framework: "Scripting Language",
      alt: "TypeScript Logo",
    },
    {
      name: "JavaScript",
      image: `${nextConfig.basePath}/typescript.png`,
      framework: "Scripting Language",
      alt: "TypeScript Logo",
    },
    {
      name: "Node.js",
      image: `${nextConfig.basePath}/nodejs.png`,
      framework: "JavaScript Runtime",
      alt: "Node.js Logo",
    },
    {
      name: "Express",
      image: `${nextConfig.basePath}/expressjs.png`,
      framework: "Middleware Framework",
      alt: "Express Logo",
    },
    {
      name: "MongoDB",
      image: `${nextConfig.basePath}/mongodb.svg`,
      framework: "Framework",
      alt: "mongodb",
    },
    {
      name: "Git",
      image: `${nextConfig.basePath}/git.png`,
      framework: "Source Control",
      alt: "git",
    },
    {
      name: "CI CD",
      image: `${nextConfig.basePath}/cicd.jpg`,
      framework: "Source Control Pipeline",
      alt: "git",
    },
  ],
  certifications: [
    {
      name: "Full Stack Developer",
      issuer: "NIIT",
    },
    {
      name: "Business English Certificate",
      issuer: "Cambridge University",
    },
  ],
  footerCopyright: `© Copyright ${new Date().getFullYear()}.`,
};
