import React, { Component } from "react";
import "./estilo.css";

export default class ListaDeCategorias extends Component {

  constructor(){
    super()
    this.state = { categorias: [] }

    this._novasCategorias = this._novasCategorias.bind(this)
  }

  //depois do componente estar renderizado no DOM
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias)
  }

  componentWillUnmount(){
    //se o componente for destruido, quebra o link com os dados
    this.props.notas.desinscrever(this._novasCategorias)
  }

  //quando chegar att das categorias
  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      let novaCategoria = e.target.value;
      this.props.criarCategoria(novaCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, indice) => {
            return (
              <li className="lista-categorias_item" key={indice}>
                {categoria}
              </li>
            );
          })}
        </ul>
        <input type="text" onKeyUp={this._handleEventoInput.bind(this)} />
      </section>
    );
  }
}
