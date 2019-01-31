export class Conta {
    public nome: string;
    public descricao: string;
    public saldo: number;
    public saldoPrevisto: number;
    public transacoesRealizadas: number;
    public transacoesPendentes: number;
    public icone: string;
    public cor: string;

    constructor(
        nome?: string,
        saldo?: number,
        saldoPrevisto?: number,
        transacoesRealizadas?: number,
        transacoesPendentes?: number,
        descricao?: string,
        icone?: string,
        cor?: string) {

        this.nome = nome;
        this.descricao = descricao;
        this.saldo = saldo || 0;
        this.saldoPrevisto = saldoPrevisto || 0;
        this.transacoesRealizadas = transacoesRealizadas || 0;
        this.transacoesPendentes = transacoesPendentes || 0;
        this.icone = icone;
        this.cor = cor;
    }
}
