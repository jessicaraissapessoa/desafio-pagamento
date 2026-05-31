export default class ServicoDePagamento {
  #pagamentos
  
  constructor() {
    this.#pagamentos = [];
  }
  
  pagar(codigoDeBarras, empresa, valor) {
    this.#pagamentos.push({
      codigoDeBarras: codigoDeBarras,
      empresa: empresa,
      valor: valor,
      categoria: valor > 100 ? 'cara' : 'padrão'
    });
  }
  
  consultarUltimoPagamento() {
    return this.#pagamentos.at(-1);
  }
}