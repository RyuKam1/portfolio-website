"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Typed from "react-typed";
import Background from "@/components/background/Background";
import InteractiveText from "@/components/interactiveText/interactiveText";
import { getElement } from "@syncfusion/ej2-react-progressbar";
import TiltImage from "@/components/tiltingImage/tiltingImage";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background></Background>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Hello! I&apos;m
          <div>
            <InteractiveText
              className={styles.interactiveName}
            ></InteractiveText>
          </div>
        </h1>
        <span className={styles.proffesion}>
          And I Am
          <Typed
            strings={[
              "a Web Developer",
              "a React Developer",
              "a Python Developer",
              "a Software Engineer",
              "an Electric Engineer",
              "a Game Developer",
              "an Android Developer",
            ]}
            typeSpeed={50}
            loop={true}
            className={styles.typing}
          />
        </span>
        <span className={styles.desc}>
          I am a Developer and Electrical Engineer with 4+ years of experience.
          <br /> My experience contains: <br />
          <span className={styles.experienceText}>
            Web Development (HTML, CSS, Javascript, React.js, Next.js)
            <br /> Software Development (Python, C++) <br />
            Game Development (Unreal Engine, Unity) <br />
            Electrical Engineering & Arduino, raspberryPI and ESP32 <br />
            Android Development
          </span>
        </span>
        <a href="/about" className={styles.btnContaner}>
          <button className={styles.btn}>About Me</button>
        </a>
      </div>
      <div className={styles.imageContainer}>
        <TiltImage
          src={"/another_me.jpeg"}
          alt="me"
          className={styles.img} // Use the same class for styling
        />
      </div>
    </main>
  );
}
