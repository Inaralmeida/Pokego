import React from 'react'
import styles from './CarPokeeCatalogo.module.css'

function CardPokeCatalogo({foto, id, nome, tipo}) {
    
    return (
        <div className={styles.cardPokeCatalogoContainer}>
            {console.log(tipo.length)}
            <img src={foto} alt=""/>
            <section className={styles.infosPokeCatalogo}>
               <p>Nome:{nome}</p>
               <p>ID:{id}</p>
               {tipo.length === 2 ? (
                   <p>Tipo: {tipo[0].type.name}, {tipo[1].type.name}</p>
               ): (
                   <p>Tipo: {tipo[0].type.name}</p>
               )}
            </section>
        </div>
    )
}

export default CardPokeCatalogo
