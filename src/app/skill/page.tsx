"use client";

import NextLink from "next/link";

import { HomeIcon } from "@/components/logo/home-icon";
import { ProfileSummary } from "@/components/profile-summary";
import { ProfileCard } from "@/components/profile-card/profile-card";
import { Stack } from "@/components/stack";

import styles from "./page.module.css";
import { WorkIcon } from "@/components/logo/work-icon";

const Skill = () => {
  const {
    container,
    profileCardContainer,
    skillContainer,
    homeButtonBox,
    homeButton,
    workIconBox,
  } = styles;

  return (
    <div className={container}>
      <div className={profileCardContainer}>
        <ProfileCard />
      </div>
      <div className={skillContainer}>
        <ProfileSummary />
        <Stack />
      </div>

      <div className={homeButtonBox}>
        <NextLink href="/">
          <button className={homeButton}>
            <HomeIcon iconColor="#ffffff" size={30} />
          </button>
        </NextLink>
      </div>

      <div className={workIconBox}>
        <NextLink href="/work">
          <button className={homeButton}>
            <WorkIcon iconColor="#ffffff" size={30} />
          </button>
        </NextLink>
      </div>
    </div>
  );
};

export default Skill;
