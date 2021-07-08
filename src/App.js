import React, { Component } from "react";
//Components
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioDeCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
//CSS
import "./assets/App.css";
import "./assets/index.css";
//Dados
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.notas.criarNota.bind(this.notas)}
          categorias={this.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            criarCategoria={this.categorias.novaCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
