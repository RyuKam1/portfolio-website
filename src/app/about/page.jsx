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
            YuBlog is a home for human stories and ideas. Here, anyone can share
            insightful perspectives, useful knowledge, and life wisdom with the
            world—without building a mailing list or a following first. The
            internet is noisy and chaotic; YuBlog is quiet yet full of insight.
            It’s simple, beautiful, collaborative, and helps you find the right
            audience for whatever you have to.
          </p>
          <br />
          <p className={styles.storyText}>
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, we’re building a
            system that rewards depth, nuance, and time well spent. A space for
            thoughtful conversation more drive-by takes, and over.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
