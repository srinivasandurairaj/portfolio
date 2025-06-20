import styles from "./experience.module.css";

export const Experience = () => {
  const { experienceContainer, year, infoDescription, infoContainer, border } =
    styles;
  return (
    <div className={experienceContainer}>
      <div className={`${border} ${infoContainer}`}>
        <h1 className={year}>+8</h1>
        <p className={infoDescription}>Years of Experience</p>
      </div>
      <div className={`${border} ${infoContainer}`}>
        <h1 className={year}>+6</h1>
        <p className={infoDescription}>Completed Projects</p>
      </div>
      <div className={infoContainer}>
        <h1 className={year}>Many</h1>
        <p className={infoDescription}>Happy Clients</p>
      </div>
    </div>
  );
};
