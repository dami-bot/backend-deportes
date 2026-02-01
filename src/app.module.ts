import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductosModule } from './productos/productos.module';
import { ProductosController } from './productos/productos.controller';

@Module({
  imports: [ProductosModule],
  controllers: [AppController, ProductosController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
