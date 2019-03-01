
export class CadastrarConta {
    public nome: string;
    public descricao: string;
    public icone: string;
    public corIcone: string;
    public valorInicial: number;

    constructor(nome: string, descricao: string, icone: string, corIcone: string, valorInicial: number) {
        this.nome = nome;
        this.descricao = descricao;
        this.icone = icone;
        this.corIcone = corIcone;
        this.valorInicial = valorInicial;
    }
}
