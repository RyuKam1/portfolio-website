import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./tiltingImage.module.css"; // Optional: separate styles for the image
import { delay } from "framer-motion";

const TiltImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [transform, setTransform] = useState("");
  // const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercentage = x / rect.width;
    const yPercentage = y / rect.height;
    const rotateX = (xPercentage - 0.5) * 40;
    const rotateY = (0.5 - yPercentage) * 40;

    // const x = e.clientX - rect.left;
    // const y = e.clientY - rect.top;

    // const centerX = rect.width / 2;
    // const centerY = rect.height / 2;

    // const rotateX = ((y - centerY) / centerY) * 25;
    // const rotateY = ((centerX - x) / centerX) * 25;

    // console.log(rotateX, "|", rotateY);

    setTransform(`rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale(1.05)`);
    // setTransform({
    //   transform: `rotate3d(1,0,0, ${rotateX}deg)`,
    //   transform: `rotate3d(0,1,0, ${rotateY}deg)`,
    // });

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    img.style.setProperty("--glare-x", `${glareX}%`);
    img.style.setProperty("--glare-y", `${glareY}%`);

    // setGlareStyle({
    //   visibility: "visible",
    //   opacity: "1",
    //   //   left: `${glareX}%`,
    //   //   top: `${glareY}%`,
    //   transform: `translate(-${glareX}%, -${glareY}%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    // });
  };

  const handleMouseLeave = () => {
    setTransform(""); // Reset transform
    // setGlareStyle({
    //   visibility: "hidden",
    //   opacity: "0",
    // });
  };

  return (
    <div
      className={styles.imageContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={imgRef}
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        className={styles.img}
        style={{ transform }}
      />
      {/* <div className={styles.glare} style={glareStyle}></div> */}
    </div>
  );
};

export default TiltImage;
