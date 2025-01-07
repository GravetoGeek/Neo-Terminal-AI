import {Fish} from '@modules/terminal/adapters/fish';
import {Test,TestingModule} from '@nestjs/testing';

describe('Fish',() => {
    let provider: Fish;

    beforeEach(async () => {
        const module: TestingModule=await Test.createTestingModule({
            providers: [Fish],
        }).compile();

        provider=module.get<Fish>(Fish);
    });

    it('Deve ser definido corretamente',() => {
        expect(provider).toBeDefined();
    });
});
