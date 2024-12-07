import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Exclusao from "../exclusao";

export default class deleteServico extends Exclusao {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servico = servico
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log(`Lista de todos os Serviços`);
        this.servico.forEach(s => {
            console.log(`Serviço: ${s.nome}`);
        })
        let entrada = this.entrada.receberTexto(`Nome do serviço que deseja excluir: `)
        let todosServicos = this.servico.map(i => i.nome)
        let indexServico = todosServicos.indexOf(entrada)
        if (indexServico == -1) {
            console.log(`Servico ${entrada} não encontrado`);
        }
        else {
            let execucao = true
            while (execucao) {
                console.log();
                console.log(`Tem certeza que deseja deletar o serviço?`);
                console.log(`1 - Sim`);
                console.log(`2 - Não`);
                let valor = this.entrada.receberNumero(`Digite a opção: `)
                switch (valor) {
                    case 1:
                        this.servico.map(i => {
                            if (entrada === i.nome) {
                                let index = this.servico.indexOf(i)
                                this.servico.splice(index, 1)
                            }
                        })
                        console.log(`Serviço Deletado com sucesso`);
                    case 2:
                        execucao = false
                        break;
                }
            }
        }
    }
}