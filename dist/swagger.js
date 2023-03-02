"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const logger = new common_1.Logger('Swagger');
    const swaggerEndpoint = '/api/v2/api-docs';
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Base API')
        .setDescription('API Base')
        .setVersion('1.0.0')
        .addTag('Base')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(swaggerEndpoint, app, document);
    logger.log(`Added swagger on endpoint ${swaggerEndpoint}`);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map