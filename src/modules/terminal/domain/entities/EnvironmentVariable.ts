export default class EnvironmentVariable {
    constructor(
        public readonly name: string,    // Nome da variável (e.g., "PATH")
        public value: string,   // Valor da variável
        public readonly isProtected: boolean, // Indica se a variável é protegida contra alterações
    ) {}

    updateValue(newValue: string): void {
        if(!this.isProtected) {
            this.value=newValue;
        } else {
            throw new Error('Não é possível modificar uma variável protegida');
        }
    }
}
