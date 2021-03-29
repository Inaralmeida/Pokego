import React from 'react'
import styles from './Modal.module.css';


function Modal({setModal, dados}) {
    return (
        <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Olá {dados.nome}</h2>
        </div>

        <div className={styles.modalMain}>
          {dados.nome.length <=3 ? (
            <p>Nome Invalido, Por favor tente novamente</p>
          ):(
            dados.email.includes('@') ? (
              <p>Recebemos a sua mensagem, em breve entraremos em contato atraves do email {dados.email}</p>
            ) : (
              <p>Email incorreto, por favor tente novamente </p>
            )
          )}
        </div>
        <div className={styles.modalFooter}>
          <button onClick={(e) => setModal(false)}>OK</button>
        </div>
      </div>
    </div>
    )
}

export default Modal
