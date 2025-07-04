"use client";

import { ProfileCard } from "@/components/profile-card/profile-card";
import { WorkTimeline } from "@/components/work-timeline/work-timeline";

import styles from "./page.module.css";

const Work = () => {
  const { container, profileCardContainer, timelineContainer } = styles;

  return (
    <div className={container}>
      <div className={profileCardContainer}>
        <ProfileCard />
      </div>
      <div className={timelineContainer}>
        <WorkTimeline />
      </div>
    </div>
  );
};

export default Work;
