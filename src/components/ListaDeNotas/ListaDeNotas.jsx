import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

  constructor(){
    super()
    this.state = {notas:[]}

    this._novasNotas = this._novasNotas.bind(this) //todos com mesma ref
  }

  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas)
    // this.props.notas.desinscrever(referenciaNovaCategoria)
  }

  componentWillUnmount(){
    //se o componente for destruido, quebra o link com os dados
    this.props.notas.desinscrever(this._novasNotas)
  }

  _novasNotas(notas){
    this.setState({...this.state, notas})
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
                apagarNota={this.props.apagarNota}
                indice={index}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
