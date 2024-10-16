"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import Background from "@/components/background/Background";
import { useRouter } from "next/navigation";
import { useAnimate } from "framer-motion";

function Contact() {
  const [mesInput, setmesInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [className, setClassName] = useState(styles.inactiveBtn);
  const [scope, animate] = useAnimate();

  const router = useRouter();

  const background = React.useMemo(() => <Background></Background>, []);

  function handleSubmit() {
    if (nameInput != "" && emailInput != "" && mesInput != "") {
      const queryParams = {
        name: nameInput,
        email: emailInput,
        phone: phoneInput,
        message: mesInput,
      };
      const queryString = new URLSearchParams(queryParams).toString();
      router.push(`/thanks?${queryString}`);
    } else {
      alert("Please, Fill All The Required Fields");
    }
  }

  function handleMouseOver() {
    if (nameInput != "" && emailInput != "" && mesInput != "") {
      setClassName(styles.activeBtn);
    } else {
      setClassName(styles.inactiveBtn);
    }
  }

  return (
    <div className={styles.container}>
      {background}
      <div className={styles.formContainer}>
        <form action="" className={styles.form} ref={scope}>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => setNameInput(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmailInput(event.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            onChange={(event) => setPhoneInput(event.target.value)}
          />
          <textarea
            wrap="off"
            name=""
            id=""
            placeholder="Message"
            onChange={(event) => setmesInput(event.target.value)}
          ></textarea>
          <button
            type="button"
            className={className}
            onClick={handleSubmit}
            onMouseOver={handleMouseOver}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
