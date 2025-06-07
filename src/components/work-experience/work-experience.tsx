import workExperienceStyles from "./work-experience.module.css";

export const WorkExperience = () => {
  const { WorkExperienceContainer, workExperienceTitle } = workExperienceStyles;

  return (
    <div className={WorkExperienceContainer}>
      <h2 className={workExperienceTitle}>Work Experience</h2>
    </div>
  );
};
