import NextImage from "next/image";

import personCardStyles from "./person-card.module.css";

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
    locationIcon,
    basicInfo,
    workAvailability,
    handlesContainer,
    handles,
    copyIcon,
    infoBox,
    linkedInIcon,
    iconColor,
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                className={`${locationIcon} ${iconColor}`}
              >
                <g color="var(--token-66a88aa6-8fc9-447d-b229-c1bafaea57af, rgb(51, 51, 51))">
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </g>
              </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            className={`${copyIcon} ${iconColor}`}
          >
            <g color="var(--token-66a88aa6-8fc9-447d-b229-c1bafaea57af, rgb(84, 84, 84))">
              <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
            </g>
          </svg>
          <p className={`${handles} ${noMargin}`}>
            mailtosrinivasandurairaj@gmail.com
          </p>
        </div>
        <div className={infoBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            className={`${linkedInIcon} ${iconColor}`}
          >
            <g color="var(--token-66a88aa6-8fc9-447d-b229-c1bafaea57af, rgb(51, 51, 51))">
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
            </g>
          </svg>
          <p className={`${handles} ${noMargin}`}>Linked In</p>
        </div>
      </div>
    </div>
  );
};
