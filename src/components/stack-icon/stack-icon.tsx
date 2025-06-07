import NextImage from "next/image";

import { stackData } from "../stack/stack-data";
import styles from "./stack-icon.module.css";

export const StackIcon = () => {
  const { imageContainer, stackName } = styles;

  return (
    <div>
      {stackData.map(({ name, image, alt }) => (
        <>
          <div key={name} className={imageContainer}>
            <NextImage src={image} alt={alt} width={30} height={30} />
          </div>
          <span className={stackName}>{name}</span>
        </>
      ))}
    </div>
  );
};
