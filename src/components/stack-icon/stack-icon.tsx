import { useContext } from "react";
import NextImage from "next/image";

import { ProfileContext } from "../provider/profile-provider";
import styles from "./stack-icon.module.css";

export const StackIcon = () => {
  const {
    imageContainer,
    stackName,
    stackBox,
    stackContainer,
    framework: frameworkStyles,
  } = styles;
  const { stack } = useContext(ProfileContext);

  return (
    <div className={stackContainer}>
      {stack.map(({ name, image, alt, framework }) => (
        <div key={name} className={stackBox}>
          <div className={imageContainer}>
            <NextImage src={image} alt={alt} width={40} height={40} />
          </div>
          <div>
            <p className={stackName}>{name}</p>
            <p className={frameworkStyles}>{framework}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
