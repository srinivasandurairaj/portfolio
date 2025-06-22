import NextLink from "next/link";

import { HomeIcon } from "@/components/logo/home-icon";
import { SkillIcon } from "@/components/logo/skill-icon";
import { WorkIcon } from "@/components/logo/work-icon";

import styles from "./nav-bar.module.css";

export const NavBar = () => {
  const {
    navContainer,
    homeButtonBox,
    skillButtonBox,
    homeButton,
    workIconBox,
    workButton,
    skillButton,
    tooltip,
  } = styles;

  return (
    <div className={navContainer}>
      <div className={homeButtonBox}>
        <NextLink href="/">
          <button className={homeButton}>
            <HomeIcon iconColor="#ffffff" size={30} />
            <span className={tooltip}>Home</span>
          </button>
        </NextLink>
      </div>

      <div className={skillButtonBox}>
        <NextLink href="/skill">
          <button className={skillButton}>
            <SkillIcon iconColor="#ffffff" size={30} />
            <span className={tooltip}>Skill</span>
          </button>
        </NextLink>
      </div>

      <div className={workIconBox}>
        <NextLink href="/work">
          <button className={workButton}>
            <WorkIcon iconColor="#ffffff" size={30} />
            <span className={tooltip}>Work</span>
          </button>
        </NextLink>
      </div>
    </div>
  );
};
