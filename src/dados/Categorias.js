export default class Categorias {
    constructor(){
        this.categorias = []
        this._inscritos = []
    }

    novaCategoria(novaCategoria){
        this.categorias.push(novaCategoria)
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
      this._inscritos.forEach((funcao) => { funcao(this.categorias) })
    }

}

/*
  criarCategoria(novaCategoria) {
    const novoArrayCategorias = [...this.state.categorias, novaCategoria];

    this.setState({ ...this.state, categorias: novoArrayCategorias });
  }
*/