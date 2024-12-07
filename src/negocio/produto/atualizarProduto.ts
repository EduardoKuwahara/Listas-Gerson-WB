import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizacao from "../atualizacao";

export default class atualizarProduto extends Atualizacao {
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super()
        this.produto = produto
        this.entrada = new Entrada();
    }
    public atualizar(): void {
        console.log();
        console.log(`Lista de todos os Produtos`);
        this.produto.forEach(p => {
            console.log(`Produto: ${p.nome}`);
        })
        console.log();
        let entrada = this.entrada.receberTexto(`Nome do produto que deseja editar: `)
        let todosProdutos = this.produto.map(i => i.nome)
        let indexProdutos = todosProdutos.indexOf(entrada)

        if (indexProdutos == -1) {
            console.log(`Produto ${entrada} não encontrado`);
        } else {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do Produto: `)
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do Produto: R$`)
            this.produto.filter(produto => produto.nome == entrada).map(i => i.preco = novoPreco).toString()
            this.produto.filter(produto => produto.nome == entrada).map(i => i.nome = novoNome ).toString()
            console.log(`Produto Editado com sucesso`);
        }
    }
}