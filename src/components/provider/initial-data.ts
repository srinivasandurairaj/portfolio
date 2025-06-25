import nextConfig from "../../../next.config";

export const initialState = {
  name: "Srinivasan Durairaj",
  role: "Certified FullStack Developer",
  shortIntro:
    "A software engineer passionate about turning emerging technologies into scalable web experiences.",
  emailAddress: "mailtosrinivasandurairaj@gmail.com",
  linkedInProfile: "https://www.linkedin.com/in/srinivasan-durairaj-531727198/",
  github: "https://github.com/srinivasandurairaj",
  briefIntro:
    "I&apos;m a software engineer driven by a passion for crafting scalable web applications and harnessing emerging technologies to deliver innovative, high-impact solutions.",
  aboutMe: `Web Developer with 8+ years of industry experience specializing in building scalable, userfocused web applications. Since 2016, I have been crafting digital experiences across a variety of platforms and frameworks. I am a self-taught, self-motivated professional with a passion for problemsolving, clean code, and intuitive design. Currently working as a Senior Developer at Apexon, I focus on delivering high-performance, maintainable front-end and full-stack solutions. I have a strong eye for usability and user experience, combining design sensibility with technical expertise to create seamless digital products. Core Skills & Technologies. React.js, Next.js, Node.js, Express.js, MongoDB, SQL, JavaScript, HTML5, CSS3, REST APIs, GraphQL, Git, Agile methodologies.`,
  experience: [
    {
      quantity: "+8",
      description: "Years of Experience",
    },
    {
      quantity: "+6",
      description: "Completed Projects",
    },
    { quantity: "Many", description: "Happy Clients" },
  ],
  cardSections: [
    {
      title: "My Skill Stack",
      link: "/skill",
      target: "_self",
    },
    {
      title: "My Work Timelines and Projects",
      link: "/work",
      target: "_self",
    },
    {
      title: "Download my Resume",
      link: "/Srinivasan Resume.pdf",
      target: "_blank",
    },
  ],
  workExperiences: [
    {
      role: `Senior developer at Apexon`,
      period: `April 2022 - Present`,
      project: [
        {
          projectTitle: "",
          projectDescription: `As a Senior Developer, I played a key role in
          <span>modernizing</span> a leading Fintech
          firm’s outdated and underperforming marketing website, transforming it
          into a
          <span>
            high-performance, responsive, and scalable platform aligned with
            modern industry standards.
          </span>
          Partnering with cross-functional teams, including design, product, and
          backend engineering. I contributed to the end-to-end architecture and
          implementation of a complete site overhaul using modern technologies
          and industry-leading UI/UX practices, significantly improving
          <span>
            user experience, site performance, and operational efficiency.
          </span>`,
          keyResponsiblities: [],
        },
      ],
    },
    {
      role: `Associate Software Engineer at J.P.Morgan Chase`,
      period: `October 2021 - April 2022`,
      project: [
        {
          projectTitle: `Clearing Data Analytics`,
          projectDescription: `Clearing Data Analytics is a project that showcases a portfolio of
            the client&apos;s risk position and also other trade instrument
            data.`,
          keyResponsiblities: [
            `Spearheaded the development and optimization of a
            <span>
              high-performance analytics platform
            </span>
            designed to provide comprehensive visibility into client risk
            positions and trade instrument data.`,
            `Engineered scalable solutions to ensure
            <span>
              fast and reliable querying, filtering, and pivoting
            </span>
            of datasets containing
            <span>millions of records.</span>`,
            `Played a key role in
            <span>
              improving system performance and responsiveness
            </span>
            , significantly enhancing user experience for data analysts and
            business stakeholders.`,
            `Led end-to-end release management,
            <span>
              ensuring timely and smooth deployments
            </span>
            while maintaining platform stability and compliance with
            organizational standards.`,
          ],
        },
      ],
    },
    {
      role: "Senior Software Engineer at Wipro",
      period: "April 2019 - October 2021",
      project: [
        {
          projectTitle: "Pre-population Loans Journey",
          projectDescription: "",
          keyResponsiblities: [
            `Developed the Pre-Population feature to enhance the loan application
            experience by
            <span>pre-populating user information.</span>`,
            `Integrated with
            <span>third-party platforms</span> to securely
            collect and store user data based on tokens.`,
            `Enabled seamless data retrieval to pre-populate fields when users
            begin the loan journey,
            <span>
              reducing manual input and improving conversion rates.
            </span>`,
          ],
        },
        {
          projectTitle: `Strong Customer Authentication`,
          projectDescription: "",
          keyResponsiblities: [
            `Implemented <span>SCA</span> features in
            compliance with
            <span>
              European regulations to enhance payment security and reduce fraud.
            </span>`,
            `Developed and integrated authenticator templates such as SMS OTP and
            Call Challenge for
            <span>two-factor authentication.</span>`,
            `Integrated these templates with live APIs to support secure,
            <span>real-time customer verification</span>
            across internet banking channels.`,
          ],
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
      framework: "State management",
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
      framework: "Database",
      alt: "mongodb",
    },
    {
      name: "Git",
      image: `${nextConfig.basePath}/git.png`,
      framework: "Source Control",
      alt: "git",
    },
    {
      name: "CI / CD",
      image: `${nextConfig.basePath}/cicd.jpg`,
      framework: "Source Control Pipeline",
      alt: "git",
    },
  ],
  profileSummary: [
    {
      paragraph: `Web Developer with over <span>8+ years</span> of
          industry experience specializing in
          <span>
            building scalable, userfocused web applications.
          </span>
          Since 2016, I&apos;ve been crafting digital experiences across a
          variety of platforms and frameworks. I&apos;m a self-taught,
          self-motivated professional with a passion for problemsolving, clean
          code, and intuitive design.`,
    },
    {
      paragraph: `Currently working as a
          <span>Senior Developer at Apexon,</span> I focus
          on delivering high-performance, maintainable front-end and full-stack
          solutions. I have a strong eye for usability and user experience,
          combining design sensibility with technical expertise to create
          seamless digital products.`,
    },
  ],
};
