import { AboutMe } from "@/components/about-me/about-me";
import { Footer } from "@/components/footer/footer";
import { PersonCard } from "@/components/person-card/person-card";
import { Stack } from "@/components/stack/stack";
import { WorkExperience } from "@/components/work-experience/work-experience";

import styles from "./page.module.css";

export default function Home() {
  const { container } = styles;

  return (
    <div className={container}>
      <PersonCard />
      <AboutMe />
      <WorkExperience />
      <Stack />
      <Footer />
    </div>
  );
}
