import styles from "./icon.module.css";

export const LinkedInIcon = () => {
  const { linkedInIcon, iconColor } = styles;
  return (
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
  );
};
