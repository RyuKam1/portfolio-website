import React from "react";
import styles from "./services.module.css";
import Image from "next/image";

function page() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.container}>
        <div className={styles.sectionTitleContainer}>
          <div className={styles.sectionTitle}>
            <h1>Services</h1>
          </div>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.row}>
            <div className={styles.servicesItem}>
              <div className={styles.servicesItemInner}>
                <div className={styles.icon}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={"/web_icon.png"}
                      alt="webIcon"
                      fill={true}
                    ></Image>
                  </div>
                </div>
                <h4>HTMl/CSS Development</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, nihil maxime! Error qui, nulla, at adipisci dolorem
                  vitae distinctio est laborum corrupti officia repudiandae non
                  aliquam eveniet, accusantium voluptatem vero.
                </p>
              </div>
            </div>

            <div className={styles.servicesItem}>
              <div className={styles.servicesItemInner}>
                <div className={styles.icon}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={"/react_icon.png"}
                      alt="webIcon"
                      fill={true}
                    ></Image>
                  </div>
                </div>
                <h4>React Development</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, nihil maxime! Error qui, nulla, at adipisci dolorem
                  vitae distinctio est laborum corrupti officia repudiandae non
                  aliquam eveniet, accusantium voluptatem vero.
                </p>
              </div>
            </div>

            <div className={styles.servicesItem}>
              <div className={styles.servicesItemInner}>
                <div className={styles.icon}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={"/python_icon.png"}
                      alt="webIcon"
                      fill={true}
                    ></Image>
                  </div>
                </div>
                <h4>Python Development</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, nihil maxime! Error qui, nulla, at adipisci dolorem
                  vitae distinctio est laborum corrupti officia repudiandae non
                  aliquam eveniet, accusantium voluptatem vero.
                </p>
              </div>
            </div>

            <div className={styles.servicesItem}>
              <div className={styles.servicesItemInner}>
                <div className={styles.icon}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={"/softDev_icon.png"}
                      alt="webIcon"
                      fill={true}
                    ></Image>
                  </div>
                </div>
                <h4>Software Development</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, nihil maxime! Error qui, nulla, at adipisci dolorem
                  vitae distinctio est laborum corrupti officia repudiandae non
                  aliquam eveniet, accusantium voluptatem vero.
                </p>
              </div>
            </div>

            <div className={styles.servicesItem}>
              <div className={styles.servicesItemInner}>
                <div className={styles.icon}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={"/arduino_icon.png"}
                      alt="webIcon"
                      fill={true}
                    ></Image>
                  </div>
                </div>
                <h4>Arduino Programming</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, nihil maxime! Error qui, nulla, at adipisci dolorem
                  vitae distinctio est laborum corrupti officia repudiandae non
                  aliquam eveniet, accusantium voluptatem vero.
                </p>
              </div>
            </div>

            <div className={styles.servicesItem}>
              <div className={styles.servicesItemInner}>
                <div className={styles.icon}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={"/electricalEng_icon.png"}
                      alt="webIcon"
                      fill={true}
                    ></Image>
                  </div>
                </div>
                <h4>Electric Engineering</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, nihil maxime! Error qui, nulla, at adipisci dolorem
                  vitae distinctio est laborum corrupti officia repudiandae non
                  aliquam eveniet, accusantium voluptatem vero.
                </p>
              </div>
            </div>

            <div className={styles.servicesItem}>
              <div className={styles.servicesItemInner}>
                <div className={styles.icon}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={"/gameDev_icon.png"}
                      alt="webIcon"
                      fill={true}
                    ></Image>
                  </div>
                </div>
                <h4>Unreal Engine Game Development</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, nihil maxime! Error qui, nulla, at adipisci dolorem
                  vitae distinctio est laborum corrupti officia repudiandae non
                  aliquam eveniet, accusantium voluptatem vero.
                </p>
              </div>
            </div>

            <div className={styles.servicesItem}>
              <div className={styles.servicesItemInner}>
                <div className={styles.icon}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={"/android_icon.png"}
                      alt="webIcon"
                      fill={true}
                    ></Image>
                  </div>
                </div>
                <h4>Android Development</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, nihil maxime! Error qui, nulla, at adipisci dolorem
                  vitae distinctio est laborum corrupti officia repudiandae non
                  aliquam eveniet, accusantium voluptatem vero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
