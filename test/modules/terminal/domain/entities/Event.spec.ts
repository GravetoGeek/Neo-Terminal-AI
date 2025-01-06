import Event from "@modules/terminal/domain/entities/Event";

describe('Event',() => {
    it('Deve ser definido ao passar 4 parâmetros.',() => {
        const evento=new Event('1','Evento 1',new Date(),[]);
        expect(evento).toBeDefined();
    });

    it('Deve ser definido ao passar 3 parâmetros.',() => {
        const evento=new Event('1','Evento 1',new Date());
        expect(evento).toBeDefined();
    });

});