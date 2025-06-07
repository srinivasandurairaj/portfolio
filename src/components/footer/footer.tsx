import styles from "./footer.module.css";

export const Footer = () => {
  const { footerContainer, footerText } = styles;
  return (
    <div className={footerContainer}>
      <p className={footerText}>Designed with ❤️ and 🧠</p>
      <p className={footerText}>© Copyright 2025.</p>
    </div>
  );
};
