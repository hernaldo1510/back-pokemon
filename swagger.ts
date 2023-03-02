import { Logger, INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): any {
  const logger: Logger = new Logger('Swagger');
  const swaggerEndpoint = '/api/v2/api-docs';

  const options = new DocumentBuilder()
    .setTitle('Base API')
    .setDescription('API Base')
    .setVersion('1.0.0')
    .addTag('Base')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerEndpoint, app, document);
  logger.log(`Added swagger on endpoint ${swaggerEndpoint}`);
}
