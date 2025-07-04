"use client";

import { useContext } from "react";

import { Intro } from "@/components/intro/intro";
import { ProfileContext } from "@/components/provider/profile-provider";

import styles from "./page.module.css";

const Home = () => {
  const { pageContainer } = styles;

  const profileData = useContext(ProfileContext);

  return (
    <ProfileContext.Provider value={profileData}>
      <div className={pageContainer}>
        <Intro />
      </div>
    </ProfileContext.Provider>
  );
};

export default Home;
