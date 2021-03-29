import React, { useState } from "react";
import styles from "./Pokedex.module.css";
import Botoes from "../Botoes/Botoes";

function Pokedex() {
  const [pokeProcurado, setPokeProcurado] = useState("");
  const [pokeInd, setPokeInd] = useState([]);
  const [mostraPoke, setMostraPoke] = useState(false);

  async function buscaPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeProcurado}/`;

    
      const res = await fetch(url);
      const json = await res.json();

      setPokeInd(await json);
      console.log(pokeInd);
      setMostraPoke(true);
    
  }
  return (
    <div className={styles.pokedexContainer}>
      <Botoes />

      <div className={styles.campoBusca}>
        <input onChange={
            e => setPokeProcurado(e.target.value)
        } type="text"
        placeholder='Digite o nome ou id do pokemon desejado' />
        <button onClick={buscaPokemon}>Procurar</button>
      </div>

      
        {mostraPoke && (
          <section className={styles.cardPokemon}>
            <img src={pokeInd.sprites.front_default} alt="" />
            <section>
                <h2>{pokeInd.name.toUpperCase()}</h2>
              <p>ID: {pokeInd.id}</p>
              {pokeInd.types.length === 2 ? (
                <p>
                  Tipo: {pokeInd.types[0].type.name},{" "}
                  {pokeInd.types[1].type.name}
                </p>
              ) : (
                <p>Tipo: {pokeInd.types[0].type.name}</p>
              )}
              <p>HP: {pokeInd.stats[0].base_stat}</p>
              <p>Ataque: {pokeInd.stats[1].base_stat} </p>
              <p>Defesa:{pokeInd.stats[2].base_stat} </p>
              <p>Ataque especial: {pokeInd.stats[3].base_stat}</p>
              <p>Defesa especial: {pokeInd.stats[4].base_stat}</p>
              <p>Velocidade:{pokeInd.stats[5].base_stat} </p>
            </section>
          </section>
        )}
     
    </div>
  );
}

export default Pokedex;
