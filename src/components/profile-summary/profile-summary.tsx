import { SubHeaders } from "../sub-headers";

import styles from "./profile-summary.module.css";

export const ProfileSummary = () => {
  const { profileSummary, profileSummaryContainer, highlight } = styles;

  return (
    <div>
      <SubHeaders title="About" subTitle="Me" />
      <div className={profileSummaryContainer}>
        <p className={profileSummary}>
          Web Developer with over <span className={highlight}>8+ years</span> of
          industry experience specializing in{" "}
          <span className={highlight}>
            building scalable, userfocused web applications.
          </span>{" "}
          Since 2016, I&apos;ve been crafting digital experiences across a
          variety of platforms and frameworks. I&apos;m a self-taught,
          self-motivated professional with a passion for problemsolving, clean
          code, and intuitive design.
        </p>
        <p className={profileSummary}>
          Currently working as a{" "}
          <span className={highlight}>Senior Developer at Apexon,</span> I focus
          on delivering high-performance, maintainable front-end and full-stack
          solutions. I have a strong eye for usability and user experience,
          combining design sensibility with technical expertise to create
          seamless digital products.
        </p>
      </div>
    </div>
  );
};
