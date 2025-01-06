export default class AIProviderConfig {
    constructor(
        public readonly providerName: string, // Nome do provedor (e.g., OpenAI, Azure)
        public readonly apiKey: string,       // Chave de API do provedor
        public readonly baseUrl: string,      // URL base do provedor
        public readonly settings: Record<string,unknown>, // Configurações adicionais
    ) {}
}
