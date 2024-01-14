import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>
          Hello! I'm
          <div
            className={styles.logoContainer}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovering && (
              <Link href="/" className={styles.logo}>
                გიორგი
              </Link>
            )}
            {!isHovering && (
              <Link href="/" className={styles.logo}>
                Giorgi
              </Link>
            )}
          </div>
        </h1>
      </div>
    </main>
  );
}
