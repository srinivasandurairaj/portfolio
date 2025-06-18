"use client";

import styles from "./profile-pic.module.css";

export const ProfilePic = () => {
  const { imageContainer } = styles;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined") {
      const card = document.querySelector(
        '[id="imageContainer"]'
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
        '[id="imageContainer"]'
      ) as HTMLDivElement;
      card.style.transform = `perspective(${event.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div
      id="imageContainer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={imageContainer}
    />
  );
};
