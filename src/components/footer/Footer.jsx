import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.footerText}>All Rights Reserved™</div>

        <div className={styles.socialNetworks}>
          <a
            href="https://www.facebook.com/profile.php?id=61552704748659"
            target="_blank"
          >
            <Image
              src="/1.png"
              className={styles.icon}
              width={20}
              height={20}
              alt="facebook"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/giorgi-omarashvili-511956309/"
            target="_blank"
          >
            <Image
              src="/2.png"
              className={styles.icon}
              width={20}
              height={20}
              alt="instagram"
            />
          </a>
          {/* <Image
            src="/3.png"
            className={styles.icon}
            width={20}
            height={20}
            alt="twitter"
          />
          <Image
            src="/4.png"
            className={styles.icon}
            width={20}
            height={20}
            alt="youtube"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
