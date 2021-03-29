import React, { useState, useEffect } from "react";
import styles from "./Famosos.module.css";
import Botoes from "../Botoes/Botoes";
import ModalFamosos from './modalFamosos/ModalFamosos'

function Famosos() {
  const [pokes, setPokes] = useState([])
    const [array, setArray] = useState([])
    const  [modalAtivo, setModalAtivo] = useState(false)
    const [pokeInd, setPokeInd] = useState([])
    const [mostraPoke, setMostaPoke] = useState(false)
    

  async function apiCatalogo() {
    
  
    const res = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
    const json = await res.json();
    const array = await json
      
    setPokes(await array)
    setArray( pokes.pokemon_entries)
    
  
}
 function buscaPokemon(index) {

  setModalAtivo(true)
  setPokeInd(array[index])
  

}

  return (
    <div className={styles.famososContainer}>
      <Botoes />
      <button onClick={apiCatalogo} className={styles.buttonCatalogo}>
        Ver Pokemons Famosos (Dê um duplo click)
      </button>{modalAtivo && <ModalFamosos
                setModalAtivo={setModalAtivo}
                dados={pokeInd}/>}
     
      <section className={styles.listaPokemons}>
      <div className={styles.divListaPokemons} >
        {array &&
          array.map((poke, index) => {
            return(
              
            index < 9 &&(
              
                
              <li key={index} onClick={() => buscaPokemon(index)} className={styles.itemLista}>
                {poke.pokemon_species.name.toUpperCase()}
                {console.log(poke.pokemon_species.name.toUpperCase())}
                
              </li>
          
              
              
            )
            )
          })}
              </div>
      </section>
    </div>
  );
}

export default Famosos;
