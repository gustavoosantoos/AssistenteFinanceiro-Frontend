export class Conta {
    public saldoAtual: number;
    public saldoPrevisto: number;
    public transacoesRealizadas: number;
    public transacoesPendentes: number;
    public nome: string;

    constructor(
        saldoInicial?: number, saldoPrevisto?: number, transacoesRealizadas?: number, transacoesPendentes?: number, descricao?: string) {

        this.nome = descricao || '';
        this.saldoAtual = saldoInicial || 0;
        this.saldoPrevisto = saldoPrevisto || 0;
        this.transacoesRealizadas = transacoesRealizadas || 0;
        this.transacoesPendentes = transacoesPendentes || 0;
    }
}
