const assert = require("assert");
const { Given, When, Then } = require("cucumber");

// primeiro cenário
const possoComprarOLanche = (saldo, preco) => {
  if (saldo == preco) {
    return "sim, mas vai ficar sem comer o resto do mes";
  } else if (saldo == preco - 1) {
    return "nao, so se tirar a coca 600ml";
  } else if (saldo > preco) {
    return "sim";
  } else {
    return "nao";
  }
};

Given("Tenho {string} reais", (saldo) => {
  this.saldo = Number(saldo);
});

When("Eu quero comprar um lanche de {string} reais", (preco) => {
  this.preco = Number(preco);
  this.respostaRecebida = possoComprarOLanche(this.saldo, this.preco);
});

// segundo cenário
const possoComprarFeijao = (saldo, preco) => {
  if (saldo >= preco + 20) {
    return "sim, da ate pra comprar um pedacinho de carne";
  } else if (saldo > preco) {
    return "sim";
  } else {
    return "nao, so tem arroz e ovo";
  }
};

Given("Comprei aquele lanche e agora tenho {string} reais", (saldo) => {
  this.saldo = Number(saldo);
});

When("Eu preciso comprar um pacote de feijao de {string} reais", (preco) => {
  this.preco = Number(preco);
  this.respostaRecebida = possoComprarFeijao(this.saldo, this.preco);
});

Then("A resposta e {string}", (respostaEsperada) => {
  assert.equal(this.respostaRecebida, respostaEsperada);
});
