"use server";

import React from "react";
import styles from "./page.module.css";
import { Resend } from "resend";

const page = async ({ params, searchParams }) => {
  const apiKey = process.env.API_KEY;
  const resend = new Resend(apiKey);

  console.log(searchParams);

  try {
    const response = await resend.emails.send({
      from: "Portfolio Feedback <beetkar@beetkar.online>",
      to: "omarashvili.giorgi07@gmail.com",
      subject: "New Contact!",
      name: "Beetkar",
      html: `<h1>New Contact!</h1><p>Name: ${searchParams.name} <br/> Email: ${searchParams.email} <br/> Phone: ${searchParams.phone} <br/> Message: ${searchParams.message} <br/></p>`,
    });

    console.log("Email sent successfully:", response);
    console.log(
      searchParams.name,
      searchParams.email,
      searchParams.phone,
      searchParams.message
    );
  } catch (error) {
    console.error("Error sending email:", error);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        მადლობას გიხდით ჩვენთან თანამშრომლობისთვის! {"<3"}
      </h1>
    </div>
  );
};

export default page;
