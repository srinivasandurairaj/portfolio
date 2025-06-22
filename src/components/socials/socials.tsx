import NextLink from "next/link";

import { EmailIcon, LinkedInIcon, GitHubIcon } from "../logo";

import styles from "./socials.module.css";

export const Socials = () => {
  const { socialsContainer, icons } = styles;

  const socials = [
    {
      component: <EmailIcon iconColor={"white"} size={28} />,
      link: "mailto:mailtosrinivasandurairaj@gmail.com",
      target: "_blank",
    },
    {
      component: <GitHubIcon iconColor={"white"} size={28} />,
      link: "https://github.com/srinivasandurairaj",
      target: "_blank",
    },
    {
      component: <LinkedInIcon iconColor={"white"} size={28} />,
      link: "https://www.linkedin.com/in/srinivasan-durairaj-531727198/",
      target: "_blank",
    },
  ];

  return (
    <div className={`${socialsContainer} ${icons}`}>
      {socials.map(({ link, target, component }) => (
        <NextLink key={link} href={link} target={target} className={icons}>
          {component}
        </NextLink>
      ))}
    </div>
  );
};
