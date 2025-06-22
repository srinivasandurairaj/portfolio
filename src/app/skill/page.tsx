"use client";

import { ProfileSummary } from "@/components/profile-summary";
import { ProfileCard } from "@/components/profile-card/profile-card";
import { Stack } from "@/components/stack";

import styles from "./page.module.css";

const Skill = () => {
  const { container, profileCardContainer, skillContainer } = styles;

  return (
    <div className={container}>
      <div className={profileCardContainer}>
        <ProfileCard />
      </div>
      <div className={skillContainer}>
        <ProfileSummary />
        <Stack />
      </div>
    </div>
  );
};

export default Skill;
