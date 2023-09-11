import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import * as bodyParser from 'body-parser';
import {CorsOptions} from "@nestjs/common/interfaces/external/cors-options.interface";

async function bootstrap() {
  /*switch (process.env.NODE_ENV) {
    case 'production':
      dotenv.config({ path: '.env.production' });
      console.log('production');
      break;
    case 'development':
      dotenv.config({ path: '.env.development' });
      console.log('development');
      break;
    default:
      dotenv.config({ path: '.env.local' });
      console.log('local');
      break;
  }*/
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const app = await NestFactory.create(AppModule, {
    //logger: ['error', 'warn', 'debug', 'log'],
    logger: [process.env.LOG_LEVEL],
    snapshot: true,
  });
  // Configure CORS
  const corsOptions: CorsOptions = {
    origin: '*', // Change this to the specific origin(s) you want to allow
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  app.enableCors(corsOptions);

  // Sometime after NestFactory add this to add HTTP Basic Auth
  app.use(
    ['/api-docs'],
    basicAuth({
      challenge: true,
      users: {
        '1d7a7728-159b-11ee-be56-0242ac120002': 'p4saw04d_-',
      },
    }),
  );
  Logger.debug(process.env.NODE_ENV);
  //We have to add this line to work transform in our Dto
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  if (process.env.NODE_ENV != 'production') {
    const config = new DocumentBuilder()
      .setTitle('API Docs')
      .setDescription('API Documentation')
      .setVersion('1.0')
      .addTag('Software')
      .addBearerAuth()
      .addServer(`http://localhost:${process.env.PORT}`, 'Local environment')
      .addServer('https://octopass-dev.javatime.ir/', 'Dev environment')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  }
  // Increase the request size limit
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  
  await app.listen(process.env.PORT);
}
bootstrap();
