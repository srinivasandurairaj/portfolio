import styles from "./profile-card.module.css";

export const ShortIntro = () => {
  const { shortIntro } = styles;

  return (
    <div>
      <p className={shortIntro}>
        A software engineer passionate about turning emerging technologies into
        scalable web experiences.
      </p>
    </div>
  );
};
