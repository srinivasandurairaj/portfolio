import { useContext } from "react";

import { ProfileContext } from "@/components/provider/profile-provider";

import styles from "./experience.module.css";

export const Experience = () => {
  const { experienceContainer, year, infoDescription, infoContainer, border } =
    styles;

  const { experience } = useContext(ProfileContext);

  return (
    <div className={experienceContainer}>
      {experience.map(({ description, quantity }, index) => (
        <div
          className={`${
            index === experience.length - 1 ? "" : border
          } ${infoContainer}`}
          key={description}
        >
          <h1 className={year}>{quantity}</h1>
          <p className={infoDescription}>{description}</p>
        </div>
      ))}
    </div>
  );
};
