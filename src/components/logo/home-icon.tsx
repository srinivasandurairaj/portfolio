import { IIconProps } from "./icon-props";

export const HomeIcon = ({ iconColor, size }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <path
        fill={iconColor}
        d="M8 1.4L6 2.7V1H4v3L0 6.6l.6.8L8 2.6l7.4 4.8l.6-.8z"
      />
      <path fill={iconColor} d="M8 4L2 8v7h5v-3h2v3h5V8z" />
    </svg>
  );
};
