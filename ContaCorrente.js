export class ContaCorrente{
    static numeroContas = 0;
    _agencia;
    _saldo;

    constructor(agencia, saldo){
        this._agencia = agencia;
        this._saldo = saldo;
        ContaCorrente.numeroContas += 1;
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
        if (valor <= 0){
            return console.log("ERROR VALOR MENOR OU IGUAL A 0!")
        } else {
            this._saldo += valor;
        }
    }

    sacar(valor){
        if (valor <= 0){
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