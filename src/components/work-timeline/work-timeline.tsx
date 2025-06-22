import { SubHeaders } from "../sub-headers";

import styles from "./work-timeline.module.css";

export const WorkTimeline = () => {
  const {
    timeLineContainer,
    role,
    highlight,
    projectDescription,
    roleContainer,
    period,
    projectTitle,
    projectDescriptionList,
  } = styles;

  return (
    <div>
      <SubHeaders title="Work and Project" subTitle="Timeline" />

      <div className={timeLineContainer}>
        <div className={roleContainer}>
          <h1 className={role}>Senior developer at Apexon</h1>
          <h3 className={period}>April 2022 - Present</h3>
        </div>
        <p className={projectDescription}>
          As a Senior Developer, I played a key role in
          <span className={highlight}>modernizing</span> a leading Fintech
          firm’s outdated and underperforming marketing website, transforming it
          into a
          <span className={highlight}>
            high-performance, responsive, and scalable platform aligned with
            modern industry standards.
          </span>
          Partnering with cross-functional teams—including design, product, and
          backend engineering. I contributed to the end-to-end architecture and
          implementation of a complete site overhaul using modern technologies
          and industry-leading UI/UX practices, significantly improving user
          <span className={highlight}>
            experience, site performance, and operational efficiency.
          </span>
        </p>
      </div>

      <div className={timeLineContainer}>
        <div className={roleContainer}>
          <h1 className={role}>
            Associate Software Engineer at J.P.Morgan Chase
          </h1>
          <h3 className={period}>October 2021 - April 2022</h3>
          <h3 className={projectTitle}>Clearing Data Analytics</h3>
          <p className={projectDescription}>
            Clearing Data Analytics is a project that showcases a portfolio of
            the client&apos;s risk position and also other trade instrument
            data.
          </p>
        </div>

        <ul className={projectDescriptionList}>
          <li>
            Spearheaded the development and optimization of a
            <span className={highlight}>
              high-performance analytics platform
            </span>
            designed to provide comprehensive visibility into client risk
            positions and trade instrument data.
          </li>
          <li>
            Engineered scalable solutions to ensure
            <span className={highlight}>
              fast and reliable querying, filtering, and pivoting
            </span>
            of datasets containing
            <span className={highlight}>millions of records.</span>
          </li>
          <li>
            Played a key role in
            <span className={highlight}>
              improving system performance and responsiveness
            </span>
            , significantly enhancing user experience for data analysts and
            business stakeholders.
          </li>
          <li>
            Led end-to-end release management,
            <span className={highlight}>
              ensuring timely and smooth deployments
            </span>
            while maintaining platform stability and compliance with
            organizational standards.
          </li>
        </ul>
      </div>

      <div className={timeLineContainer}>
        <div className={roleContainer}>
          <h1 className={role}>Senior Software Engineer at Wipro</h1>
          <h3 className={period}>April 2019 - October 2021</h3>
          <h3 className={projectTitle}>Pre-population Loans Journey</h3>
        </div>
        <ul className={projectDescriptionList}>
          <li>
            Developed the Pre-Population feature to enhance the loan application
            experience by
            <span className={highlight}>pre-populating user information.</span>
          </li>
          <li>
            Integrated with
            <span className={highlight}>third-party platforms</span> to securely
            collect and store user data based on tokens.
          </li>
          <li>
            Enabled seamless data retrieval to pre-populate fields when users
            begin the loan journey,
            <span className={highlight}>
              reducing manual input and improving conversion rates.
            </span>
          </li>
        </ul>
        <h3 className={projectTitle}>Strong Customer Authentication</h3>
        <ul className={projectDescriptionList}>
          <li>
            Implemented <span className={highlight}>SCA</span> features in
            compliance with
            <span className={highlight}>
              European regulations to enhance payment security and reduce fraud.
            </span>
          </li>
          <li>
            Developed and integrated authenticator templates such as SMS OTP and
            Call Challenge for
            <span className={highlight}>two-factor authentication.</span>
          </li>
          <li>
            Integrated these templates with live APIs to support secure,
            <span className={highlight}>real-time customer verification</span>
            across internet banking channels.
          </li>
        </ul>
      </div>
    </div>
  );
};
