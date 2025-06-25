import { useContext } from "react";

import { ProfileContext } from "@/components/provider/profile-provider";

import styles from "./title.module.css";

export const Title = () => {
  const { titleContainer, titleLine1, titleLine2 } = styles;

  const { role } = useContext(ProfileContext);

  const roleArray = role.split(" ");

  return (
    <div className={titleContainer}>
      <h1 className={titleLine1}>{`${roleArray[0]} ${roleArray[1]}`}</h1>
      <h1 className={titleLine2}>{roleArray[2]}</h1>
    </div>
  );
};
