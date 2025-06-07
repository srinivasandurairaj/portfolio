import styles from "./icon.module.css";

export const CopyIcon = () => {
  const { copyIcon, iconColor } = styles;

  return (
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
  );
};
