import NextLink from "next/link";

import style from "./section-cards.module.css";

export const SectionCards = () => {
  const { container, card, heading } = style;

  const cardContent = [
    {
      title: "My Work Timelines and Projects",
      link: "/work",
      target: "_self",
    },
    {
      title: "My Skill Stack",
      link: "/skill",
      target: "_self",
    },
    {
      title: "Download my Resume",
      link: "/Srinivasan Resume.pdf",
      target: "_blank",
    },
  ];

  return (
    <div className={container}>
      {cardContent.map(({ title, link, target }) => (
        <NextLink href={link} key={title} target={target}>
          <div className={card}>
            <p className={heading}>{title}</p>
          </div>
        </NextLink>
      ))}
    </div>
  );
};
