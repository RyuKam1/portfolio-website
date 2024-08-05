"use client";

import React, { useMemo, useState } from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import Background from "@/components/background/Background";
import Certificates from "@/components/myCertificates/Certificates";
import { easeIn } from "framer-motion";

function page() {
  const Certis = () => {
    const [showCerti, setShowCerti] = useState(false);
    const [showRow, setShowRow] = useState(true);
    function toggle() {
      setShowRow(!showRow);
      setShowCerti(!showCerti);
    }
    return (
      <div>
        <div className={styles.certiButtonContainer}>
          <button
            onClick={toggle}
            className={styles.certiButton}
            style={{
              translate: showRow ? "0% 0%" : "0% -250%",
              opacity: showCerti ? "0" : "100",
            }}
          >
            My Certificates
          </button>
        </div>
        <div
          className={styles.certiContainer}
          style={{
            opacity: showCerti ? "100" : "0",
            visibility: showCerti ? "visible" : "hidden",
            translate: showRow ? "0% 20%" : "0% 0%",
          }}
        >
          <Certificates />
          <button className={styles.closeButton} onClick={toggle}>
            X
          </button>
        </div>
        <div
          className={styles.row}
          style={{
            opacity: showRow ? "100" : "0",
            visibility: showRow ? "visible" : "hidden",
            width: showRow ? "100%" : "200%",
            translate: showRow ? "0%" : "-20%",
          }}
        >
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
    );
  };

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
            <Certis />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
