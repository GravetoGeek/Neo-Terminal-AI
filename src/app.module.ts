import {TerminalModule} from '@modules/terminal/terminal.module';
import {Module} from '@nestjs/common';
import {AppController} from '@src/app.controller';
import {AppService} from '@src/app.service';

@Module({
    imports: [TerminalModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
