import {NestFactory} from '@nestjs/core';
import {resolve} from 'path';
import 'tsconfig-paths/register';
import {AppModule} from './app.module';

async function bootstrap() {
    const app=await NestFactory.create(AppModule);
    await app.listen(process.env.PORT??3000);
}
bootstrap();
