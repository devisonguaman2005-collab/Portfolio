import React from "react";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import styles from "./Card.module.css";

const Card = ({ image, buttonText, children, socialLinks }) => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV_Elkin_Guaman.pdf"; 
    link.download = "CV_Elkin_Guaman.pdf"; 
    link.click();
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImageSection}>
        <img src={image} alt="Imagen" className={styles.cardImg} />
        
        <div className={styles.socialLinks}>
          {socialLinks?.whatsapp && (
            <a 
              href={socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          )}
          {socialLinks?.instagram && (
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          )}
          {socialLinks?.linkedin && (
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          )}
        </div>
      </div>

      <div className={styles.cardContent}>
        {children}
        <button className={styles.cardBtn} onClick={handleDownload}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
