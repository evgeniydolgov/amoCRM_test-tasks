import React from "react";
import telegramImg from "../../assets/telegram.svg";
import viberImg from "../../assets/viber.svg";
import whatsappImg from "../../assets/whatsapp.svg";
import styles from "./ContactInfo.module.css";

export const ContactInfo = () => {
  return (
    <div className={styles.contactUs}>
      <p>+7 555 555-55-55</p>
      <div className={styles.contactUs__img}>
        <img src={telegramImg} alt="telegram logo" />
        <img src={viberImg} alt="viber logo" />
        <img src={whatsappImg} alt="whatsApp logo" />
      </div>
    </div>
  );
};
