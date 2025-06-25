import { useContext } from "react";

import NextLink from "next/link";

import { ProfileContext } from "@/components/provider/profile-provider";

import { EmailIcon, LinkedInIcon, GitHubIcon } from "../logo";

import styles from "./socials.module.css";

export const Socials = () => {
  const { socialsContainer, icons } = styles;

  const { emailAddress, linkedInProfile, github } = useContext(ProfileContext);

  const socials = [
    {
      component: <EmailIcon iconColor={"white"} size={28} />,
      link: `mailto:${emailAddress}`,
      target: "_blank",
    },
    {
      component: <GitHubIcon iconColor={"white"} size={28} />,
      link: github,
      target: "_blank",
    },
    {
      component: <LinkedInIcon iconColor={"white"} size={28} />,
      link: linkedInProfile,
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
