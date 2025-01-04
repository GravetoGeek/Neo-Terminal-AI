export class Event {
    constructor(
        public readonly eventId: string, // ID único do evento
        public readonly type: string,    // Tipo do evento (e.g., "commandExecuted", "errorOccurred")
        public readonly payload: any,    // Dados associados ao evento
        public readonly occurredAt: Date, // Data/hora do evento
    ) {}
}
