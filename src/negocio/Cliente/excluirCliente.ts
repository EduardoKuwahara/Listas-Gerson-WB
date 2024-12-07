import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Exclusao from "../exclusao"

export default class excluirCliente extends Exclusao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public excluir(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
        })
        let allClientes = this.clientes.map(i => i.nome)
        let entrada = this.entrada.receberTexto(`Digite o nome do cliente que deseja excluir: `)
        let pegarIndexOF = allClientes.indexOf(entrada)
        if (pegarIndexOF == -1) {
            console.log(`Cliente ${entrada} não existe`);
        } else {
            let execucao = true
            while (execucao) {
                console.log();
                console.log(`Tem certeza que deseja excluir o cliente?`);
                console.log(`1 - Sim`);
                console.log(`2 - Não`);
                let valor = this.entrada.receberNumero(`Digite a opção: `)
                switch (valor) {
                    case 1:
                        this.clientes.map(i => {
                            if (entrada === i.nome) {
                                let index = this.clientes.indexOf(i)
                                this.clientes.splice(index, 1)
                            }
                        })
                        console.log(`Cliente excluído com sucesso`);
                    case 2:
                        execucao = false
                        break;
                }
            }
        }
    }
}