import {Logger} from '@modules/terminal/infrastructure/logger';
import {Test,TestingModule} from '@nestjs/testing';

describe('Logger',() => {
    let provider: Logger;

    beforeEach(async () => {
        const module: TestingModule=await Test.createTestingModule({
            providers: [Logger],
        }).compile();

        provider=module.get<Logger>(Logger);
    });

    it('Deve ser definido corretamente',() => {
        expect(provider).toBeDefined();
    });
});
