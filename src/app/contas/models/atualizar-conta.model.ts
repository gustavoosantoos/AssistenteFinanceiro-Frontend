export class AtualizarConta {
    public codigo: string;
    public nome: string;
    public icone: string;
    public cor: string;

    constructor(codigo: string, nome: string, icone: string, cor: string) {
        this.codigo = codigo;
        this.nome = nome;
        this.icone = icone;
        this.cor = cor;
    }
}
