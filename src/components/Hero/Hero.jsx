import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deepjoy Sarkar</h1>
        <p className={styles.description}>
          I'm a software developer with 1.2 years of experience building
          websites and web applications using HTML, CSS, JavaScript, React, and
          Node.js. Skilled in creating responsive interfaces and implementing
          interactive features, I'm committed to delivering high-quality
          solutions that prioritize user satisfaction.
        </p>
        <a href="mailto:deepjoysarkar9@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage2.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
