import { PersonCard } from "@/components/person-card/person-card";
import { AboutMe } from "@/components/about-me/about-me";
import { WorkExperience } from "@/components/work-experience/work-experience";
import { Stack } from "@/components/stack/stack";

import styles from "./page.module.css";

export default function Home() {
  const { container } = styles;

  return (
    <div className={container}>
      <PersonCard />
      <AboutMe />
      <WorkExperience />
      <Stack />
    </div>
  );
}
