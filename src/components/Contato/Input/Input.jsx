import React, { useState } from 'react'
import styles from './Input.module.css'

function Input({
    name,
    type,
    id,
    setNome,
    setEmail,
    setMensagem,
    children
}) {
  


    const handle = (event)=>{
        if(name=== 'name') setNome(event.target.value)
        if(name=== 'email') setEmail(event.target.value)
        if(name=== 'message') setMensagem(event.target.value)
        
    }

    
    

    return (
        <div className={type === 'text'? styles.campoText : styles.campoTextarea}>
            
            <label htmlFor={name} className={styles.label}>{children}</label>
                <input type={type}
                className={type === 'text'? styles.text : styles.textarea} 
                placeholder={`digite seu ${children}`}
                onChange={handle}
                id={id}
                onChange={handle}
                
                />
            
        </div>
    )
}

export default Input;
