"use client";

import { useContext, useRef, useState } from "react";
import NextImage from "next/image";
import NextLink from "next/link";

import styles from "./person-card.module.css";
import { ProfileContext } from "../provider/profile-provider";
import { Profile } from "../../utilities/constants";
import { EmailIcon, LinkedInIcon, LocationIcon } from "../logo";
import nextConfig from "../../../next.config";

export const PersonCard = () => {
  const contactEmail =
    process.env.RECIPIENT_EMAIL_ADDRESS ?? "mailtosrinivasandurairaj@gmail.com";

  const emailRef = useRef<HTMLParagraphElement>(null);
  const {
    personCardContainer,
    textContainer,
    personCard,
    title,
    role,
    location,
    noMargin,
    locationContainer,
    basicInfo,
    workAvailability,
    handlesContainer,
    handles,
    infoBox,
    linekedInLink,
  } = styles;
  const {
    name,
    role: professionalTitle,
    location: baseLocation,
    workStatus,
    linkedInProfile,
  } = useContext(ProfileContext);
  const [mailIconColor, setMailIconColor] = useState("#c9c9c9");
  const [linkedIconColor, setLinkedInIconColor] = useState("#c9c9c9");

  const handleMouseOver = (icon: string) => {
    if (icon === "email") {
      setMailIconColor("#ffffff");
    } else if (icon === "linkedin") {
      setLinkedInIconColor("#ffffff");
    }
  };

  const handleMouseLeave = (icon: string) => {
    if (icon === "email") {
      setMailIconColor("#c9c9c9");
    } else if (icon === "linkedin") {
      setLinkedInIconColor("#c9c9c9");
    }
  };

  return (
    <div>
      <div className={personCardContainer}>
        <div>
          <NextImage
            src={`${nextConfig.basePath}/profile.png`}
            alt="profile-photo"
            width={150}
            height={150}
            className={personCard}
          />
        </div>
        <div className={textContainer}>
          <div className={basicInfo}>
            <h1 className={`${title} ${noMargin}`}>{name}</h1>
            <h2 className={`${role} ${noMargin}`}>{professionalTitle}</h2>
            <div className={locationContainer}>
              <LocationIcon />
              <p className={`${location} ${noMargin}`}>{baseLocation}</p>
            </div>
          </div>
          <div>
            <p className={`${workAvailability} ${noMargin}`}>{workStatus}</p>
          </div>
        </div>
      </div>
      <div className={handlesContainer}>
        <div
          className={infoBox}
          ref={emailRef}
          onMouseLeave={() => handleMouseLeave("email")}
          onMouseOver={() => handleMouseOver("email")}
        >
          <EmailIcon iconColor={mailIconColor} />
          <a href={`mailto:${contactEmail}`} target="_blank">
            {contactEmail}
          </a>
        </div>
        <NextLink
          href={linkedInProfile}
          target="_blank"
          className={linekedInLink}
        >
          <div
            className={infoBox}
            onMouseLeave={() => handleMouseLeave("linkedin")}
            onMouseOver={() => handleMouseOver("linkedin")}
          >
            <LinkedInIcon iconColor={linkedIconColor} />
            <p className={`${handles} ${noMargin}`}>{Profile.LINKEDIN}</p>
          </div>
        </NextLink>
      </div>
    </div>
  );
};
