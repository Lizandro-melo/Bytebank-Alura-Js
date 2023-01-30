import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente = new Cliente("Lizandro", "000000");

const cp = new ContaPoupanca(50,cliente, 1001);
const cc = new ContaCorrente(cliente, 1001);

cc.depositar(500);
cc.sacar(100);

console.log(cc);