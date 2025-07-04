import { useContext } from "react";

import parse from "html-react-parser";

import { ProfileContext } from "@/components/provider/profile-provider";

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

  const { workExperiences } = useContext(ProfileContext);

  return (
    <div>
      <SubHeaders title="Work and Project" subTitle="Timeline" />
      {workExperiences.map(({ role, period, project }, index) => (
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
