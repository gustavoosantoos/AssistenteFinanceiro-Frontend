export class Conta {
    public saldoAtual: number;
    public saldoPrevisto: number;
    public transacoesRealizadas: number;
    public transacoesPendentes: number;


    constructor(saldoInicial?: number) {
        this.saldoAtual = saldoInicial || 0;
        this.saldoPrevisto = this.saldoAtual;
        this.transacoesRealizadas = 0;
        this.transacoesPendentes = 0;
    }
}
