import React, {useState} from 'react'


export async function apiCatalogo() {
    
  
    const res = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
    const json = await res.json();
      
    return json

  
}



