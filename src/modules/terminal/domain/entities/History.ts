import CommandResult from '@modules/terminal/domain/entities/CommandResult'; // Adjust the path as necessary

export default class History {
    constructor(
        public readonly historyId: string,       // ID único do histórico
        public readonly userId: string,          // ID do usuário (ou global se null)
        public readonly commands: CommandResult[] // Lista de resultados de comandos
    ) {}

    addResult(result: CommandResult): void {
        this.commands.push(result);
    }

    getLastExecuted(): CommandResult|null {
        return this.commands.length>0? this.commands[this.commands.length-1]:null;
    }
}
