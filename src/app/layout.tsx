import NextLink from "next/link";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { HomeIcon } from "@/components/logo/home-icon";
import { SkillIcon } from "@/components/logo/skill-icon";

import styles from "./globals.module.css";
import { WorkIcon } from "@/components/logo/work-icon";

export const metadata: Metadata = {
  title: "Srinivasan Durairaj's Portfolio",
  description: "A minimalistic personal portfolio for professional use",
};

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    navContainer,
    homeButtonBox,
    skillButtonBox,
    homeButton,
    workIconBox,
    workButton,
    skillButton,
    tooltip,
  } = styles;

  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className={navContainer}>
          <div className={homeButtonBox}>
            <NextLink href="/">
              <button className={homeButton}>
                <HomeIcon iconColor="#ffffff" size={30} />
                <span className={tooltip}>Home</span>
              </button>
            </NextLink>
          </div>

          <div className={skillButtonBox}>
            <NextLink href="/skill">
              <button className={skillButton}>
                <SkillIcon iconColor="#ffffff" size={30} />
                <span className={tooltip}>Skill</span>
              </button>
            </NextLink>
          </div>

          <div className={workIconBox}>
            <NextLink href="/work">
              <button className={workButton}>
                <WorkIcon iconColor="#ffffff" size={30} />
                <span className={tooltip}>Work</span>
              </button>
            </NextLink>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
