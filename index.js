import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente = new Cliente("Lizandro", "000000", "000000");
const cliente2 = new Cliente("Liza", "000000", "0000000");


cliente.cc.depositar(1000);
cliente.cc.transferir(500, cliente2.cc);


console.log(cliente);
console.log(cliente2);

console.log(ContaCorrente.numeroContas)