import React, { Component } from "react";
import { ThemeProvider } from "react-bootstrap";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);

    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";

    this.state = { categorias: [] };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.criarNota(this.titulo, this.texto, this.categoria);

    // limpando inputs
    event.target[1].value = "";
    event.target[1].focus();
    event.target[2].value = "";
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select
          className="formulario-cadastro_input"
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option value="Sem categoria">Sem categoria</option>
          {this.state.categorias.map((categoria, i) => {
            return (
              <option value={categoria} key={i}>
                {categoria}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="Titulo"
          className="formulario-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
          required
        />
        <textarea
          placeholder="Escreva sua nota"
          className="formulario-cadastro_input form-textarea"
          onChange={this._handleMudancaTexto.bind(this)}
          required
        ></textarea>
        <button className="formulario-cadastro_botao">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
