"use client";

import React from "react";
import styles from "./about.module.css";
import ProgressBar from "@/components/progressBar/ProgressBar";

function About() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.title}>About Me.</h1>

          <p className={styles.storyText}>
            YuBlog is a home for human stories and ideas. Here, anyone can share
            insightful perspectives, useful knowledge, and life wisdom with the
            world—without building a mailing list or a following first. The
            internet is noisy and chaotic; YuBlog is quiet yet full of insight.
            It’s simple, beautiful, collaborative, and helps you find the right
            audience for whatever you have to say.
          </p>
          <br />
          <p className={styles.storyText}>
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, we’re building a
            system that rewards depth, nuance, and time well spent. A space for
            thoughtful conversation more than drive-by takes, and substance over
            packaging.
          </p>
        </div>
        {/* id="css"
            value="81" 62 57 74 37
            max="100" */}
        <div className={styles.skillContainer}>
          <p>CSS</p>
          <ProgressBar progress={81}></ProgressBar>
          <p>Javascript</p>
          <ProgressBar progress={62}></ProgressBar>
          <p>c++</p>
          <ProgressBar progress={57}></ProgressBar>
          <p>react</p>
          <ProgressBar progress={74}></ProgressBar>
          <p>Unreal Engine</p>
          <ProgressBar progress={37}></ProgressBar>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h3>Birthday:</h3>
          <p>January 9, 2007</p>
        </div>
        <div className={styles.info}>
          <h3>Age:</h3>
          <p>17</p>
        </div>
        <div className={styles.info}>
          <h3>Degree:</h3>
          <p>Web Development</p>
        </div>
        <div className={styles.info}>
          <h3>Website:</h3>
          <p>MyWebsite.com</p>
        </div>
        <div className={styles.info}>
          <h3>Email:</h3>
          <p>omarashvili.giorgi07@gmail.com</p>
        </div>
        <div className={styles.info}>
          <h3>Phone:</h3>
          <p>(+995)511236180</p>
        </div>
        <div className={styles.info}>
          <h3>City:</h3>
          <p>Akhmeta</p>
        </div>
        <div className={styles.info}>
          <h3>Country:</h3>
          <p>Georgia</p>
        </div>

        <button className={styles.btn}>Download CV</button>
        <button className={styles.btn}>Hire Me</button>
      </div>
    </div>
  );
}

export default About;
