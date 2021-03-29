import React, { useState } from "react";
import styles from "./Contato.module.css";

import Input from "./Input/Input";
import Modal from "./modal/Modal";

const Contato = () => {
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [dados, setDados] = useState({ nome: "", email: "", mensagem: "" });

  const handleClick = (event)=>{
     setModal(true)
     setDados({ nome: nome, email:email, mensagem:mensagem })
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <section className={styles.sectioUm}>
          <img
            src="https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"
            alt=""
          />
        </section>

        <section className={styles.sectioDois}>
          <span className={styles.spanLeft}></span>
          <span className={styles.spanRigt}></span>
        </section>
      </header>

      <main className={styles.main}>
        <div className={styles.messageBot}>
          <section>
            <img
              src="https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"
              alt=""
            />
            <h4>Equipe</h4>
          </section>
          <article>
            <p>Seja bem-vindx, estamos anciosos por sua mensagem.</p>
          </article>
        </div>
        {modal && <Modal setModal={setModal} dados={dados} />}
        <form
          action=""
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            name="name"
            type="text"
            id="inputName"
            setNome={setNome}
            setEmail={setEmail}
            setMensagem={setMensagem}
          >
            Nome
          </Input>
          <Input name="email" type="text" id="inputemail"
            setNome={setNome}
            setEmail={setEmail}
            setMensagem={setMensagem}
            Email>
        
          </Input>
          <Input name="message" type="textarea" id="inputMessage"
           setNome={setNome}
           setEmail={setEmail}
           setMensagem={setMensagem}>
            Menssagem
          </Input>

          <button className={styles.formButton} onClick={handleClick}>
            {" "}
            Enviar{" "}
          </button>
        </form>
      </main>

      <footer className={styles.footer}>
        <section className={styles.sectioTres}>
          <span className={styles.spanLeftFooter}></span>
          <span className={styles.spanRigtFooter}></span>
        </section>

        <section className={styles.sectioquatro}></section>
      </footer>
    </div>
  );
};
export default Contato;
