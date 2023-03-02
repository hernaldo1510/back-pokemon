import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { from } from 'rxjs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  console.log(configService.get('POKEMON_URL'));
  
  const config = new DocumentBuilder()
  .setTitle('Pokemon Api')
  .setDescription('Listar Pokemones y Obtener caracteristicas de cada uno de ellos')
  .setVersion('1.0')
  .addTag('Pokemon')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();    
