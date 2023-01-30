import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{

    constructor(cliente, agencia){
        super(0, cliente, agencia)
    }

    sacar(valor){
        let taxa = 1.1;
        const valorSacado = valor * taxa;
        super.sacar(valorSacado);
    }
}