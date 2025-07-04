import { useContext } from "react";

import parse from "html-react-parser";

import { ProfileContext } from "@/components/provider/profile-provider";

import { SubHeaders } from "../sub-headers";

import styles from "./profile-summary.module.css";

export const ProfileSummary = () => {
  const { profileSummary: profileSummaryStyles, profileSummaryContainer } =
    styles;

  const { profileSummary } = useContext(ProfileContext);

  return (
    <div>
      <SubHeaders title="About" subTitle="Me" />
      <div className={profileSummaryContainer}>
        {profileSummary.map(({ paragraph }) => (
          <p className={profileSummaryStyles} key={paragraph}>
            {parse(paragraph)}
          </p>
        ))}
      </div>
    </div>
  );
};
