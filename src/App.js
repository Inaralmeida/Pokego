import React from "react";
import styles from "./App.css";
import { BrowserRouter, Routes, Route as Rota } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carrossel from "./components/Carrossel/Carrossel";
import Contato from "./components/Contato/Contato";
import Sobre from "./components/Sobre/Sobre";
import Time from "./components/Time/Time";
import Pokemons from "./components/Pokemons/Pokemons";
import Catalogo from "./components/Pokemons/Catalogo/Catalogo";
import Page404 from "./components/Page404/Page404";
import Famosos from "./components/Pokemons/Famosos/Famosos";
import Pokedex from "./components/Pokemons/Pokedex/Pokedex";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className={styles.headerApp}>
          <Header />
        </header>
        <main className={styles.mainApp}>

          <Routes>

            <Rota exact path="/">
              <Carrossel />
            </Rota>
            
            <Rota  path="/Pokemons">
              <Pokemons/>
            </Rota>
            <Rota  path="/Sobre">
              <Sobre />
            </Rota>
            <Rota  path="/Time">
              <Time />
            </Rota>
            <Rota path="/Contato">
              <Contato />
            </Rota>
            <Rota path="/Catalogo">
              <Catalogo/>
            </Rota>
            <Rota path="*">
              <Page404/>
            </Rota>
            <Rota path="/Contato">
              <Contato />
            </Rota>
            <Rota path='/Catalogo'>
              <Catalogo/>
            </Rota>
            <Rota path='/Pokedex'>
              <Pokedex/>
            </Rota>
            <Rota path='/Famosos'>
              <Famosos/>
            </Rota>
          </Routes>
        </main>
        <footer className={styles.footerApp}>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
