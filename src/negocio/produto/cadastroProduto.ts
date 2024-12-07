import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nCadastre seu produto`);
        let produto = this.entrada.receberTexto(`Qual é o nome do produto: `)
        let nomes = this.produtos.map(i => (i.nome))
        if (nomes.includes(produto)) {
            console.log(`${produto} já existe dentro do sistema`);
            console.log();
        } else {
            let preco = this.entrada.receberNumero(`Qual é o preço do produto? R$`)
            let cadastrar = new Produto(produto, preco);
            this.produtos.push(cadastrar);
            console.log();
        }
    }
    public gerar(): void {
        let produtos = [
            "Base facial",
            "Creme esfoliante",
            "Máscara Hidratante",
            "Pinca",
            "Aparelho de barbear",
            "Hidratante",
            "Sabonete",
            "Cotonete",
            "Batom",
            "Escova de Dentes",
            "Shampoo",
            "Creme para pés",
            "Creme para mãos",
            "Protetor labial",
            "Desodorante"
        ]
        let preco = [
            108.00,
            62.00,
            70.00,
            85.00,
            29.00,
            100.00,
            38.00,
            24.00,
            134.00,
            35.00,
            126.00,
            16.00,
            10.00,
            13.00,
            60.00
        ]
        let sliceProdutos = produtos.slice();
        let sliceProdutosPreco = preco.slice()
        for (let index = 0; index < sliceProdutos.length; index++) {
            let adicionandoProdutos = new Produto(sliceProdutos[index], sliceProdutosPreco[index])
            this.produtos.push(adicionandoProdutos)
        }
    }
}