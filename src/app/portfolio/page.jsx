"use client";

import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import Background from "@/components/background/Background";

const params = {
  particles: {
    number: {
      value: 170,
    },
    size: {
      value: 4,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

function page() {
  return (
    <div className={styles.mainContainer}>
      <Background></Background>
      <div className={styles.pageContainer}>
        <div className={styles.portfolioSection}>
          <div className={styles.container}>
            <div className={styles.sectionTitleContainer}>
              <div className={styles.sectionTitle}>
                <h1>Portfolio</h1>
              </div>
            </div>
            <div className={styles.portfolioHeadingContainer}>
              <div className={styles.portfolioHeading}>
                <h2>My Projects</h2>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.portfolioItem}>
                <div className={styles.portfolioItemInner}>
                  <div className={styles.portfolioImg}>
                    <Image
                      className={styles.img}
                      src={"/website1.png"}
                      alt="website1"
                      fill={true}
                    ></Image>
                  </div>
                </div>
              </div>

              <div className={styles.portfolioItem}>
                <div className={styles.portfolioItemInner}>
                  <div className={styles.portfolioImg}>
                    <Image
                      className={styles.img}
                      src={"/website2.png"}
                      alt="website1"
                      fill={true}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
