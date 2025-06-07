import { StackIcon } from "../stack-icon/stack-icon";

import styles from "./stack.module.css";

export const Stack = () => {
  const { stackContainer, stackTitle } = styles;

  return (
    <div className={stackContainer}>
      <h2 className={stackTitle}>Stack</h2>
      <StackIcon />
    </div>
  );
};
