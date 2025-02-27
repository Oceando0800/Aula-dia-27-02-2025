function calcularTotalCompra(precoProduto1, precoProduto2, precoProduto3) {
     let total = precoProduto1 + precoProduto2 + precoProduto3;
     return total;
}

let precoProduto1 = 50
let precoProduto2 = 25
let precoProduto3 = 75
let totalCompra = calcularTotalCompra(precoProduto1, precoProduto2, precoProduto3);

console.log("o valor total da compra é:" + totalCompra);