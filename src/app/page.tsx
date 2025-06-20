import { Intro } from "@/components/intro/intro";

import styles from "./page.module.css";

const Home = () => {
  const { pageContainer } = styles;

  return (
    <div className={pageContainer}>
      <Intro />
    </div>
  );
};

export default Home;
