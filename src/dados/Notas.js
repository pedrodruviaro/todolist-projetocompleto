export default class ArrayDeNotas {
    constructor(){
        this.notas = []
        this._inscritos = []
    }

    criarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria)

        this.notas.push(novaNota)
        this.notificar()
    }

    apagarNota(indice){
        this.notas.splice(indice, 1)
        this.notificar()
    }


    inscrever(funcao){
      this._inscritos.push(funcao)
    }

    desinscrever(funcao){
      //filtrando todas as funcoes diferentes e reescrevendo o array
      this._inscritos = this._inscritos.filter(f => f !== funcao)
    }

    notificar(){
      this._inscritos.forEach((funcao) => { funcao(this.notas) })
    }

}

//NOTA
class Nota {
    constructor(titulo, texto, categoria){
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}



/*

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };

    const novoArrayDeNotas = [...this.state.notas, novaNota];

    this.setState({ notas: novoArrayDeNotas });
  }

  apagarNota(indice) {
    const arrayNotas = this.state.notas;

    arrayNotas.splice(indice, 1);

    this.setState({ notas: arrayNotas });
  }
*/