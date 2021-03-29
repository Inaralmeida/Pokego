import React from 'react'
import { Link } from "react-router-dom";
import styles from './Botoes.module.css'

function botoes() {
    return (
        <section className={styles.sectionButtons}>
        <Link to="/Catalogo">
          <button className={styles.buttonPokemons}>CATÁLOGO</button>
        </Link>
        <Link to="/Famosos">
          <button className={styles.buttonPokemons}>FAMOSOS</button>
        </Link>

        <Link to="/Pokedex">
          <button className={styles.buttonPokemons}>POKEDEX</button>{" "}
        </Link>
      </section>
    )
}

export default botoes
