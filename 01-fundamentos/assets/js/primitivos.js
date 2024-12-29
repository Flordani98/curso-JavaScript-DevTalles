// 6 TIPOS de datos PRIMITIVOSç

let nombre = "Peter Parker";
nombre = "Ben Parker";

nombre = 123;

let esMarvel = false;
console.log(typeof esMarvel);

let superPoder;
console.log(typeof superPoder); //sale undefined

let soyNull = null;
console.log(typeof soyNull); //sale object


//symbol: identificar propiedades de manera unica

let symbol1 = Symbol("a");
let symbol2 = Symbol("a");


console.log(typeof symbol1);
console.log(typeof symbol2);

console.log( symbol1 === symbol2); //retorna false

