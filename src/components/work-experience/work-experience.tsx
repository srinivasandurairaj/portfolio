import { BasicProjectInfo } from "../basic-project-info/basic-project-info";
import { ProjectInfo } from "../project-info/project-info";
import { workExperiences } from "./experiences";
import workExperienceStyles from "./work-experience.module.css";

export const WorkExperience = () => {
  const { WorkExperienceContainer, workExperienceTitle, workExperienceBox } =
    workExperienceStyles;

  return (
    <div className={WorkExperienceContainer}>
      <h2 className={workExperienceTitle}>Work Experience</h2>
      {workExperiences.map((experience) => (
        <div key={experience.organisation} className={workExperienceBox}>
          <BasicProjectInfo {...experience} />
          <ProjectInfo {...experience} />
        </div>
      ))}
    </div>
  );
};
