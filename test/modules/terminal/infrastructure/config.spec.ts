import {Config} from '@modules/terminal/infrastructure/config';
import {Test,TestingModule} from '@nestjs/testing';

describe('Config',() => {
    let provider: Config;

    beforeEach(async () => {
        const module: TestingModule=await Test.createTestingModule({
            providers: [Config],
        }).compile();

        provider=module.get<Config>(Config);
    });

    it('Deve ser definido corretamente',() => {
        expect(provider).toBeDefined();
    });
});
