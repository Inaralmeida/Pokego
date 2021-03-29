import React from "react";
import styles from "./Carrossel.module.css";

function Carrossel() {

  

  return (
    <div className={styles.carrosselContainer}>
      <div className={styles.carrosselImagens}>
        <div className={styles.imagem}>
          <img src="0.png" alt="" />
        </div>
        <div className={styles.imagem}>
          <img src="1.png" alt="" />
        </div>
        <div className={styles.imagem}>
          <img src="2.png" alt="" />
        </div>
        <div className={styles.imagem}>
          <img src="3.png" alt="" />
        </div>
        <div className={styles.imagem}>
          <img src="4.png" alt="" />
        </div>
        <div className={styles.imagem}>
          <img src="5.png" alt="" />
        </div>
        <div className={styles.imagem}>
          <img src="6.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Carrossel;
