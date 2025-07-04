import { useContext } from "react";

import NextLink from "next/link";

import { ProfileContext } from "@/components/provider/profile-provider";

import style from "./section-cards.module.css";

export const SectionCards = () => {
  const { container, card, heading } = style;

  const { cardSections } = useContext(ProfileContext);

  return (
    <div className={container}>
      {cardSections.map(({ title, link, target }) => (
        <NextLink href={link} key={title} target={target}>
          <div className={card}>
            <p className={heading}>{title}</p>
          </div>
        </NextLink>
      ))}
    </div>
  );
};
