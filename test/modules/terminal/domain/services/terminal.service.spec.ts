import {TerminalService} from '@modules/terminal/domain/services/terminal.service';
import {Test,TestingModule} from '@nestjs/testing';

describe('TerminalService',() => {
    let service: TerminalService;

    beforeEach(async () => {
        const module: TestingModule=await Test.createTestingModule({
            providers: [TerminalService],
        }).compile();

        service=module.get<TerminalService>(TerminalService);
    });

    it('Deve ser definido corretamente',() => {
        expect(service).toBeDefined();
    });

});
