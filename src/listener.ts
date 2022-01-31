import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://ikqvqugy:TeIJLJHthFQJG-B4aNPFvsFPMrwvmid7@hummingbird.rmq.cloudamqp.com/ikqvqugy'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      }
    }
  });
  app.listen().then(()=>{
    console.log('Microservice is listening');
  });
}
bootstrap();
