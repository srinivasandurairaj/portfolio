import { useContext } from "react";

import { ProfileContext } from "@/components/provider/profile-provider";

import styles from "./profile-card.module.css";

export const Name = () => {
  const { name: nameStyles } = styles;
  const { name } = useContext(ProfileContext);

  return <h1 className={nameStyles}>{name}</h1>;
};
