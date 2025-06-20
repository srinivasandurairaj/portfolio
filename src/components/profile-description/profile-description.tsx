import styles from "./profile-description.module.css";

export const ProfileDescription = () => {
  const { profileDescription } = styles;

  return (
    <div>
      <p className={profileDescription}>
        I&apos;m a software engineer driven by a passion for crafting scalable
        web applications and harnessing emerging technologies to deliver
        innovative, high-impact solutions.
      </p>
    </div>
  );
};
