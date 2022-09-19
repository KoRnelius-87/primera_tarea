const assert = require("assert");

describe("Conversion de Moneda", function () {
  it("Pesos a Dolares", function () {
    let monto = 100;
    let valor = 20;

    let total = money_convert_division(monto, valor);
    assert.equal(5, total);
  });

  it("Dolares a Pesos", function () {
    let monto = 5;
    let valor = 20;
 
    let total = money_convert_x(monto, valor);
    assert.equal(100, total); 
  });
});

//RED
function money_convert_division(monto, valor){
    return monto / valor;
}

function money_convert_x(monto, valor){
    return monto * valor;
}

//
