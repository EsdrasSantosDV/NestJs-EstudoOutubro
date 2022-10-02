import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //VALIDACAO PRA REQUISICAO D
  //WHITE LIST SO VAI PASSAR O QUE TIVER NO OBJETO VALIDATOR
  //O forbid not white faz o seguinte se encontrar algo(um campo a mais por exemplo na requisicao post) Ele vai
  // dar uma MENSAGEM DE ERRO,
  //O TRANSFORM AUTOMATICAMENTE VAI TIPAR TANTO NO POST TANTO NO PATCH
  //ELE JA SABE QUAL O TIPO VAI COLOCAR O QUE RECEBEU DA REQUISIÇÃO
  app.useGlobalPipes(new ValidationPipe(
      {
        whitelist:true,
        forbidNonWhitelisted:true,
        transform:true
      }
  ));
  await app.listen(3000);
}
bootstrap();
