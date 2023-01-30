import { Cliente } from "./Cliente.js";

export class Conta{
    
    constructor(saldoinicial, cliente, agencia){
        this._saldo = saldoinicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    get agencia(){
        return this._agencia;
    }

    set agencia (agencia){
        this._agencia = agencia;
    }

    depositar(valor){
        if (valor <= 100){
            return console.log("ERROR VALOR MENOR OU IGUAL A 100!")
        } else {
            this._saldo += valor;
        }
    }

    sacar(valor){
        if (valor <= 50){
            return console.log("ERROR AO SACAR!");
        } else if (this._saldo >= valor){
            this._saldo -= valor;
        } else {
            return console.log("VALOR MAIOR QUE O SALDO DA CONTA");
        }
    }

    transferir(valor, ContaCorrente){
        this.sacar(valor);
        ContaCorrente.depositar(valor);
    }
}