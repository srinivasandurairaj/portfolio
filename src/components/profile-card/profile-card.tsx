"use client";

import NextImage from "next/image";

import { Name } from "./name";
import { ShortIntro } from "./short-intro";
import styles from "./profile-card.module.css";
import { Socials } from "../socials";

export const ProfileCard = () => {
  const { cardContainer, image, innerContainer } = styles;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined") {
      const card = document.querySelector(
        '[id="profileImage"]'
      ) as HTMLDivElement;
      const THRESHOLD = 15;
      const { clientX, clientY, currentTarget } = event;
      const { clientHeight, clientWidth } = currentTarget;
      const offsetLeft = currentTarget.getBoundingClientRect().left;
      const offsetTop = currentTarget.getBoundingClientRect().top;
      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;
      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

      card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined") {
      const card = document.querySelector(
        '[id="profileImage"]'
      ) as HTMLDivElement;
      card.style.transform = `perspective(${event.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div className={cardContainer}>
      <div className={innerContainer}>
        <div>
          <NextImage
            id="profileImage"
            src={"./profile.png"}
            alt="profile pic"
            width={20}
            height={24}
            className={image}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
          <Name />
        </div>
        <ShortIntro />
        <Socials />
      </div>
    </div>
  );
};
