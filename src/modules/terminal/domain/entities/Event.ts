export default class Event {
    constructor(
        public readonly eventId: string, // ID único do evento
        public readonly type: string,    // Tipo do evento (e.g., "commandExecuted", "errorOccurred")
        public readonly occurredAt: Date, // Data/hora do evento
        public readonly payload: object={},    // Dados associados ao evento
    ) {}
}
