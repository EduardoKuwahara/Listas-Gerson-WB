import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Geracao from "../geracao";


export default class GeradorDeClientes extends Geracao {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public gerar(): void {
        this.gerarClientes();
        this.gerarProdutos();
        console.log(`Gerados ${this.clientes.length} clientes e ${this.produtos.length} produtos.`);
    }

    public gerarClientes(): void {
        for (let i = 1; i <= 30; i++) {
            let cliente = new Cliente(
                `Cliente ${i}`,
                `Social ${i}`,
                new CPF(this.gerarCPF(), new Date()),
                i % 2 === 0 ? "Masculino" : "Feminino"
            );
    
            cliente.getRgs.push(new RG(this.gerarRG(), new Date()));
            cliente.getTelefones.push(new Telefone("12", this.gerarTelefone()));
    
            this.associarItens(
                this.produtos,
                this.produtos.slice(0, 3).map(p => p.nome),
                cliente.getProdutosConsumidos
            );
    
            this.associarItens(
                this.servicos,
                this.servicos.slice(0, 2).map(s => s.nome),
                cliente.getServicosConsumidos
            );
    
            this.clientes.push(cliente);
        }
    }    

    private gerarProdutos(): void {
        for (let i = 1; i <= 20; i++) {
            this.produtos.push(new Produto(`Produto ${i}`, Math.floor(Math.random() * 100) + 1));
        }
    }

    private gerarCPF(): string {
        return `${Math.floor(100000000 + Math.random() * 900000000)}-${Math.floor(Math.random() * 99)}`;
    }

    private gerarRG(): string {
        return `${Math.floor(10000000 + Math.random() * 90000000)}-${Math.floor(Math.random() * 9)}`;
    }

    private gerarTelefone(): string {
        return `${Math.floor(900000000 + Math.random() * 999999)}`;
    }

    private associarItens<T extends Produto | Servico>(
    itens: T[],
    listaNomes: string[],
    destino: T[]
): void {
    listaNomes.forEach(nome => {
        let item = itens.find(i => i.nome === nome);
        if (item) {
            if (item instanceof Produto) {
                destino.push(new Produto(nome, item.preco) as T);
            } else if (item instanceof Servico) {
                destino.push(new Servico(nome, item.preco) as T);
            }
        }
    });
}
}
