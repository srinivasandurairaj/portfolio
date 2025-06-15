"use client";

// import { useState, useEffect } from "react";

import { AboutMe } from "@/components/about-me";
import { Form } from "@/components/form";
import { Footer } from "@/components/footer";
import { initialState } from "@/components/provider/initial-data";
import { PersonCard } from "@/components/person-card";
import { ProfileContext } from "@/components/provider/profile-provider";
import { Stack } from "@/components/stack";
import { WorkExperience } from "@/components/work-experience";

import styles from "./page.module.css";

const Home = () => {
  const { container } = styles;
  // const [data, setData] = useState(initialState);

  // const fetchData = async () => {
  //   const res = await fetch("/api/profile", {
  //     headers: {
  //       Accept: "application/json",
  //       method: "GET",
  //     },
  //   });
  //   const data = await res.json();
  //   setData(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <ProfileContext.Provider value={initialState}>
      <div className={container}>
        <PersonCard />
        <AboutMe />
        <WorkExperience />
        <Stack />
        {false && <Form />}
        <Footer />
      </div>
    </ProfileContext.Provider>
  );
};

export default Home;
