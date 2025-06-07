import { useContext } from "react";
import { Profile } from "@/utilities/constants";

import workExperienceStyles from "./work-experience.module.css";
import { BasicProjectInfo } from "../basic-project-info/basic-project-info";
import { ProjectInfo } from "../project-info/project-info";
import { ProfileContext } from "../provider/profile-provider";

export const WorkExperience = () => {
  const { workExperiences } = useContext(ProfileContext);
  const { WorkExperienceContainer, workExperienceTitle, workExperienceBox } =
    workExperienceStyles;

  return (
    <div className={WorkExperienceContainer}>
      <h2 className={workExperienceTitle}>{Profile.WORK_EXPERIENCE}</h2>
      {workExperiences.map((experience) => (
        <div key={experience.organisation} className={workExperienceBox}>
          <BasicProjectInfo {...experience} />
          <ProjectInfo {...experience} />
        </div>
      ))}
    </div>
  );
};
