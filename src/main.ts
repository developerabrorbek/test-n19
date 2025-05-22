import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Multilanguage API')
    .setDescription('The Multilanguage API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 4000;
  await app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}
bootstrap();
