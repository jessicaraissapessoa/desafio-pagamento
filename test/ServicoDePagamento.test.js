import ServicoDePagamento from "../src/ServicoDePagamento.js";
import assert from "node:assert";

describe("Classe de Servico de Pagamento", () => {

  it("Validar para transferência categorizada como padrão (valor <= 100)", function () {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar("0987-7656-3475", "Samar", 100);
    const meuPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.deepStrictEqual(meuPagamento, {
      codigoDeBarras: "0987-7656-3475",
      empresa: "Samar",
      valor: 100,
      categoria: "padrão",
    });
  });

  it("Validar para transferência categorizada como cara (valor > 100)", function () {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar("0987-7656-3475", "Samar", 100.01);
    const meuPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.deepStrictEqual(meuPagamento, {
      codigoDeBarras: "0987-7656-3475",
      empresa: "Samar",
      valor: 100.01,
      categoria: "cara",
    });
  });

});
