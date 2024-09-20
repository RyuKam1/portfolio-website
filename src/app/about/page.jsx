"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./about.module.css";
import ProgressBar from "@/components/progressBar/ProgressBar";
import CountUp from "react-countup";
import Background from "@/components/background/Background";

function About() {
  return (
    <div className={styles.mainContainer}>
      <Background></Background>
      <div className={styles.container}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.title}>About Me.</h1>

          <p className={styles.storyText}>
            I&apos;ve always had passion and love towards modern technologies,
            which led me to learn more about it and create my own projects. With
            more than 4 years of experience in Web Development, Software
            Development, Electrical engineering and game development, I am still
            following my path to beconing great developer
          </p>
          {/* <br />
          <p className={styles.storyText}>
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, we’re building a
            system that rewards depth, nuance, and time well spent. A space for
            thoughtful conversation more drive-by takes, and over.
          </p> */}
        </div>
        {/* id="css"
            value="81" 62 57 74 37
            max="100" */}
        <div className={styles.skillContainer}>
          <p>CSS</p>
          <ProgressBar progress={81}></ProgressBar>
          <p>Javascript</p>
          <ProgressBar progress={62}></ProgressBar>
          <p>C++</p>
          <ProgressBar progress={57}></ProgressBar>
          <p>React.js</p>
          <ProgressBar progress={74}></ProgressBar>
          <p>Unreal Engine</p>
          <ProgressBar progress={37}></ProgressBar>
          <p>Android Studio</p>
          <ProgressBar progress={46}></ProgressBar>
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

        <a
          href="CV_Giorgi_Omarashvili.pdf"
          download="CV_Giorgi_Omarashvili.pdf"
        >
          <button className={styles.btn}>Download CV</button>
        </a>
        <button className={styles.btn}>Contact Me</button>
      </div>
      <div className={styles.exp_eduContainer}>
        <div className={styles.education}>
          <h1 className={styles.educationTitle}>Education</h1>

          <div className={styles.row}>
            <div className={styles.timelineBox}>
              <div className={styles.timeline}>
                <div className={styles.timeline_item}>
                  <div className={styles.circle_dot}></div>
                  <h3 className={styles.timeline_date}>
                    <i className={styles.fa}>
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2020}
                        separator={""}
                      />
                    </i>
                  </h3>
                  <h4 className={styles.timeline_title}>
                    Started learning Game Development
                  </h4>
                  <p className={styles.timeline_text}>
                    Everything started with this. I started to learn Game
                    Development with Unreal Engine 4 and succesfully finished it
                    with a certificate. <br />
                    During that classes, I learned basics of Unreal engine and
                    Game Development itself. <br />
                    By the end of the classes I made a fully working videogame
                    with my team in 2 weeks.
                  </p>
                </div>

                <div className={styles.timeline_item}>
                  <div className={styles.circle_dot}></div>
                  <h3 className={styles.timeline_date}>
                    <i className={styles.fa}>
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2021}
                        separator={""}
                      />
                    </i>
                  </h3>
                  <h4 className={styles.timeline_title}>
                    First encounter with coding (Python)
                  </h4>
                  <p className={styles.timeline_text}>
                    In school i started attending python courses and
                    successfully finished it with a certificate. <br /> I
                    learned basic functions, algorithm and data analysis
                    methods.
                  </p>
                </div>

                <div className={styles.timeline_item}>
                  <div className={styles.circle_dot}></div>
                  <h3 className={styles.timeline_date}>
                    <i className={styles.fa}>
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2021}
                        separator={""}
                      />
                    </i>
                  </h3>
                  <h4 className={styles.timeline_title}>
                    Started learning Electrical Engineering
                  </h4>
                  <p className={styles.timeline_text}>
                    I started learning about electrical engineerig and basic
                    circuits, which is controlled by arduino board. <br />I
                    learned basics of electrical circuits and how to program
                    Arduino board using c++.
                  </p>
                </div>

                <div className={styles.timeline_item}>
                  <div className={styles.circle_dot}></div>
                  <h3 className={styles.timeline_date}>
                    <i className={styles.fa}>
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2024}
                        separator={""}
                      />
                    </i>
                  </h3>
                  <h4 className={styles.timeline_title}>Code IT 2023</h4>
                  <p className={styles.timeline_text}>
                    I started learning full Front-End Development basis during
                    Code IT. The Entire Code IT project was split into three
                    segments for three months. For first segment I got to learn
                    HTML&CSS, for second I learned Javascript and for third
                    segment I learned React.js-Next.js Development. For final
                    days I&apos;ve made fully working website using all of the
                    things i learned during the classes.
                  </p>
                </div>

                <div className={styles.timeline_item}>
                  <div className={styles.circle_dot}></div>
                  <h3 className={styles.timeline_date}>
                    <i className={styles.fa}>
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2023}
                        separator={""}
                      />
                      {"- "}
                    </i>
                  </h3>
                  <h4 className={styles.timeline_title}>
                    Started Learning at ALTE University
                  </h4>
                  <p className={styles.timeline_text}>
                    I started learning at ALTE University, where I am Learning
                    Computer Science. I will continue to learn more and more
                    about technologies and computer science, in order to become
                    the great developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.experience}>
          <h1 className={styles.experienceTitle}>Experience</h1>
          <div className={styles.row}>
            <div className={styles.timelineBox}>
              <div className={styles.timeline}>
                <div className={styles.timeline_item}>
                  <div className={styles.circle_dot}></div>
                  <h3 className={styles.timeline_date}>
                    <i className={styles.fa}>
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2022}
                        separator={""}
                      />
                      {"- "}
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2024}
                        separator={""}
                      />
                    </i>
                  </h3>
                  <h4 className={styles.timeline_title}>
                    Apprenticeship in GITA "Akhmeta Tech Park"
                  </h4>
                  <p className={styles.timeline_text}>
                    I started Apprenticeship in Akhmeta Tech Park, which is
                    funded by GITA. Since that 2 years, I&apos;ve been studying
                    and aswell working in that place at the same time. While I
                    was there, I got to work with Various parts of tech industry
                    such as Web Development(HTML, CSS, Javascript, Node.js,
                    React,), Electrical Engineering(Arduino, Raspberry PI,
                    Teensy, Caliope), Software Development(Python, C++. c#),
                    UI/UX Design and I&apos;ve gained experience in them.
                  </p>
                </div>

                <div className={styles.timeline_item}>
                  <div className={styles.circle_dot}></div>
                  <h3 className={styles.timeline_date}>
                    <i className={styles.fa}>
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2024}
                        separator={""}
                      />
                      {"- "}
                      {/* <CountUp
                        className={styles.fa}
                        duration={4}
                        end={0}
                        separator={""}
                      /> */}
                    </i>
                  </h3>
                  <h4 className={styles.timeline_title}>Beetkar</h4>
                  <p className={styles.timeline_text}>
                    Beetkar is the Company, which was founded by me and my
                    friends. It is an innovative technology, that helps
                    beekepers with their everyday life, gains information about
                    bees and detects various deseases or mites. The project is
                    still ongoing and I am working on creating software for the
                    hardware and also creating and maintaining the official
                    website.
                  </p>
                </div>

                {/* <div className={styles.timeline_item}>
                  <div className={styles.circle_dot}></div>
                  <h3 className={styles.timeline_date}>
                    <i className={styles.fa}>
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={1999}
                        separator={""}
                      />
                      {"- "}
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2021}
                        separator={""}
                      />
                    </i>
                  </h3>
                  <h4 className={styles.timeline_title}>
                    Master in Computer Science
                  </h4>
                  <p className={styles.timeline_text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis obcaecati delectus magni, odit facere, consequuntur
                    suscipit iste sunt dicta tenetur minima, amet aspernatur
                    praesentium eos pariatur earum quae id fugiat.
                  </p>
                </div>

                <div className={styles.timeline_item}>
                  <div className={styles.circle_dot}></div>
                  <h3 className={styles.timeline_date}>
                    <i className={styles.fa}>
                      <CountUp
                        className={styles.fa}
                        duration={4}
                        end={2023}
                        separator={""}
                      />
                    </i>
                  </h3>
                  <h4 className={styles.timeline_title}>Code IT 2023</h4>
                  <p className={styles.timeline_text}>
                    I started learning full Front-End Development basis during
                    Code It. The Entire Code IT project was split into three
                    segments for three months. For first segment I got to learn
                    HTML&CSS, for second I learned Javascript and for third
                    segment I learned React.js-Next.js Development. For final
                    days I&apos;ve made fully working website using all of the
                    things i learned during the classes.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
