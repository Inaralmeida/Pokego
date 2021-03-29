import React from "react";
import Botoes from "./Botoes/Botoes";
import styles from "./Pokemons.module.css";
function Pokemons() {
  return (
    <div className={styles.pokemonsContainer}>
      <img src="pokemonLogo.jpg" alt="logo pokemon" />

     <Botoes/>
    </div>
  );
}

export default Pokemons;
