export class TerminalCommand {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly args: string[],
        public readonly timestamp: Date,
    ) {}

    execute(): string {
        // Regras de negócio para execução de comandos
        return `Executando ${this.name} com os seguintes parâmetros ${this.args.join(' ')}`;
    }
}
