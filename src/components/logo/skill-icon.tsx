import { IIconProps } from "./icon-props";

export const SkillIcon = ({ iconColor, size }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
    >
      <path
        fill={iconColor}
        d="m33.53 18.76l-6.93-3.19V6.43a1 1 0 0 0-.6-.9l-7.5-3.45a1 1 0 0 0-.84 0l-7.5 3.45a1 1 0 0 0-.58.91v9.14l-6.9 3.18a1 1 0 0 0-.58.91v9.78a1 1 0 0 0 .58.91l7.5 3.45a1 1 0 0 0 .84 0l7.08-3.26l7.08 3.26a1 1 0 0 0 .84 0l7.5-3.45a1 1 0 0 0 .58-.91v-9.78a1 1 0 0 0-.57-.91Zm-2.81.91L25.61 22l-5.11-2.33l5.11-2.35ZM18.1 4.08l5.11 2.35l-5.11 2.35L13 6.43Zm-7.5 13.23l5.11 2.35L10.6 22l-5.11-2.33Zm6.5 11.49l-6.5 3l-6.5-3v-7.57L10.18 24a1 1 0 0 0 .82 0l6.08-2.8Zm-5.5-13.23V8l6.08 2.8a1 1 0 0 0 .84 0L24.6 8v7.58l-6.5 3Zm20.51 13.24l-6.5 3l-6.51-3v-7.59L25.19 24a1 1 0 0 0 .81 0l6.08-2.8Z"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  );
};
