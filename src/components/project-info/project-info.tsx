import { Profile } from "@/utilities/constants";

import { IProjectInfo } from "./project-info.props";
import styles from "./project-info.module.css";

export const ProjectInfo = ({ project }: IProjectInfo) => {
  const {
    projectInfoContiner,
    projectTitle: projectTitleStyles,
    responsiblity: responsiblityStyles,
    projectDescription: projectDescriptionStyles,
    responsiblityTitle,
  } = styles;
  return (
    <div className={projectInfoContiner}>
      {project.map(
        ({ projectTitle, projectDescription, responsiblites = [] }) => (
          <div key={projectTitle}>
            <p className={projectTitleStyles}>{projectTitle}</p>
            <p className={projectDescriptionStyles}>{projectDescription}</p>
            {responsiblites.length > 0 && (
              <p className={responsiblityTitle}>
                {Profile.KEY_RESPONSIBILITIES}
              </p>
            )}
            {responsiblites.map((responsiblity) => (
              <div key={responsiblity}>
                <ul>
                  <li className={responsiblityStyles}>{responsiblity}</li>
                </ul>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
