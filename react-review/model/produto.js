export default class Produto {
  #id; //cerquilha serve para definir como privado 
  #nome;
  #preco;

  constructor(id, nome, preco) {
    this.#id = id;
    this.#nome = nome;
    this.#preco = preco;
  }

  get id() { //acessar como atributo e não como metodo
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get preco() {
    return this.#preco;
  }
}