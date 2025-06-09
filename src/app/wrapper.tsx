"use client";

import { useState, useEffect } from "react";

import { AboutMe } from "@/components/about-me";
import { Certifications } from "@/components/certifications/certifications";
import { Form } from "@/components/form";
import { Footer } from "@/components/footer";
import { initialState } from "@/components/provider/initial-data";
import { PersonCard } from "@/components/person-card";
import { ProfileContext } from "@/components/provider/profile-provider";
import { Stack } from "@/components/stack";
import { WorkExperience } from "@/components/work-experience";

import styles from "./page.module.css";

export const Wrapper = () => {
  const { container } = styles;
  const [data, setData] = useState(initialState);

  const fetchData = async () => {
    const res = await fetch("/api/profile", {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
      cache: "no-store",
      next: { revalidate: 0 },
    });
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProfileContext.Provider value={data}>
      <div className={container}>
        <PersonCard />
        <AboutMe />
        <WorkExperience />
        <Certifications />
        <Stack />
        <Form />
        <Footer />
      </div>
    </ProfileContext.Provider>
  );
};
