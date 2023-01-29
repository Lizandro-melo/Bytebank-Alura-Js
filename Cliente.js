import { ContaCorrente } from "./ContaCorrente.js";
 
export class Cliente{
    _nome;
    _cpf;
    _rg;
    _cc = new ContaCorrente(1001,0);
    

    constructor(nome, cpf, rg){
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }

    get cc(){
        return this._cc
    }
}