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
        <div className={infoBox}>
          <CopyIcon />
          <p className={`${handles} ${noMargin}`}>
            mailtosrinivasandurairaj@gmail.com
          </p>
        </div>
        <div className={infoBox}>
          <LinkedInIcon />
          <p className={`${handles} ${noMargin}`}>Linked In</p>
        </div>
      </div>
    </div>
  );
};
