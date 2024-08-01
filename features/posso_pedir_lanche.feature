Feature: Posso pedir um lanche?
  Quero um lanche, mas nao sei se tenho dinheiro

  Scenario Outline: Posso ou nao posso pedir um lanche
    Given Tenho "<saldo>" reais
    When Eu quero comprar um lanche de "<preco>" reais
    Then A resposta e "<respostaEsperada>"
    
  Examples:
    | saldo | preco | respostaEsperada                            |
    | 100   | 45    | sim                                         |
    | 70    | 45    | sim                                         |
    | 50    | 45    | sim                                         |
    | 44    | 45    | nao, so se tirar a coca 600ml               |
    | 10    | 45    | nao                                         |
    | 45    | 45    | sim, mas vai ficar sem comer o resto do mes |

  Scenario Outline: Posso ou nao posso comprar feijao
    Given Comprei aquele lanche e agora tenho "<saldo>" reais
    When Eu preciso comprar um pacote de feijao de "<preco>" reais
    Then A resposta e "<respostaEsperada>"
    
  Examples:
    | saldo | preco | respostaEsperada                              |
    | 55    | 7     | sim, da ate pra comprar um pedacinho de carne |
    | 25    | 7     | sim                                           |
    | 5     | 7     | nao, so tem arroz e ovo                       |
    | 44    | 7     | sim, da ate pra comprar um pedacinho de carne |
    | 10    | 7     | sim                                           |
    | 0     | 7     | nao, so tem arroz e ovo                       |