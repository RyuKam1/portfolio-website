import styles from "./progressBar.module.css";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function ProgressBar({ progress }) {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.bar}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
        <span>
          <CountUp
            className={styles.progressText}
            duration={1}
            end={progress}
          />
          %
        </span>
      </div>
    </div>
  );
}
import { formatRevalidate } from "next/dist/server/lib/revalidate";

export default ProgressBar;
