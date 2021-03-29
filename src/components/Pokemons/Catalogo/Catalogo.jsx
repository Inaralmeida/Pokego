import React, { useState} from 'react'
import CardPokeCatalogo from './cardPokeCatalogo/CardPokeCatalogo'
import Botoes from '../Botoes/Botoes'
import styles from './Catalogo.module.css'

function Catalogo() {

    const [pokes, setPokes] = useState([])
    const [array, setArray] = useState([])
    const  [cont, setcont] = useState(0)
    const [pokeInd, setPokeInd] = useState([])
    const [mostraPoke, setMostaPoke] = useState(false)
    
    async function apiCatalogo() {
    
  
        const res = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
        const json = await res.json();
        const array = await json
          
        setPokes(await array)
        setArray(pokes.pokemon_entries)
        
      
    }
     
    async function buscaPokemon(id) {
    
  
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const json = await res.json();
        
          
        setPokeInd(await json)
        console.log(pokeInd)
        setMostaPoke(true)
        
      
    }



   

    return (
        <div className={styles.catalogoContainer}>
            <Botoes/>
            
            {mostraPoke && <CardPokeCatalogo
            foto={pokeInd.sprites.front_default}
            nome={pokeInd.name}
            id={pokeInd.id}
            tipo={pokeInd.types}/>}
            
            
            <button onClick={apiCatalogo} className={styles.buttonCatalogo}>Ver lista de Pokemons (dê um duplo click)</button>

            <section className={styles.listaPokemons}>
            {
              array &&  array.map((poke, index)=>{
                    
                    return(
                        <li key={index}
                        onClick={()=> buscaPokemon(poke.entry_number)}>
                            {poke.pokemon_species.name}
                        </li>
                    )  }
                        
                    
                )
            }

            </section>
            
        </div>
    )
}

export default Catalogo
