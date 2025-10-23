import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: '*',
  });

  const congif = new DocumentBuilder()
    .setTitle('NestJS Dockerized App')
    .setDescription('API documentation for the NestJS Dockerized Application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, congif);
  SwaggerModule.setup('api', app, document);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  const port = process.env.PORT ?? 3000;;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  //await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((error) => {
  console.error('Error starting the application:', error);  
  process.exit(1);
});
