import React, { useState } from "react";
import styles from "./Time.module.css";

function Time() {
  const[pokeAberta1, setPokeAberta1]= useState(false)
  const[pokeAberta2, setPokeAberta2]= useState(false)
  const[pokeAberta3, setPokeAberta3]= useState(false)

  const clique1=()=>{
    pokeAberta1 ? setPokeAberta1(false) : setPokeAberta1(true)
  }
  const clique2=()=>{
    pokeAberta2 ? setPokeAberta2(false) : setPokeAberta2(true)
  }
  const clique3=()=>{
    pokeAberta3 ? setPokeAberta3(false) : setPokeAberta3(true)
  }

  

  return (
    <div className={styles.timeContainer}>
     
      {/* Misty */}
      <section className={styles.pokebola}>
        <span className={styles.cima}></span>
        <span className={styles.esquerda}>
          <span className={styles.centro}>
            <button className={styles.centroBranco} onClick={()=>clique1()}>Misty</button>
            
          </span>
        </span>
        <div className={pokeAberta1 ? styles.personagem : 
          styles.inativo}>
          <img src="misty.png" alt=""/>
          <article>
          <p>Nome: Misty</p>
          <p>Função: Encarar o perigo</p>

          </article>
        </div>
        <span className={styles.baixo}></span>
      </section>
    

    {/* Ash */}
      <section className={styles.pokebola}>
        <span className={styles.cima}></span>
        <span className={styles.esquerda}>
          <span className={styles.centro}>
            <button className={styles.centroBranco} onClick={()=>clique2()}>ASH</button>
            
          </span>
        </span>
        <div className={pokeAberta2? styles.personagem : 
          styles.inativo}>
          <img src="ash.jpg" alt=""/>
          <article>
          <p>Nome: Ash</p>
          <p>Função: se meter em encrenca</p>

          </article>
        </div>
        <span className={styles.baixo}></span>
      </section>
    
    {/* Brock */}
      <section className={styles.pokebola}>
        <span className={styles.cima}></span>
        <span className={styles.esquerda}>
          <span className={styles.centro}>
            <button className={styles.centroBranco} onClick={()=>clique3()}>Brock</button>
            
          </span>
        </span>
        <div className={pokeAberta3 ? styles.personagem : 
          styles.inativo}>
          <img src="brok.jpg" alt=""/>
          <article>
          <p>Nome: Brock</p>
          <p>Função: Comer</p>

          </article>
        </div>
        <span className={styles.baixo}></span>
      </section>
    
    </div>
  );
}

export default Time;
