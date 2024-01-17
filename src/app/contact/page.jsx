"use client";
import React from "react";
import styles from "./contact.module.css";
import Background from "@/components/background/Background";

function Contact() {
  return (
    <div className={styles.container}>
      <Background></Background>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea name="" id="" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
