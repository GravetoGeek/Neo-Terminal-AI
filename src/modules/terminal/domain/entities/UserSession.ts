import TerminalCommand from '@modules/terminal/domain/entities/TerminalCommand';
import {stat} from 'fs';

export class UserSession {
    constructor(
        public readonly sessionId: string, // ID único da sessão
        public readonly userId: string,    // ID do usuário associado
        public readonly commands: TerminalCommand[], // Histórico de comandos na sessão
        public readonly startedAt: Date,   // Data/hora de início da sessão
        public readonly expiredAt: Date|null, // Data/hora de expiração (se aplicável)
    ) {}

    /**
     * Adiciona um comando ao histórico da sessão.
     * @param command Comando a ser adicionado.
     * @returns void
     */
    addCommand(command: TerminalCommand): void {
        this.commands.push(command);
    }

    /**
     * Limpa o histórico de comandos da sessão.
     * @returns void
     */
    clearHistory(): void {
        this.commands.length=0;
    }

    /**
     * Verifica se a sessão expirou.
     * @returns boolean
     */
    isExpired(): boolean {
        return this.expiredAt!==null&&this.expiredAt<new Date();
    }

    /**
     * Verifica se a sessão está ativa.
     * @returns boolean
     */
    hasCommand(commandName: string): boolean {
        return this.commands.some((command) => command.name===commandName);
    }

    /**
     * Retorna um comando do histórico da sessão.
     * @param commandName Nome do comando a ser retornado.
     * @returns TerminalCommand|undefined
     */
    getCommand(commandName: string): TerminalCommand|undefined {
        return this.commands.find((command) => command.name===commandName);
    }

    /**
     * Retorna o histórico de comandos da sessão.
     * @returns TerminalCommand[]
     */
    getCommands(): TerminalCommand[] {
        return this.commands;
    }

    /**
     * Remove um comando do histórico da sessão.
     * @param commandName Nome do comando a ser removido.
     * @returns void
     */
    removeCommand(commandName: string): void {
        const index=this.commands.findIndex((command) => command.name===commandName);
        if(index!==-1) {
            this.commands.splice(index,1);
        }
    }

}
