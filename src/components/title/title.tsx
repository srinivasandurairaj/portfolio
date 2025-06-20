import styles from "./title.module.css";

export const Title = () => {
  const { titleContainer, titleLine1, titleLine2 } = styles;
  return (
    <div className={titleContainer}>
      <h1 className={titleLine1}>Certfied FullStack</h1>
      <h1 className={titleLine2}>Developer</h1>
    </div>
  );
};
