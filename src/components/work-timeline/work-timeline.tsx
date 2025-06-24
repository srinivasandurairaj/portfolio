import parse from "html-react-parser";

import { SubHeaders } from "../sub-headers";

import styles from "./work-timeline.module.css";

export const WorkTimeline = () => {
  const {
    timeLineContainer,
    role: roleStyles,
    projectDescription: projectDescriptionStyles,
    roleContainer,
    period: periodStyles,
    projectTitle: projectTitleStyles,
    projectDescriptionList,
  } = styles;

  const timeLineData = [
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
  ];

  return (
    <div>
      <SubHeaders title="Work and Project" subTitle="Timeline" />
      {timeLineData.map(({ role, period, project }, index) => (
        <div className={timeLineContainer} key={index}>
          <div className={roleContainer}>
            <h1 className={roleStyles}>{role}</h1>
            <h3 className={periodStyles}>{period}</h3>
          </div>
          {project.map(
            (
              {
                projectDescription = "",
                keyResponsiblities = [],
                projectTitle = [],
              },
              index
            ) => (
              <div key={index}>
                {projectTitle && (
                  <h3 className={projectTitleStyles}>{projectTitle}</h3>
                )}
                {projectDescription && (
                  <p className={projectDescriptionStyles}>
                    {parse(projectDescription)}
                  </p>
                )}
                {keyResponsiblities && (
                  <ul className={projectDescriptionList}>
                    {keyResponsiblities.map((list) => (
                      <li key={list}>{parse(list)}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};
