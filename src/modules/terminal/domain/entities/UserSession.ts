import TerminalCommand from '@modules/terminal/domain/entities/TerminalCommand';

export class UserSession {
    constructor(
        public readonly sessionId: string, // ID único da sessão
        public readonly userId: string,    // ID do usuário associado
        public readonly commands: TerminalCommand[], // Histórico de comandos na sessão
        public readonly startedAt: Date,   // Data/hora de início da sessão
        public readonly expiredAt: Date|null, // Data/hora de expiração (se aplicável)
    ) {}

    addCommand(command: TerminalCommand): void {
        this.commands.push(command);
    }

    clearHistory(): void {
        this.commands.length=0;
    }
}
