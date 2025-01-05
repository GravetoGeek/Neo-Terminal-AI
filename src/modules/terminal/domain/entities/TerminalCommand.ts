export default class TerminalCommand {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly timestamp: Date,
        public readonly args: string[]=[],
    ) {}

    /**
     * Executa o comando com os argumentos fornecidos.
     * @returns Mensagem de execução do comando.
     */
    // TODO: Implementar execução de comandos, TerminalCommand.prototype.execute
    execute(): string {
        // Regras de negócio para execução de comandos

        return `Executando '${this.name}' com os seguintes parâmetros: ${this.args.join(' ')}`;
    }
}
