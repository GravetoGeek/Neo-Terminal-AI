import {Module} from '@nestjs/common';
import {Fish} from './adapters/fish';
import {TerminalService} from './domain/services/terminal.service';
import {Config} from './infrastructure/config';
import {Logger} from './infrastructure/logger';

@Module({
    providers: [TerminalService,Fish,Logger,Config]
})
export class TerminalModule {}
