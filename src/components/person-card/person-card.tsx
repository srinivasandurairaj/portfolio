"use client";

import { useRef, useState, useEffect, useContext, useCallback } from "react";
import NextImage from "next/image";
import NextLink from "next/link";

import styles from "./person-card.module.css";
import { ProfileContext } from "../provider/profile-provider";
import { Profile } from "../../utilities/constants";
import { LinkedInIcon, LocationIcon, CopyIcon } from "../logo";

export const PersonCard = () => {
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
    emailAddress,
  } = useContext(ProfileContext);
  const [copyText, setCopyText] = useState(emailAddress);

  const timerToUpdateText = useCallback(
    () =>
      setTimeout(() => {
        setCopyText(emailAddress);
      }, 1000),
    [emailAddress]
  );

  const copyHandler = () => {
    if (emailRef.current) {
      navigator.clipboard.writeText(emailRef.current.textContent || "");
      setCopyText("Copied to clipboard!");
      timerToUpdateText();
    }
  };

  // Cleanup function to clear the timeout if the component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(timerToUpdateText());
    };
  }, [timerToUpdateText]);

  useEffect(() => {
    setCopyText(emailAddress);
  }, [emailAddress]);

  return (
    <div>
      <div className={personCardContainer}>
        <div>
          <NextImage
            src={"/profile.png"}
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
        <div className={infoBox} ref={emailRef} onClick={copyHandler}>
          <CopyIcon />
          <p className={`${handles} ${noMargin}`}>{copyText}</p>
        </div>
        <NextLink
          href={linkedInProfile}
          target="_blank"
          className={linekedInLink}
        >
          <div className={infoBox}>
            <LinkedInIcon />
            <p className={`${handles} ${noMargin}`}>{Profile.LINKEDIN}</p>
          </div>
        </NextLink>
      </div>
    </div>
  );
};
