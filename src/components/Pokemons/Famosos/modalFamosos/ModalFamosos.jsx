import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";

function ModalFamosos({ setModalAtivo, dados }) {
  const [pokeInd, setPokeInd] = useState([]);
  const [mostraPoke, setMostraPoke] = useState(false);

  const id = dados.entry_number;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  async function buscaPokemon(url) {
    const res = await fetch(url);
    const json = await res.json();

    setPokeInd(await json);
    console.log(pokeInd);
    setMostraPoke(true);
  }

  useEffect(() => {
    buscaPokemon(url);
  }, [id, url]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{dados.pokemon_species.name.toUpperCase()}</h2>
        </div>

        {mostraPoke && (
          <div className={styles.modalMain}>
            <img src={pokeInd.sprites.front_default} alt="" />
            <section>
              <p>ID: {pokeInd.order}</p>
              {pokeInd.types.length === 2 ? (
                <p>
                  Tipo: {pokeInd.types[0].type.name}, {pokeInd.types[1].type.name}
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
          </div>
        )}

        <div className={styles.modalFooter}>
          <button onClick={(e) => setModalAtivo(false)}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default ModalFamosos;
