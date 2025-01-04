export default class TerminalConfiguration {
    constructor(
        public readonly id: string,               // Identificador único da configuração
        public readonly userId: string|null,    // Usuário associado (null para configuração padrão)
        public readonly promptStyle: string,      // Estilo do prompt (e.g., "> ")
        public readonly maxHistorySize: number,   // Número máximo de comandos no histórico
        public readonly timeout: number,          // Timeout padrão para execução de comandos (ms)
    ) {}
}
