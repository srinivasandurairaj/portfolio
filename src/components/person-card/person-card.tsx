"use client";

import { useRef, useState, useEffect } from "react";
import NextImage from "next/image";

import personCardStyles from "./person-card.module.css";
import { LinkedInIcon, LocationIcon, CopyIcon } from "../logo";

export const PersonCard = () => {
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
  } = personCardStyles;
  const emailRef = useRef<HTMLParagraphElement>(null);
  const [copyText, setCopyText] = useState(
    "mailtosrinivasandurairaj@gmail.com"
  );

  const timerToUpdateText = () =>
    setTimeout(() => {
      setCopyText("mailtosrinivasandurairaj@gmail.com");
    }, 1000);

  const copyHandler = () => {
    if (emailRef.current) {
      navigator.clipboard.writeText(emailRef.current.textContent || "");
      document.execCommand("copy");
      setCopyText("Copied to clipboard!");
      timerToUpdateText();
    }
  };

  // Cleanup function to clear the timeout if the component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(timerToUpdateText());
    };
  }, []);

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
            <h1 className={`${title} ${noMargin}`}>Srinivasan Durairaj</h1>
            <h2 className={`${role} ${noMargin}`}>Full-Stack Developer</h2>
            <div className={locationContainer}>
              <LocationIcon />
              <p className={`${location} ${noMargin}`}>
                London, United Kingdom
              </p>
            </div>
          </div>
          <div>
            <p className={`${workAvailability} ${noMargin}`}>
              Available for work
            </p>
          </div>
        </div>
      </div>
      <div className={handlesContainer}>
        <div className={infoBox} ref={emailRef} onClick={copyHandler}>
          <CopyIcon />
          <p className={`${handles} ${noMargin}`}>{copyText}</p>
        </div>
        <div className={infoBox}>
          <LinkedInIcon />
          <p className={`${handles} ${noMargin}`}>Linked In</p>
        </div>
      </div>
    </div>
  );
};
