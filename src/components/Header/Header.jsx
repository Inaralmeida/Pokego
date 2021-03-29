import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      

      <div className={styles.containeHeader}>
        <header>
          <nav className={styles.navHeader}>

            <NavLink to="/" activeStyle={{color: 'var(--laranjaEscuro)'}} className={styles.linkHeader} >
              <li className={styles.tituloHeader}>POKEGO</li>
            </NavLink>
            
            <div className={styles.subItens}>
            <NavLink to="/Pokemons" activeStyle={{color: 'var(--laranjaEscuro)'}} className={styles.linkHeader}>
              <li className={styles.liHeader}>Pokemons</li>
            </NavLink>
            <NavLink to="/Sobre" activeStyle={{color: 'var(--laranjaEscuro)'}} className={styles.linkHeader}>
              <li className={styles.liHeader}>Sobre Nós</li>
            </NavLink>
            <NavLink to="/Time" activeStyle={{color: 'var(--laranjaEscuro)'}} className={styles.linkHeader}>
              <li className={styles.liHeader}>Nosso Time</li>
            </NavLink>
            <NavLink to="/Contato" activeStyle={{color: 'var(--laranjaEscuro)'}} className={styles.linkHeader}>
              <li className={styles.liHeader}>Contato</li>
            </NavLink>
            </div>
            
          </nav>
        </header>
      </div>

      
    </>
  );
}
