export class CommandResult {
    constructor(
        public readonly commandId: string,  // Referência ao comando original
        public readonly output: string,     // Saída gerada pelo comando
        public readonly error: string|null, // Mensagem de erro (se houver)
        public readonly executionTime: number, // Tempo de execução em milissegundos
    ) {}
}
